/// <reference types="node"/>

import {Curve} from "./elliptic";

export default class ECDH {
  constructor(id: string, eid?: string, pre?: string);
  curve: Curve;
  edwards: Curve;
  size: number;
  bits: number;
  privateKeyGenerate(): Buffer;
  privateKeyVerify(key: Buffer): boolean;
  privateKeyExport(key: Buffer): Buffer;
  privateKeyImport(raw: Buffer): Buffer;
  privateKeyExportPKCS8(key: Buffer): Buffer;
  privateKeyImportPKCS8(raw: Buffer): Buffer;
  privateKeyExportJWK(key: Buffer): object;
  privateKeyImportJWK(json: object): Buffer;
  publicKeyCreate(key: Buffer): Buffer;
  publicKeyConvert(pub: Buffer, sign: boolean): Buffer;
  publicKeyFromUniform(bytes: Buffer): Buffer;
  publicKeyToUniform(pub: Buffer, hint): any;
  publicKeyFromHash(bytes: Buffer, pake?: boolean): Buffer;
  publicKeyToHash(pub: Buffer): Buffer;
  publicKeyVerify(pub: Buffer): boolean;
  publicKeyIsSmall(pub: Buffer): boolean;
  publicKeyHasTorsion(pub: Buffer): boolean;
  publicKeyExport(pub: Buffer): Buffer;
  publicKeyImport(raw: Buffer): Buffer;
  publicKeyExportSPKI(pub: Buffer): Buffer;
  publicKeyImportSPKI(raw: Buffer): Buffer;
  publicKeyExportJWK(pub: Buffer): object;
  publicKeyImportJWK(json: object): Buffer;
  derive(pub: Buffer, priv: Buffer): Buffer;
}
