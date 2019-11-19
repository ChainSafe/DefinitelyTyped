/// <reference types="node"/>
import { SHAKE } from '../';

declare class SHAKE256 extends SHAKE {
    init(): this;

    static hash(): SHAKE256;
    // static hmac(len?: number): HMAC;
    static digest(data: Buffer, bits?: number, len?: number): Buffer;
    static root(left: Buffer, right: Buffer, bits?: number, len?: number): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer, bits?: number, len?: number): Buffer;
    static mac(data: Buffer, key: Buffer, bits?: number, len?: number): Buffer;
}

export = SHAKE256;
