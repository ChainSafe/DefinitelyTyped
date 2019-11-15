/// <reference types="node"/>
export default class AEAD {
  public init(key: Buffer, iv: Buffer): this;
  public aad(data: Buffer): this;
  public encrypt(data: Buffer): Buffer;
  public decrypt(data: Buffer): Buffer;
  public auth(data: Buffer): Buffer;
  public final(): Buffer;
  public static encrypt(key: Buffer, iv: Buffer, msg: Buffer, aad?: Buffer): Buffer;
  public static decrypt(key: Buffer, iv: Buffer, msg: Buffer, tag: Buffer, aad?: Buffer): boolean;
  public static auth(key: Buffer, iv: Buffer, msg: Buffer, tag: Buffer, aad?: Buffer): boolean;
  public static verify(mac1: Buffer, mac2: Buffer): boolean;
}
