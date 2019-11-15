import { version, Whirlpool } from "bcrypto";

// whirlpool
let whirlpool = new Whirlpool();
whirlpool = whirlpool.init();
whirlpool = whirlpool.update(Buffer.alloc(32, 0));
whirlpool.final();
