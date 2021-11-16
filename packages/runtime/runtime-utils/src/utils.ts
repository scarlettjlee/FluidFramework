/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { ISerializedHandle } from "@fluidframework/core-interfaces";
import { IDocumentAttributes, ISnapshotTree } from "@fluidframework/protocol-definitions";

export const isSerializedHandle = (value: any): value is ISerializedHandle =>
    value?.type === "__fluid_handle__";

/** Reads a blob from storage and parses it from JSON. */
export type ReadAndParseBlob = <T>(id: string) => Promise<T>;

/**
 * Fetches the sequence number of the snapshot tree by examining the protocol.
 * @param tree - snapshot tree to examine
 * @param readAndParseBlob - function to read blob contents from storage
 * and parse the result from JSON.
 */
export async function seqFromTree(
    tree: ISnapshotTree,
    readAndParseBlob: ReadAndParseBlob,
): Promise<number> {
    const attributesHash = tree.trees[".protocol"].blobs.attributes;
    const attrib = await readAndParseBlob<IDocumentAttributes>(attributesHash);
    return attrib.sequenceNumber;
}

/**
 * Get all the handles reachable from the input
 */
export function getHandles(input: any): string[] {
    const serializedRoutes: Set<string> = new Set();

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!!input && typeof input === "object") {
        recursivelyGetHandles(input, serializedRoutes);
    }

    return Array.from(serializedRoutes);
}

function recursivelyGetHandles(input: any, serializedRoutes: Set<string>) {
    // Note: Caller is responsible for ensuring that `input` is defined / non-null.
    //       (Required for Object.keys() below.)

    // If `input` is a handle, there is no need to descend further. IFluidHandles are always
    // leaves in the object graph.
    const handle = input?.IFluidHandle;
    if (handle !== undefined) {
        serializedRoutes.add(handle.absolutePath);
        return;
    }

    // Otherwise descend into the object graph looking for IFluidHandle instances.
    for (const key of Object.keys(input)) {
        const value = input[key];
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!!value && typeof value === "object") {
            // Note: Except for IFluidHandle, `input` must not contain circular references (as object must
            //       be JSON serializable.)
            recursivelyGetHandles(value, serializedRoutes);
        }
    }
}
