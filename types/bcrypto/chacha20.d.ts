/// <reference types="node"/>
export default class ChaCha20 {
  constructor();
  init(key: Buffer, nonce: Buffer, counter: number): this;
  encrypt(data: Buffer): Buffer;
  crypt(input: Buffer, output: Buffer): Buffer;
  destroy(): this;
  static derive(key: Buffer, nonce: Buffer): Buffer;
}
