/// <reference types="node"/>
import { SHA3 } from './sha3';

export class SHA3_512 extends SHA3 {
    ctx: SHA3_512;

    init(): this;

    static hash(): SHA3;
    // static hmac(): HMAC;
    static digest(data: Buffer): Buffer;
    static root(left: Buffer, right: Buffer): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer): Buffer;
    static mac(data: Buffer, key: Buffer): Buffer;
}
