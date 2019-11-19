/// <reference types="node"/>
import Keccak = require('./keccak');

declare class SHA3 extends Keccak {
    ctx: SHA3;

    final(): Buffer;

    static hash(): SHA3;
    // static hmac(bits?: number): HMAC;
    static digest(data: Buffer, bits?: number): Buffer;
    static root(left: Buffer, right: Buffer, bits?: number): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer, bits?: number): Buffer;
    static mac(data: Buffer, key: Buffer, bits?: number): Buffer;
}

export = SHA3;
