/// <reference types="node"/>
type Cash32Type = 0 | 1;
export function serialize(prefix: string, data: Buffer): string;
export function deserialize(str: string, defaultPrefix: string): [string, Buffer];
export function is(str: string, defaultPrefix): boolean;
export function convertBits(data: Buffer, frombits: number, tobits: number, pad: boolean): Buffer;
export function encode(prefix: string, type: Cash32Type, hash: Buffer): string;
export function decode(str: string, defaultPrefix?: string): [string, Cash32Type, Buffer];
export function test(str: string, defaultPrefix?: string): boolean;
