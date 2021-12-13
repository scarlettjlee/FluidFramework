/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { v4 as uuid } from "uuid";
import { ITelemetryLogger } from "@fluidframework/common-definitions";
import { assert } from "@fluidframework/common-utils";
import { AttachState } from "@fluidframework/container-definitions";
import { IFluidHandle, IFluidSerializer } from "@fluidframework/core-interfaces";
import {
    IChannelAttributes,
    IFluidDataStoreRuntime,
    IChannelStorageService,
    IChannelServices,
    IStateHost,
} from "@fluidframework/datastore-definitions";
import { ISequencedDocumentMessage } from "@fluidframework/protocol-definitions";
import {
    IGarbageCollectionData,
    ISummaryTreeWithStats,
} from "@fluidframework/runtime-definitions";
import { FluidSerializer } from "@fluidframework/runtime-utils";
import { ChildLogger, EventEmitterWithErrorHandling } from "@fluidframework/telemetry-utils";
import { SharedObjectHandle } from "./handle";
import { SummarySerializer } from "./summarySerializer";
import { ISharedObject, ISharedObjectEvents } from "./types";

export interface ISharedObjectStateHost {
    /**
     * Produce a summary from the previously captured state of this object
     */
    summarize(serializer: IFluidSerializer, fullTree?: boolean): Promise<ISummaryTreeWithStats>;
}

/**
 *  Base class from which all shared objects derive
 */
