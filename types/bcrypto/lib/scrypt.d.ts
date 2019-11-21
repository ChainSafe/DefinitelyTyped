/// <reference types="node"/>

declare const native: number;

/**
 * Perform scrypt key derivation.
 */
declare function derive(passwd: Buffer, salt: Buffer, N: number, r: number, p: number, len: number): Buffer;

declare function deriveAsync(passwd: Buffer, salt: Buffer, N: number, r: number, p: number, len: number): Promise<Buffer>;

export {
    native,
    derive,
    deriveAsync
};
