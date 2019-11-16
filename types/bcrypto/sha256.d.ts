/// <reference types="node"/>

/**
 * sha256.js - SHA256 implementation for bcrypto
 * Copyright (c) 2016-2019, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcrypto
 *
 * Parts of this software are based on indutny/hash.js:
 *   Copyright (c) 2014, Fedor Indutny (MIT License).
 *   https://github.com/indutny/hash.js
 *
 * Resources:
 *   https://en.wikipedia.org/wiki/SHA-2
 *   https://tools.ietf.org/html/rfc4634
 *   https://github.com/indutny/hash.js/blob/master/lib/hash/sha/256.js
 */
export class SHA256 {
    init(): this;
    update(data: Buffer): this;
    final(): Buffer;

    static hash(): SHA256;
    // static hmac(): HMAC;
    static digest(data: Buffer): Buffer;
    static root(left: Buffer, right: Buffer): Buffer;
    static multi(x: Buffer, y: Buffer, z: Buffer): Buffer;
    static mac(data: Buffer, key: Buffer): Buffer;
}
