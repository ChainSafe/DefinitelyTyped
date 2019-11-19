/// <reference types="node"/>
import { Keccak } from '../';

declare class SHAKE extends Keccak {
    final(len?: number): Buffer;

    static hash(): SHAKE;
    // static hmac(bits?: number, pad?: number, len?: number): HMAC;
    static digest(data: Buffer, bits?: number, len?: number): Buffer;
    static root(left: Buffer, right: Buffer, bits?: number, len?: number): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer, bits?: number, len?: number): Buffer;
    static mac(data: Buffer, key: Buffer, bits?: number, len?: number): Buffer;
}

export = SHAKE;
