/// <reference types="node"/>
export function encipher(data: Buffer, key: Buffer, iv: Buffer): Buffer;
export function decipher(data: Buffer, key: Buffer, iv: Buffer): Buffer;
