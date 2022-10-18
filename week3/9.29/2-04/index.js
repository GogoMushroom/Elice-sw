var fn; // 선언
function foo() {
    var a = 5;

    function baz() {
        console.log(a);
    }

    fn = baz; // 함수 할당
}

function bar() {
    fn();
}

foo(); // 이게 없으면 fn is not a function
bar();
