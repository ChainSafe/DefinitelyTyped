/// <reference types="node"/>

interface DSAParamsObject {
  kty: "DSA"
  p: string;
  q: string;
  g: string;
}

interface DSAKeyObject extends DSAParamsObject {
  y: string;
}

interface DSAPrivateKeyObject extends DSAKeyObject {
  x: string;
}

interface FormattedDSAParams {
  bits: number;
  size: number;
  pbits: number;
  qbits: number;
  gbits: number;
  p: string;
  q: string;
  g: string;
}

interface FormattedDSAPublicKey extends FormattedDSAParams {
  ybits: number;
  y: string;
}

interface FormattedDSAPrivateKey extends FormattedDSAPublicKey {
  xbits: number;
  x: string;
}

export class DSAParams {
  constructor(p: Buffer, q: Buffer, g: Buffer);
  setP(p: Buffer): this;
  setQ(q: Buffer): this;
  setG(g: Buffer): this;
  L(): number;
  N(): number;
  bits(): number;
  size(): number;
  toParams(): DSAParams;
  toJSON(): DSAParamsObject;
  fromJSON(json: DSAParamsObject): this;
  inspect(): FormattedDSAParams;
  format(): FormattedDSAParams;
  static fromJSON(json: DSAParamsObject): DSAParams;
}

export class DSAKey extends DSAParams {
  constructor(p: Buffer, q: Buffer, g: Buffer, y: Buffer);
  setParams(params: DSAParams): this;
  setY(y: Buffer): this;
  fromParams(params: DSAParams): this;
  toPublic(): DSAKey;
  toJSON(): DSAKeyObject;
  fromJSON(json: DSAKeyObject): this;
  static fromParams(params: DSAParams): DSAKey;
}

export class DSAPublicKey extends DSAKey {
  format(): FormattedDSAPublicKey;
}

export class DSAPrivateKey extends DSAKey {
  constructor(p: Buffer, g: Buffer, y: Buffer, x: Buffer);
  setX(x: Buffer): this;
  toPublic(): DSAPublicKey;
  toJSON(): DSAPrivateKeyObject
  fromJSON(): this;
  format(): FormattedDSAPrivateKey;
}

export function paramsGenerate(bits?: number): DSAParams;
export function paramsGenerateAsync(bits?: number): Promise<DSAParams>;
export function paramsVerify(params: DSAParams): boolean;
export function paramsExport(params: DSAParams): Buffer;
export function paramsImport(raw: Buffer): DSAParams;
export function paramsExportJWK(params: DSAParams): DSAParamsObject;
export function paramsImportJWK(json: DSAParamsObject): DSAPublicKey;
export function privateKeyCreate(params: DSAParams): DSAPrivateKey;
export function privateKeyGenerate(bits?: number): DSAPrivateKey;
export function privateKeyGenerateAsync(bits?: number): Promise<DSAPrivateKey>;
export function privateKeyCompute(key: DSAPrivateKey): DSAPrivateKey;
export function privateKeyVerify(key: DSAPrivateKey): boolean;
export function privateKeyExport(key: DSAPrivateKey): Buffer;
export function privateKeyImport(raw: Buffer): DSAPrivateKey;
export function privateKeyExportPKCS8(key: DSAPrivateKey): Buffer;
export function privateKeyImportPKCS8(raw: Buffer): DSAPrivateKey;
export function privateKeyExportJWK(key: DSAPrivateKey): DSAPrivateKeyObject;
export function privateKeyImportJWK(key: DSAPrivateKeyObject): DSAPrivateKey;
export function publicKeyCreate(key: DSAPrivateKey): DSAPublicKey;
export function publicKeyVerify(key: DSAPublicKey): boolean;
export function publicKeyExport(key: DSAKey): Buffer;
export function publicKeyImport(raw: Buffer): DSAPublicKey;
export function publicKeyExportSPKI(key: DSAKey): Buffer;
export function publicKeyImportSPKI(raw: Buffer): DSAPublicKey;
export function publicKeyExportJWK(key: DSAPublicKey): DSAKeyObject;
export function publicKeyImportJWK(key: DSAKeyObject): DSAPublicKey;
export function signatureExport(sig: Buffer, size: number): Buffer;
export function signatureImport(sig: Buffer, size: number): Buffer;
export function sign(msg: Buffer, key: DSAPrivateKey): Buffer;
export function signDER(msg: Buffer, key: DSAPrivateKey): Buffer;
export function verify(msg: Buffer, sig: Buffer, key: DSAPrivateKey): boolean;
export function verifyDER(msg: Buffer, sig: Buffer, key: DSAPrivateKey): boolean;
export function derive(pub: DSAKey, priv: DSAPrivateKey): Buffer;
export function exchange(pub: Buffer, priv: DSAPrivateKey): Buffer;
