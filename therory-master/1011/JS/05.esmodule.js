import * as counter from './04.counter.js'; //'./04.counter.js'; 에서 export 한 전체를 counter 이름으로 가져옴

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());

console.log(counter.count);
