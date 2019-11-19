/// <reference types="node"/>

import {Curve} from "./elliptic";

export default class ECDSA {
  constructor(name: string, hash: any, pre?: string);
  curve: Curve;
  schnorr: any;
  size: number;
  bits: number;
  privateKeyGenerate(): Buffer;
  privateKeyVerify(key: Buffer): boolean;
  privateKeyExport(key: Buffer, compress?: boolean): Buffer;
  privateKeyImport(raw: Buffer): Buffer;
  privateKeyExportPKCS8(key: Buffer, compress?: boolean): Buffer;
  privateKeyImportPKCS8(raw: Buffer): Buffer;
  privateKeyExportJWK(key: Buffer): object;
  privateKeyImportJWK(json: object): Buffer;
  privateKeyTweakAdd(key: Buffer, tweak: any): Buffer;
  privateKeyTweakMul(key: Buffer, tweak: any): Buffer;
  privateKeyNegate(key: Buffer): Buffer;
  privateKeyInvert(key: Buffer): Buffer;
  publicKeyCreate(key: Buffer, compress?: boolean): Buffer;
  publicKeyConvert(pub: Buffer, compress: boolean): Buffer;
  publicKeyFromUniform(bytes: Buffer, compress?: boolean): Buffer;
  publicKeyToUniform(pub: Buffer, hint): any;
  publicKeyFromHash(bytes: Buffer, compress?: boolean): Buffer;
  publicKeyToHash(pub: Buffer): Buffer;
  publicKeyVerify(pub: Buffer): boolean;
  publicKeyExport(pub: Buffer): Buffer;
  publicKeyImport(raw: Buffer, compress?: boolean): Buffer;
  publicKeyExportSPKI(pub: Buffer, compress?: boolean): Buffer;
  publicKeyImportSPKI(raw: Buffer, compress?: boolean): Buffer;
  publicKeyExportJWK(pub: Buffer): object;
  publicKeyImportJWK(json: object, compress): Buffer;
  publicKeyTweakAdd(key: Buffer, tweak: any, compress?: boolean): Buffer;
  publicKeyTweakMul(key: Buffer, tweak: any, compress?: boolean): Buffer;
  publicKeyAdd(key1: Buffer, key2: Buffer, compress?: boolean): Buffer;
  publicKeyCombine(keys: Buffer[], compress?: boolean): Buffer;
  publicKeyNegate(key: Buffer, compress?: boolean): Buffer;
  signatureNormalize(raw: Buffer): Buffer;
  signatureNormalizeDER(raw: Buffer): Buffer;
  signatureExport(sig: Buffer): Buffer;
  signatureImport(sig: Buffer): Buffer;
  isLowS(sig: Buffer): boolean;
  isLowDER(sig: Buffer): boolean;
  sign(msg: Buffer, key: Buffer): Buffer;
  signRecoverable(msg: Buffer, key: Buffer): [Buffer, number];
  signRecoverableDER(msg: Buffer, key: Buffer): [Buffer, number];
  verify(msg: Buffer, sig: Buffer, key: Buffer): boolean;
  verifyDER(msg: Buffer, sig: Buffer, key: Buffer): boolean;
  recover(msg: Buffer, sig: Buffer, param: number, compress?: boolean): Buffer;
  recoverDER(msg: Buffer, sig: Buffer, param: number, compress?: boolean): Buffer;
  derive(pub: Buffer, priv: Buffer, compress?: boolean): Buffer;
  schnorrSign(msg: Buffer, key: Buffer): Buffer;
  schnorrVerify(msg: Buffer, sig: Buffer, key: Buffer): boolean;
  schnorrVerifyBatch(batch: any): boolean;
}
