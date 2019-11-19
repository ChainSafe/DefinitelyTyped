/// <reference types="node"/>

export type CurveType = "short" | "mont" | "edwards";

export class Curve {}

export class Point {}

export class ShortCurve extends Curve {}

export class ShortPoint extends Point {}

export class JPoint extends Point {}

export class MontCurve extends Curve {}

export class MontPoint extends Point {}

export class XPoint extends Point {}

export class EdwardsCurve extends Curve {}

export class EdwardsPoint extends Point {}

declare class P192 extends ShortCurve {}
declare class P224 extends ShortCurve {}
declare class P256 extends ShortCurve {}
declare class P384 extends ShortCurve {}
declare class P521 extends ShortCurve {}
declare class SECP256K1 extends ShortCurve {}
declare class BRAINPOOL256 extends ShortCurve {}
declare class BRAINPOOL384 extends ShortCurve {}
declare class BRAINPOOL512 extends ShortCurve {}
declare class X25519 extends MontCurve {}
declare class ED25519 extends EdwardsCurve {}
declare class X448 extends MontCurve {}
declare class ED448 extends EdwardsCurve {}

export interface curves {
  P192: typeof P192;
  P224: typeof P224;
  P256: typeof P256;
  P384: typeof P384;
  P521: typeof P521;
  SECP256K1: typeof SECP256K1;
  BRAINPOOL256: typeof BRAINPOOL256;
  BRAINPOOL384: typeof BRAINPOOL384;
  BRAINPOOL512: typeof BRAINPOOL512;
  X25519: typeof X25519;
  ED25519: typeof ED25519;
  X448: typeof X448;
  ED448: typeof ED448;
  [name: string]: typeof Curve;
}

export function curve(name: string, ...args: any): Curve;
export function register(name: string, curve: typeof Curve): void;

