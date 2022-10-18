// case 1
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// case 2 - 순서 중요
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

// array 메서드 사용가능
function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
