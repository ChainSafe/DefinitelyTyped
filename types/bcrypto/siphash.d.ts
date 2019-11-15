/// <reference types="node"/>
declare const native: number;

/**
 * Javascript siphash 2-4 implementation.
 * Used by bitcoin for compact block relay.
 * @param data
 * @param key - 128 bit key.
 * @returns [hi, lo]
 */
declare function siphashD(data: Buffer, key: Buffer): [number, number];

/**
 * Javascript siphash 2-4 implementation (32 bit ints).
 * Used by legacy cuckoo cycle.
 * @param num
 * @param key - 128 bit key.
 */
declare function siphash32(num: number, key: Buffer): number;

/**
 * Javascript siphash 2-4 implementation (64 bit ints).
 * Used by legacy cuckoo cycle.
 * @param hi
 * @param lo
 * @param key - 128 bit key.
 * @returns [hi, lo]
 */
declare function siphash64(hi: number, lo: number, key: Buffer): [number, number];

/**
 * Javascript siphash 2-4 implementation
 * (32 bit ints with a 256 bit key).
 * Used by cuckoo cycle.
 * @param num
 * @param key - 256 bit key.
 */
declare function siphash32k256(num: number, key: Buffer): number;

/**
 * Javascript siphash 2-4 implementation
 * (64 bit ints with a 256 bit key).
 * Used by cuckoo cycle.
 * @param hi
 * @param lo
 * @param key - 256 bit key.
 * @returns [hi, lo]
 */
declare function siphash64k256(hi: number, lo: number, key: Buffer): [number, number];

/**
 * Javascript siphash 2-4 implementation
 * plus 128 bit reduction by a modulus.
 * Used by the neutrino protocol.
 * @param data
 * @param key - 128 bit key.
 * @param mhi - Modulus hi bits.
 * @param mlo - Modulus lo bits.
 * @returns [hi, lo]
 */
declare function sipmod(data: Buffer, key: Buffer, mhi: number, mlo: number): [number, number];

export {
    native,
    siphashD,
    siphash32,
    siphash64,
    siphash32k256,
    siphash64k256,
    sipmod,
};
