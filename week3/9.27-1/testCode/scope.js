// // function level scope
// var x = 1;

// if (true) {
//     var x = 10; // 블록 scope가 인정되지 않는다.
//     console.log("if문 안의 x : ", x); // 10
// }
// console.log("if문 안의 x : ", x); // 10
// //함수로만 스코프를 결정, if 문은 함수가 아님! 안에서 10이 밖에서 10을 덮어씌우게됨


// for (var i = 0; i < 100; i++) {
//     // do nothing
// }
// console.log("for문 밖의 i : ", i); // 100

// var y = '함수바깥'
// function scopeTest() {
//     var y = "function level scope";
//     console.log("function 안의 y : ", y); // error
// }
// scopeTest();
//  console.log("function 밖의 y : ", y); // error

console.log("===========================================================");

// block level scope
// const , let

const x = 1;

if (true) {
    const x = 10; // 블록 scope가 인정된다.
    console.log("if문 안의 x : ", x); // 10
}
console.log("if문 밖의 x : ", x); // 1
//if문 안과 밖의 값이 다르게 찍힌다.
//중괄호 블럭에 의해 스코프가 결정됨



for (var i = 0; i < 100; i++) {
    // do nothing
    const y = 10;
    if (i === 99) console.log("for문 안의 y : ", y); // 10
}
// console.log("for문 밖의 y : ", y); // error  y is not defined 블록 바깥에 변수 y 가 없기 때문 

function scopeTest() {
    const y = "block level scope";
    console.log("function 안의 y : ", y); // block level scope
}

scopeTest();
 console.log("function 밖의 y : ", y); // error

// console.log("===========================================================");

// let x = 1;

// if (true) {
//     let x = 10; // 블록 scope가 인정된다.
//     console.log("if문 안의 x : ", x); // 10
// }
// console.log("if문 밖의 x : ", x); // 1

// for (let i = 0; i < 100; i++) {
//     // do nothing
//     if (i === 99) console.log("for문 안의 i : ", i); // 99
// }
// // console.log("for문 밖의 i : ", i); // error

// function scopeTest() {
//     let y = "block level scope";
//     console.log("function 안의 y : ", y); // block level scope
// }
// scopeTest();
// console.log("function 밖의 y : ", y); // error
