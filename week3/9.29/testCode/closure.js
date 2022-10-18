// case 1
function init() {
    var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
    function displayName() {
        // displayName() 은 내부 함수이며, 클로저다.
        console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
    }
    displayName();
}
init();

// case2
function makeAdder(x) {
    var y = 1;
    return function (z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
