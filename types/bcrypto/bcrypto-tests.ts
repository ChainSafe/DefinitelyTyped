import { version, Whirlpool, siphash } from "bcrypto";

const buffer = Buffer.alloc(32);

// siphash
siphash.siphash(buffer, buffer);
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
