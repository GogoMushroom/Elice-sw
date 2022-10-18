// 사용하는 곳은 같은 경로에 있는 ./ 해주면 같은 경로 라는 뜻 
// ../ 상위 폴더 라는 뜻 

// 이렇게 export 한 것만 가져올 수 있다 

//const counter = require('./counter.js');
const counter = require('./02.export.js');

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
console.log("count=", counter.count);
//console.log(module);



//package.json 에 타입을 설정해줌 