export abstract class SharedObjectBase<TEvent extends ISharedObjectEvents = ISharedObjectEvents>
    extends EventEmitterWithErrorHandling<TEvent> implements ISharedObject<TEvent> {
    /**
     * @param obj - The thing to check if it is a SharedObject
     * @returns Returns true if the thing is a SharedObject
     */
    public static is(obj: any): obj is SharedObjectBase {
        return obj?.ISharedObject !== undefined;
    }

    public get ISharedObject() { return this; }
    public get IChannel() { return this; }
    public get IFluidLoadable() { return this; }

    /**
     * The handle referring to this SharedObject
     */
    public readonly handle: IFluidHandle;

    /**
     * Telemetry logger for the shared object
     */
    protected readonly logger: ITelemetryLogger;

    /**
     * Connection state
     */
    private _connected = false;

    /**
     * Services used by the shared object
     */
    private services: IChannelServices | undefined;

    /**
     * True if the dds is bound to its parent.
     */
    private _isBoundToContext: boolean = false;

    /**
     * True while we are garbage collecting this object's data to prevent use of regular serializer.
     */
    private _isGCing: boolean = false;

    /**
     * Gets the connection state
     * @returns The state of the connection
     */
    public get connected(): boolean {
        return this._connected;
    }

    protected get serializer(): IFluidSerializer {
        /**
         * During GC, the summarization process is called with the SummarySerializer that keeps track of IFluidHandles
         * that are serialized. These handles represent references to other Fluid objects.
         */
        assert(!this._isGCing,
            0x075 /* "SummarySerializer should be used for serializing data during summary." */);
        return this._serializer;
    }

    /**
     * The serializer to use to serialize / parse handles, if any.
     */
    private readonly _serializer: IFluidSerializer;

    /**
     * @param id - The id of the shared object
     * @param runtime - The IFluidDataStoreRuntime which contains the shared object
     * @param attributes - Attributes of the shared object
     */
    constructor(
        public id: string,
        protected runtime: IFluidDataStoreRuntime,
        public readonly attributes: IChannelAttributes)
    {
        super((eventName, error) => this.runtime.raiseContainerWarning(error));

        this.handle = new SharedObjectHandle(
            this,
            id,
            runtime.IFluidHandleContext);

        this.logger = ChildLogger.create(
            runtime.logger,
            undefined,
            { all: { sharedObjectId: uuid() } },
        );

        this._serializer = new FluidSerializer(this.runtime.channelsRoutingContext);

        this.attachListeners();
    }

    private attachListeners() {
        // Only listen to these events if not attached.
        if (!this.isAttached()) {
            this.runtime.once("attaching", () => {
                // Calling this will let the dds to do any custom processing based on attached
                // like starting generating ops.
                this.didAttach();
            });
        }
    }

    /**
     * A shared object, after construction, can either be loaded in the case that it is already part of
     * a shared document. Or later attached if it is being newly added.
     * @param services - Services used by the shared object
     */
    public async load(services: IChannelServices): Promise<void> {
        if (this.runtime.attachState !== AttachState.Detached) {
            this.services = services;
        }
        await this.loadCore(services.objectStorage);
        if (this.runtime.attachState !== AttachState.Detached) {
            this.attachDeltaHandler();
        }
    }

    /**
     * Initializes the object as a local, non-shared object. This object can become shared after
     * it is attached to the document.
     */
    public initializeLocal(): void {
        this.initializeLocalCore();
    }

    /**
     * {@inheritDoc (ISharedObject:interface).bindToContext}
     */
    public bindToContext(): void {
        if (this._isBoundToContext) {
            return;
        }

        this._isBoundToContext = true;

        // Allow derived classes to perform custom processing prior to registering this object
        this.registerCore();

        this.runtime.bindChannel(this);
    }

    /**
     * {@inheritDoc (ISharedObject:interface).connect}
     */
    public connect(services: IChannelServices) {
        this.services = services;
        this.attachDeltaHandler();
    }

    /**
     * {@inheritDoc (ISharedObject:interface).isAttached}
     */
    public isAttached(): boolean {
        return this.services !== undefined && this.runtime.attachState !== AttachState.Detached;
    }

    /**
     * {@inheritDoc (ISharedObject:interface).captureState}
     */
    public captureState(): IStateHost {
        const state = this.captureStateCore();
        return { summarize: async (fullTree: boolean = false) => {
            return state.summarize(this._serializer, fullTree);
        }};
    }

    /**
     * {@inheritDoc (ISharedObject:interface).getGCData}
     */
    public async getGCData(fullGC: boolean = false): Promise<IGarbageCollectionData> {
        // Set _isGCing to true. This flag is used to ensure that we only use SummarySerializer (created in
        // getGCDataCore) to serialize handles in this object's data.
        // Assertions for re-entrancy are only to ensure _isGCing value is correct. If we want to support re-entrancy
        // in the future, it can be changed to a count of GC calls in progress.
        assert(!this._isGCing, 0x078 /* "Possible re-entrancy! Summary should not already be in progress." */);
        this._isGCing = true;

        let gcData: IGarbageCollectionData;
        try {
            gcData = await this.getGCDataCore();
            assert(this._isGCing, 0x079 /* "Possible re-entrancy! Summary should have been in progress." */);
        } finally {
            this._isGCing = false;
        }

        return gcData;
    }

    /**
     * Returns the GC data for this shared object. It contains a list of GC nodes that contains references to
     * other GC nodes.
     * Derived classes must override this to provide custom list of references to other GC nodes.
     */
    protected async getGCDataCore(): Promise<IGarbageCollectionData> {
        // We run the full summarize logic to get the list of outbound routes from this object. This is a little
        // expensive but it's okay for now. It will be updated to not use full summarize and make it more efficient.
        // See: https://github.com/microsoft/FluidFramework/issues/4547
        const serializer = new SummarySerializer(this.runtime.channelsRoutingContext);
        const state = this.captureStateCore();
        await state.summarize(serializer, false);

        // The GC data for this shared object contains a single GC node. The outbound routes of this node are the
        // routes of handles serialized during summarization.
        return {
            gcNodes: { "/": serializer.getSerializedRoutes() },
        };
    }

    /**
     * Capture all the current state of this object,
     * which can be used to later generate a summary for the state when it was captured.
     */
    protected abstract captureStateCore(): ISharedObjectStateHost;

    /**
     * Allows the distributed data type to perform custom loading
     * @param services - Storage used by the shared object
     */
    protected abstract loadCore(services: IChannelStorageService): Promise<void>;

    /**
     * Allows the distributed data type to perform custom local loading.
     */
    protected initializeLocalCore() {
        return;
    }

    /**
     * Allows the distributed data type the ability to perform custom processing once an attach has happened.
     */
    protected abstract registerCore();

    /**
     * Allows the distributive data type the ability to perform custom processing once an attach has happened.
     * Also called after non-local data type get loaded.
     */
    protected didAttach() {
        return;
    }

    /**
     * Derived classes must override this to do custom processing on a remote message.
     * @param message - The message to process
     * @param local - True if the shared object is local
     * @param localOpMetadata - For local client messages, this is the metadata that was submitted with the message.
     * For messages from a remote client, this will be undefined.
     */
    protected abstract processCore(message: ISequencedDocumentMessage, local: boolean, localOpMetadata: unknown);

    /**
     * Called when the object has disconnected from the delta stream.
     */
    protected abstract onDisconnect();

    /**
     * Submits a message by the local client to the runtime.
     * @param content - Content of the message
     * @param localOpMetadata - The local metadata associated with the message. This is kept locally by the runtime
     * and not sent to the server. This will be sent back when this message is received back from the server. This is
     * also sent if we are asked to resubmit the message.
     */
    protected submitLocalMessage(content: any, localOpMetadata: unknown = undefined): void {
        if (this.isAttached()) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.services!.deltaConnection.submit(content, localOpMetadata);
        }
    }

    /**
     * Marks this object as dirty so that it is part of the next summary. It is called by a SharedSummaryBlock
     * that want to be part of summary but does not generate ops.
     */
    protected dirty(): void {
        if (!this.isAttached()) {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.services!.deltaConnection.dirty();
    }

    /**
     * Called when the object has fully connected to the delta stream
     * Default implementation for DDS, override if different behavior is required.
     */
    protected onConnect() { }

    /**
     * Called when a message has to be resubmitted. This typically happens after a reconnection for unacked messages.
     * The default implementation here is to resubmit the same message. The client can override if different behavior
     * is required. It can choose to resubmit the same message, submit different / multiple messages or not submit
     * anything at all.
     * @param content - The content of the original message.
     * @param localOpMetadata - The local metadata associated with the original message.
     */
    protected reSubmitCore(content: any, localOpMetadata: unknown) {
        this.submitLocalMessage(content, localOpMetadata);
    }

    /**
     * Promises that are waiting for an ack from the server before resolving should use this instead of new Promise.
     * It ensures that if something changes that will interrupt that ack (e.g. the FluidDataStoreRuntime disposes),
     * the Promise will reject.
     * If runtime is disposed when this call is made, executor is not run and promise is rejected right away.
     */
    protected async newAckBasedPromise<T>(
        executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
    ): Promise<T> {
        let rejectBecauseDispose: () => void;
        return new Promise<T>((resolve, reject) => {
            rejectBecauseDispose =
                () => reject(new Error("FluidDataStoreRuntime disposed while this ack-based Promise was pending"));

            if (this.runtime.disposed) {
                rejectBecauseDispose();
                return;
            }

            this.runtime.on("dispose", rejectBecauseDispose);
            executor(resolve, reject);
        }).finally(() => {
            // Note: rejectBecauseDispose will never be undefined here
            this.runtime.off("dispose", rejectBecauseDispose);
        });
    }

    private attachDeltaHandler() {
        // Services should already be there in case we are attaching delta handler.
        assert(this.services !== undefined, 0x07a /* "Services should be there to attach delta handler" */);
        this._isBoundToContext = true;
        // Allows objects to do any custom processing if it is attached.
        this.didAttach();

        // attachDeltaHandler is only called after services is assigned
        this.services.deltaConnection.attach({
            process: (message: ISequencedDocumentMessage, local: boolean, localOpMetadata: unknown) => {
                this.process(message, local, localOpMetadata);
            },
            setConnectionState: (connected: boolean) => {
                this.setConnectionState(connected);
            },
            reSubmit: (content: any, localOpMetadata: unknown) => {
                this.reSubmit(content, localOpMetadata);
            },
            applyStashedOp: (content: any): unknown => {
                return this.applyStashedOp(content);
            },
        });

        // Trigger initial state
        // attachDeltaHandler is only called after services is assigned
        this.setConnectionState(this.services.deltaConnection.connected);
    }

    /**
     * Set the state of connection to services.
     * @param connected - true if connected, false otherwise.
     */
    private setConnectionState(connected: boolean) {
        if (this._connected === connected) {
            // Not changing state, nothing the same.
            return;
        }

        // Should I change the state at the end? So that we *can't* send new stuff before we send old?
        this._connected = connected;

        if (!connected) {
            // Things that are true now...
            // - if we had a connection we can no longer send messages over it
            // - if we had outbound messages some may or may not be ACK'd. Won't know until next message
            //
            // - nack could get a new msn - but might as well do it in the join?
            this.onDisconnect();
        } else {
            // Call this for now so that DDSes like ConsensesOrderedCollection that maintain their own pending
            // messages will work.
            this.onConnect();
        }
    }

    /**
     * Handles a message being received from the remote delta server.
     * @param message - The message to process
     * @param local - Whether the message originated from the local client
     * @param localOpMetadata - For local client messages, this is the metadata that was submitted with the message.
     * For messages from a remote client, this will be undefined.
     */
    private process(message: ISequencedDocumentMessage, local: boolean, localOpMetadata: unknown) {
        this.emit("pre-op", message, local, this);
        this.processCore(message, local, localOpMetadata);
        this.emit("op", message, local, this);
    }

    /**
     * Called when a message has to be resubmitted. This typically happens for unacked messages after a
     * reconnection.
     * @param content - The content of the original message.
     * @param localOpMetadata - The local metadata associated with the original message.
     */
    private reSubmit(content: any, localOpMetadata: unknown) {
        this.reSubmitCore(content, localOpMetadata);
    }

    protected abstract applyStashedOp(content: any): unknown;
}
