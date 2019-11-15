/// <reference types="node"/>
export function serialize(hrp: string, data: Buffer): string;
export function deserialize(str: string): [string, Buffer];
export function is(str: string): boolean;
export function convertBits(data: Buffer, fromBits: number, toBits: number, pad: boolean): Buffer;
export function encode(hrp: string, version: number, hash: Buffer): string;
export function decode(str: string): [string, number, Buffer];
export function test(str: string): boolean;
