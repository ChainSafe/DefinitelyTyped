// Type definitions for bcrypto 4.2
// Project: https://github.com/bcoin-org/bcrypto
// Definitions by: Chainsafe <https://github.com/chainsafe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as siphashModule from "./siphash";

export { Keccak } from "./keccak";
export { SHA3 } from "./sha3";
export { SHA3_224 } from "./sha3-224";
export { SHA3_256 } from "./sha3-256";
export { SHA3_384 } from "./sha3-384";
export { SHA3_512 } from "./sha3-512";
export { SHAKE } from "./shake";
export { SHAKE128 } from "./shake128";
export { SHAKE256 } from "./shake256";
export { Whirlpool } from "./whirpool";
export const siphash: typeof siphashModule;
// export const x25519: typeof ECDH;
// export const x448: typeof ECDH;

export const version: string;
