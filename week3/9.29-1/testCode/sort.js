const numbers = [10, 3, 8, 4, 1];
numbers.sort();

console.log(numbers);
// 결과 : [ 1, 10, 3, 4, 8 ]

numbers.sort((a, b) => a - b);
console.log(numbers);
// 결과 : [ 1, 3, 4, 8, 10 ]
