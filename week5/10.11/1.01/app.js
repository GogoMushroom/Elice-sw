//1. exports를 import해서 변수 getSquare에 할당하세요.
//모듈 불러오는법
const getSquare = require("./exports.js");
console.log(getSquare.area(5));
console.log(getSquare.perimeter(5));

//2. module_exports를 import해서 변수 getSquare2에 할당하세요.
const getSquare2 = require("./module_exports");
console.log(getSquare2.area(3));
console.log(getSquare2.perimeter(3));
console.log(module.exports === exports);

//모듈 : 함수의 집합 , 다른프로그램의 부품으로 사용할 수 있다.
//라이브러리 : 모듈의 집합

/*
node의 내장객체 : 
golbal = window 와 동일하게 사용한다.
document 사용안됨 
condole.log : node안의 내장객체이다.
*/
