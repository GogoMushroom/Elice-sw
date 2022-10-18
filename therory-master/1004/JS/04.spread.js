// // Spread 연산자, 전개구문

// let arr = [1, 2, 3, 4];
// console.log(...arr);
// let a = { ...arr };
// let b = [...arr];
// Spread 연산자, 전개구문

let arr = [1, 2, 3, 4];
console.log(...arr);
// let c = ...arr ;  이렇게는 사용 안됨  
let a = { ...arr };
let b = [...arr];
console.log(a);
console.log(b);

console.log('----------------');
//ES5에서 배열 합치기
let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
let merged = arr1.concat(arr2);
//ES6에서 배열 합치기
const newMerged = [...arr1, ...arr2];

//ES5에서 배열 복사하기
let copied1 = arr1.slice();

//ES6에서 배열 복사하기
const newCopied = [...arr1];

let obj1 = { a: 3 };
let obj2 = { b: 4 };
//ES5에서 오브젝트 합치기
let mergedObj = Object.assign({}, obj1, obj2);
//ES6에서 오브젝트 합치기
let newMergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
console.log(newMergedObj);

//ES5에서 오브젝트 복사하기
let copiedObj = Object.assign({}, obj1);
//ES6 오브젝트 복사하기
const newCopiedObj = { ...obj1 };

console.log(copiedObj);
console.log(newCopiedObj);

console.log('----------------');
// 함수 인자값
function sum(a, b, c) {
	return a + b + c;
}

let pre = [100, 200, 300];
//console.log('sum=', sum(pre[0] , pre[1] , pre[2]));
console.log('sum=', sum(...pre));

console.log('----------------');
// Rest parameters

function sum(first, second, ...nums) {
	console.log(first);
	console.log(second);
	console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

console.log('----------------');
// Object 주의사항

const nabi = {
	name: '나비',
	kind: '고양이',
	actions: ['잠자기', '먹기'],
};

let update1 = Object.assign({}, nabi);
update1.age = 4;
console.log(update1);

update2 = { ...nabi, age: 4 };
console.log('===== 수정 전 =====');
console.log(update2);
update2.name = '냐옹이';
console.log('=====수정 후=====');
console.log(nabi);
console.log(update2);
console.log('=====주의=====');// 참조타입 오브젝트 를 복사 할때는 주의를 해야 한다!
update2.actions[0] = '낮잠자기';
console.log(nabi);
console.log(update2);
