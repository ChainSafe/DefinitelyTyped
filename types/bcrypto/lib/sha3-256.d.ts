/// <reference types="node"/>
import SHA3 = require('./sha3');

declare class SHA3_256 extends SHA3 {
    ctx: SHA3_256;

    init(): this;

    static hash(): SHA3;
    // static hmac(): HMAC;
    static digest(data: Buffer): Buffer;
    static root(left: Buffer, right: Buffer): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer): Buffer;
    static mac(data: Buffer, key: Buffer): Buffer;
}

export = SHA3_256;
