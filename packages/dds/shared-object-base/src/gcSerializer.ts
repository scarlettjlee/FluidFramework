/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { IFluidHandle } from "@fluidframework/core-interfaces";
import { FluidSerializer } from "@fluidframework/runtime-utils";

/**
 * Serializer implementation for collecting handles during garbage collection.
 */
export class GCSerializer extends FluidSerializer {
    private readonly serializedRoutes: Set<string> = new Set();
    public getSerializedRoutes(): string[] {
        return Array.from(this.serializedRoutes);
    }

    /**
     * Does nothing but save handles. Does not replace.
     */
    public replaceHandles(
        input: any,
        bind: IFluidHandle,
    ) {
        this.collectHandles(input);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return input;
    }

    /**
     * Does not stringify. Only collects handles.
     */
    public stringify(input: any, bind: IFluidHandle) {
        this.collectHandles(input);
        return "";
    }

    protected serializeHandle(handle: IFluidHandle, bind: IFluidHandle) {
        this.serializedRoutes.add(handle.absolutePath);
        return super.serializeHandle(handle, bind);
    }

    /**
     * Get all the handles reachable from the input
    */
    private collectHandles(input: any) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!!input && typeof input === "object") {
            this.recursivelyCollectHandles(input);
        }
    }

    private recursivelyCollectHandles(input: any) {
        // Note: Caller is responsible for ensuring that `input` is defined / non-null.
        //       (Required for Object.keys() below.)

        // If `input` is a handle, there is no need to descend further. IFluidHandles are always
        // leaves in the object graph.
        const handle = input?.IFluidHandle;
        if (handle !== undefined) {
            this.serializedRoutes.add(handle.absolutePath);
            return;
        }

        // Otherwise descend into the object graph looking for IFluidHandle instances.
        for (const key of Object.keys(input)) {
            const value = input[key];
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!!value && typeof value === "object") {
                // Note: Except for IFluidHandle, `input` must not contain circular references (as object must
                //       be JSON serializable.)
                this.recursivelyCollectHandles(value);
            }
        }
    }
}
