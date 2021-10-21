/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { getDefaultObjectFromContainer } from "@fluidframework/aqueduct";
import { getTinyliciousContainer } from "@fluid-experimental/get-container";

import { CollaborativeText } from "./fluid-object";
import { CollaborativeTextContainer } from "./container";

// Re-export everything
export { CollaborativeText as CollaborativeTextExample, CollaborativeTextContainer };

/**
 * This is a helper function for loading the page. It's required because getting the Fluid Container
 * requires making async calls.
 */
async function start() {
    // when the document ID is not provided, create a new one.
    const shouldCreateNew = location.hash.length === 0;
    const documentId = !shouldCreateNew ? window.location.hash.substring(1) : "";

    const [container, containerId] = await getTinyliciousContainer(
        documentId, CollaborativeTextContainer, shouldCreateNew,
    );

    // update the browser URL and the window title with the actual container ID
    location.hash = containerId;
    document.title = containerId;

    // Get the Default Object from the Container
    const defaultObject = await getDefaultObjectFromContainer<CollaborativeText>(container);

    // For now we will just reach into the FluidObject to render it
    const contentDiv = document.getElementById("content");
    // eslint-disable-next-line no-null/no-null
    if (contentDiv !== null) {
        defaultObject.render(contentDiv);
    }

    // Setting "fluidStarted" is just for our test automation
    // eslint-disable-next-line @typescript-eslint/dot-notation
    window["fluidStarted"] = true;
}

start().catch((e) => {
    console.error(e);
    console.log("%cEnsure you are running the Tinylicious Fluid Server\nUse:`npm run start:server`", "font-size:30px");
});
