/// <reference types="node"/>

declare const native: number;

declare function seal(msg: Buffer, key: Buffer, nonce: Buffer): Buffer;

declare function open(sealed: Buffer, key: Buffer, nonce: Buffer): Buffer;

type KdfFunction = (secret: Buffer) => Buffer;

interface KdfObject {
    digest: KdfFunction;
    size: number;
}

declare function derive(secret: Buffer, kdf?: KdfFunction | KdfObject): Buffer;

export {
    native,
    seal,
    open,
    derive
};
