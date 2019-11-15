/// <reference types="node"/>
export default class BLAKE2b {
  public init(size: number, key: Buffer): this;
  public update(data: Buffer): this;
  public final(): Buffer;
  public compress(block: Buffer, off: number, last: boolean): void;
  public static hash(): BLAKE2b;
  // public static hmac(size?: number): HMAC;
  public static digest(data: Buffer, size: number, key: Buffer): Buffer;
  public static root(left: Buffer, right: Buffer, size?: number): Buffer;
  public static multi(x: Buffer, y: Buffer, z?: Buffer, size?: number): Buffer;
  public static mac(data: Buffer, key: Buffer, size?: number): Buffer;
}
