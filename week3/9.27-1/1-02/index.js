// 아래 코드가 수행될 수 있도록 exchange 폴더에서 모듈을 import 하세요.
// import 문법은 자바나 자스에서 많이 사용됨 , 경량화 가능

import * as asia from "./exchange/asia.js";
import { dollarToWon } from "./exchange/dollar.js";
import euroToWon, { changeName } from "./exchange/euro.js";

console.log(euroToWon(100));
console.log(dollarToWon(200));
console.log(asia.yuanToWon(300));
console.log(asia.yenToWon(400));
console.log(changeName());
