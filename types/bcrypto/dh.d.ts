/// <reference types="node"/>

interface DHParamsObject {
  kty: "DH"
  p: string;
  g: string;
}

interface DHKeyObject extends DHParamsObject {
  y: string;
}

interface DHPrivateKeyObject extends DHKeyObject {
  x: string;
}

interface FormattedDHParams {
  bits: number;
  size: number;
  pbits: number;
  gbits: number;
  p: string;
  g: string;
}

interface FormattedDHPublicKey extends FormattedDHParams {
  ybits: number;
  y: string;
}

interface FormattedDHPrivateKey extends FormattedDHPublicKey {
  xbits: number;
  x: string;
}

export class DHParams {
  constructor(p: Buffer, g: Buffer);
  setP(p: Buffer): this;
  setG(g: Buffer): this;
  bits(): number;
  size(): number;
  toParams(): DHParams;
  toJSON(): DHParamsObject;
  fromJSON(json: DHParamsObject): this;
  inspect(): FormattedDHParams;
  format(): FormattedDHParams;
  static fromJSON(json: DHParamsObject): DHParams;
}

export class DHKey extends DHParams {
  constructor(p: Buffer, g: Buffer, y: Buffer);
  setParams(params: DHParams): this;
  setY(y: Buffer): this;
  fromParams(params: DHParams): this;
  toPublic(): DHKey;
  toJSON(): DHKeyObject;
  fromJSON(json: DHKeyObject): this;
  static fromParams(params: DHParams): DHKey;
}

export class DHPublicKey extends DHKey {
  format(): FormattedDHPublicKey;
}

export class DHPrivateKey extends DHKey {
  constructor(p: Buffer, g: Buffer, y: Buffer, x: Buffer);
  setX(x: Buffer): this;
  toPublic(): DHPublicKey;
  toJSON(): DHPrivateKeyObject
  fromJSON(): this;
  format(): FormattedDHPrivateKey;
}

export function paramsGenerate(bits?: number, gen?: number): DHParams;
export function paramsGenerateAsync(bits?: number, gen?: number): Promise<DHParams>;
export function paramsVerify(params: DHParams): boolean;
export function paramsExport(params: DHParams): Buffer;
export function paramsImport(raw: Buffer): DHParams;
export function paramsExportJWK(params: DHParams): DHParamsObject;
export function paramsImportJWK(json: DHParamsObject): DHPublicKey;
export function privateKeyCreate(params: DHParams): DHPrivateKey;
export function privateKeyGenerate(bits?: number, gen?: number): DHPrivateKey;
export function privateKeyGenerateAsync(bits?: number, gen?: number): Promise<DHPrivateKey>;
export function privateKeyCompute(key: DHPrivateKey): DHPrivateKey;
export function privateKeyVerify(key: DHPrivateKey): boolean;
export function privateKeyExport(key: DHPrivateKey): Buffer;
export function privateKeyImport(raw: Buffer): DHPrivateKey;
export function privateKeyExportPKCS8(key: DHPrivateKey): Buffer;
export function privateKeyImportPKCS8(raw: Buffer): DHPrivateKey;
export function privateKeyExportJWK(key: DHPrivateKey): DHPrivateKeyObject;
export function privateKeyImportJWK(key: DHPrivateKeyObject): DHPrivateKey;
export function publicKeyCreate(key: DHPrivateKey): DHPublicKey;
export function publicKeyVerify(key: DHPublicKey): boolean;
export function publicKeyExport(key: DHKey): Buffer;
export function publicKeyImport(raw: Buffer): DHPublicKey;
export function publicKeyExportSPKI(key: DHKey): Buffer;
export function publicKeyImportSPKI(raw: Buffer): DHPublicKey;
export function publicKeyExportJWK(key: DHPublicKey): DHKeyObject;
export function publicKeyImportJWK(key: DHKeyObject): DHPublicKey;
export function derive(pub: DHKey, priv: DHPrivateKey): Buffer;
export function exchange(pub: Buffer, priv: DHPrivateKey): Buffer;
