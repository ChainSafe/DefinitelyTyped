/// <reference types="node"/>

export class Whirlpool {
    init(): Whirlpool;
    update(data: Buffer): Whirlpool;
    final(): Buffer;
}
