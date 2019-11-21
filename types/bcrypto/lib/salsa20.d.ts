/// <reference types="node"/>

declare class Salsa20 {
    init(key: Buffer, nonce: Buffer, counter: number): this;

    encrypt(data: Buffer): Buffer;

    crypt(input: Buffer, output: Buffer): Buffer;

    destroy(): this;

    static derive(key: Buffer, nonce: Buffer): Buffer;

    static native: number;
}

export = Salsa20;
