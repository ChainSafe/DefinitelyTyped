import { version, Whirlpool, siphash, SHAKE, SHAKE128 } from "bcrypto";

const buffer = Buffer.alloc(32);

// shake
let shake = new SHAKE();
shake = shake.init(12);
shake = shake.update(buffer);
shake.final();

// shake128
let shake128 = new SHAKE128();
shake128 = shake128.init();
shake128 = shake128.update(buffer);
shake128.final();

SHAKE.digest(buffer);

// siphash
siphash.siphashD(buffer, buffer);
siphash.siphash32(10, buffer);
siphash.siphash64(1, 10, buffer);
siphash.siphash32k256(1, buffer);
siphash.siphash64k256(1, 10, buffer);
siphash.sipmod(buffer, buffer, 1, 10);

// whirlpool
let whirlpool = new Whirlpool();
whirlpool = whirlpool.init();
whirlpool = whirlpool.update(Buffer.alloc(32, 0));
whirlpool.final();

Whirlpool.digest(Buffer.alloc(32, 1));
Whirlpool.mac(Buffer.alloc(32, 1), Buffer.alloc(10));
