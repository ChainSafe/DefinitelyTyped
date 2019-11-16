/// <reference types="node"/>
type CipherAlgorithm =
  "AES-128" |
  "AES-192" |
  "AES-256" |
  "BF" |
  "CAMELLIA-128" |
  "CAMELLIA-192" |
  "CAMELLIA-256" |
  "CAST5" |
  "DES" |
  "DES-EDE" |
  "DES-EDE3" |
  "IDEA" |
  "RC2-64" |
  "TWOFISH-128" |
  "TWOFISH-192" |
  "TWOFISH-256";

type CipherMode =
  "ECB" | "CBC" | "CTR" | "OFB" | "GCM";

export class _CipherBase {
  constructor(name: CipherAlgorithm, encrypt: boolean);
  init(key: Buffer, iv: Buffer): this;
  update(data: Buffer): this;
  final(): Buffer;
  setAAD(data: Buffer): this;
  getAuthTag(): Buffer;
  setAuthTag(tag: Buffer): this;
}

export class Cipher extends _CipherBase {
  constructor(name: CipherAlgorithm);
}

export class Decipher extends _CipherBase {
  constructor(name: CipherAlgorithm);
}

export function encrypt(name: CipherAlgorithm, key: Buffer, iv: Buffer, data: Buffer): Buffer;
export function decrypt(name: CipherAlgorithm, key: Buffer, iv: Buffer, data: Buffer): Buffer;

declare class CipherInfo {
  name: string;
  algorithm: CipherAlgorithm;
  mode: CipherMode;
  blockSize: number;
  keySize: number;
  ivSize: number;
}

export function info(cipher: string): CipherInfo;
export function get(cipher: string): CipherInfo;
export function has(cipher: string): boolean;
