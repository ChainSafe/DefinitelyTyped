/// <reference types="node"/>

export class Whirlpool {
    native: number;
    id: string;
    size: number;
    bits: number;
    blockSize: number;
    zero: Buffer;
    ctx: Whirlpool;
    /**
     * Initialize Whirlpool context.
     */
    init(): Whirlpool;

    /**
     * Update Whirlpool context.
     * @param {Buffer} data
     */
    update(data: Buffer): Whirlpool;

    /**
     * Finalize Whirlpool context.
     * @returns {Buffer}
     */
    final(): Buffer;

    static hash(): Whirlpool;

    // static hmac(): HMAC;

    static digest(data: Buffer): Buffer;

    static root(left: Buffer, right: Buffer): Buffer;

    static multi(x: Buffer, y: Buffer, z: Buffer): Buffer;

    static mac(data: Buffer, key: Buffer): Buffer;
}
