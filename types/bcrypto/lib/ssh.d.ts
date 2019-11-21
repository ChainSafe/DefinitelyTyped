interface keyTypes {
    DSA: string;
    RSA: string;
    P256: string;
    P384: string;
    P521: string;
    ED25519: string;
}

type keyTypesByVal = {
    [k in keyof keyTypes]: string;
};

interface Struct {
    inject(obj: Struct): this;
    clone(): this;
    getSize(): number;
    write(bw: any): any;
    read(br: any): this;
    toString(): string;
    fromString(str: string): this;
    getJSON(): this;
    fromOptions(): this;
    format(): this;
    encode(bw: any, extra: any): any;
    decode(data: any, extra: any): this;
    toHex(): string;
    fromHex(hex: string, extra: any): this;
    toBase64(): string;
    fromBase64(base64: string, extra: any): this;
    toJSON(): this;
}

interface SSHPublicKey extends Struct {
    getCurve(): string;
}

interface SSHPrivateKey extends Struct {
    getCurve(): string;
    encodeSSH(passwd: string): Buffer;
    decodeSSH(data: Buffer, passwd: string): this;
    encode(passwd: string): any;
    toString(passwd?: string): string;
    fromString(str: string, passwd?: string): this;
}

interface KDFOptions extends Struct {
    getBodySize(): number;
}

interface RawPrivateKey extends Struct {
    getSize(useNonce?: boolean): number;
    write(bw: any, useNonce?: boolean): any;
}

export {
    keyTypes,
    keyTypesByVal,
    SSHPublicKey,
    SSHPrivateKey,
    KDFOptions,
    RawPrivateKey
};
