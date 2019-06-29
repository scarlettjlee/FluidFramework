/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IPlatform } from "@prague/container-definitions";
import { EventEmitter } from "events";

class DefinitionGuide extends EventEmitter {
    private counter = 0;
    private dts: string = "";

    constructor() {
        super();

        setInterval(
            () => {
                let dts = "declare class Facts {\n";
                for (let i = 0; i < this.counter; i++) {
                    dts += `    static next${i}(): string;\n`;
                }
                dts += "}";
                this.dts = dts;

                this.counter++;

                this.emit("definitionsChanged");
            },
            5000);
    }

    public getDefinition(): string {
        return this.dts;
    }
}

/**
 * Provides access to the underlying platform.
 */
export class WebPlatform extends EventEmitter implements IPlatform {
    private readonly definitions = new DefinitionGuide();

    constructor(private readonly div: HTMLElement) {
        super();
    }

    /**
     * Queries the platform for an interface of the given ID.
     * @param id - id of the interface for which the query is made.
     */
    public async queryInterface<T>(id: string): Promise<any> {
        switch (id) {
            case "dom":
                return document;
            case "div":
                return this.div;
            case "dts":
                return this.definitions;
            default:
                return null;
        }
    }

    // Temporary measure to indicate the UI changed
    public update() {
        this.emit("update");
    }

    public detach() {
        return;
    }
}
