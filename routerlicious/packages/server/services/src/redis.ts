import { ICache } from "@prague/services-core";
import { RedisClient } from "redis";
import * as util from "util";

/**
 * Redis based cache client
 */
export class RedisCache implements ICache {
    private getAsync: any;
    private setAsync: any;

    constructor(client: RedisClient, private prefix = "page") {
        this.getAsync = util.promisify(client.get.bind(client));
        this.setAsync = util.promisify(client.set.bind(client));
    }

    public async get(key: string): Promise<string> {
        return this.getAsync(this.getKey(key));
    }

    public async set(key: string, value: string): Promise<void> {
        const result = await this.setAsync(this.getKey(key), value);
        if (result !== "OK") {
            return Promise.reject(result);
        }
    }

    /**
     * Translates the input key to the one we will actually store in redis
     */
    private getKey(key: string): string {
        return `${this.prefix}:${key}`;
    }
}
