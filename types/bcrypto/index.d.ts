// Type definitions for bcrypto 4.2
// Project: https://github.com/bcoin-org/bcrypto
// Definitions by: Chainsafe <https://github.com/chainsafe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="lib/keccak.d.ts" />
/// <reference path="lib/siphash.d.ts" />
/// <reference path="lib/whirlpool.d.ts" />

import * as siphashModule from "./lib/siphash";
import WhirlpoolClass from './lib/whirlpool';
import KeccakClass from "./lib/keccak";
import SHA1Class from './lib/sha1';
import SHA3Class from './lib/sha3';
import SHA3_256Class from './lib/sha3-256';
import SHA3_384Class from './lib/sha3-384';
import SHA3_512Class from './lib/sha3-512';
import SHA224Class from './lib/sha224';
import SHA256Class from './lib/sha256';
import SHAKEClass from './lib/shake';
import SHAKE128Class from './lib/shake128';
import SHAKE256Class from './lib/shake256';

export const Keccak: typeof KeccakClass;

export const SHA1: typeof SHA1Class;
export const SHA3: typeof SHA3Class;
export const SHA3_256: typeof SHA3_256Class;
export const SHA3_384: typeof SHA3_384Class;
export const SHA3_512: typeof SHA3_512Class;
export const SHA224: typeof SHA224Class;
export const SHA256: typeof SHA256Class;
export const SHAKE: typeof SHAKEClass;
export const SHAKE128: typeof SHAKE128Class;
export const SHAKE256: typeof SHAKE256Class;
export const Whirlpool: typeof WhirlpoolClass;
export const siphash: typeof siphashModule;
// export const x25519: typeof ECDH;
// export const x448: typeof ECDH;

export const version: string;
