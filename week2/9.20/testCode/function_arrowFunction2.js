// this 차이
// function
//
function fun() {
    this.name = "하이";
    return {
        name: "바이",
        speak: function () {
            console.log(this.name); // 바이
            //현재스코프의 값인 하이가 찍힌다.
        },
    };
}

const fun1 = new fun();
fun1.speak(); // 바이

// arrow func
function arrFun() {
    this.name = "하이";
    return {
        name: "바이",
        speak: () => {
            console.log(this.name); // 하이
            //상위스코프의 값인 하이가 찍힌다.
            //화살표 함수는 스코프를 다르게 본당.
            //렉시컬스코프?
            //화살표 함수 안에 있는 this 는 부모스코프의 this 값을 따른다.
        },
    };
}

const fun2 = new arrFun();
fun2.speak(); // 하이
