/// <reference types="node"/>

/**
 * sha1.js - SHA1 implementation for bcrypto
 * Copyright (c) 2017-2019, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcrypto
 *
 * Parts of this software are based on indutny/hash.js:
 *   Copyright (c) 2014, Fedor Indutny (MIT License).
 *   https://github.com/indutny/hash.js
 *
 * Resources:
 *   https://en.wikipedia.org/wiki/SHA-1
 *   https://tools.ietf.org/html/rfc3174
 *   http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *   https://github.com/indutny/hash.js/blob/master/lib/hash/sha/1.js
 */
export class SHA1 {
    init(): this;
    update(data: Buffer): this;
    final(): Buffer;

    static hash(): SHA1;
    // static hmac(): HMAC;
    static digest(data: Buffer): Buffer;
    static root(left: Buffer, right: Buffer): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer): Buffer;
    static mac(data: Buffer, key: Buffer): Buffer;
}
