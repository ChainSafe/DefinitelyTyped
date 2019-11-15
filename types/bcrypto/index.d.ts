// Type definitions for bcrypto 4.2
// Project: https://github.com/bcoin-org/bcrypto
// Definitions by: Chainsafe <https://github.com/chainsafe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as whirlpool from "./whirpool";
import * as keccak from "./keccak";
import * as shake from "./shake";
import * as shake128 from "./shake128";
import * as siphashModule from "./siphash";

export const Keccak: typeof keccak.Keccak;
export const SHAKE: typeof shake.SHAKE;
export const SHAKE128: typeof shake128.SHAKE128;
export const Whirlpool: typeof whirlpool.Whirlpool;
export const siphash: typeof siphashModule;
// export const x25519: typeof ECDH;
// export const x448: typeof ECDH;

export const version: string;
