// 아래 코드가 수행될 수 있도록 exchange 폴더에서 모듈을 import 하세요.
// import * as test from "./exchange/asia.js";

import yuanToWon, * as test from "./exchange/asia.js";

import { dollarToWon } from "./exchange/dollar.js";
import euroToWon, { changeName as chachachangeName } from "./exchange/euro.js";

console.log(euroToWon(100));
console.log(dollarToWon(200));

// console.log(test.yuanToWon(300));
// console.log(test.yenToWon(400));

console.log(yuanToWon(300));
console.log(test.yenToWon(400));

console.log(chachachangeName());
