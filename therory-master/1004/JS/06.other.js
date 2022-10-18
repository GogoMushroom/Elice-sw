// 논리 연산자  단축 평가

let done = true;
let message = '';

// 조건식
if (done) message = '값';
// 논리연산 단축평가

done = true;
message = done && '값';
console.log('msg = ' , message)
let object = null;
//let value = object.value;

let val = object && object.value;
console.log('val = ', val);

// function getLength1(str) {
// 	return str.length;
// }

// getLength1();

function getLength2(str) {
	str = str || '';
	return str.length;
}
console.log(getLength2());

function printMsg(msg) {
	msg = msg || '기본값';
	console.log(msg);
}
console.log('==============');
printMsg(undefined);
printMsg(null);
printMsg(0);
printMsg(100);
printMsg('메세지');
printMsg();
printMsg('');

//?. = 옵셔널 체이닝(optional chaining) 연산자

// 💡 논리곱(&&) 연산자
console.log('==============');
let str = '';
let length = str && str.length;
console.log(length); // ''
// 옵셔널 체이닝 연산자
str = '';
length = str?.length;
console.log(length); // 0

let item = { price: 1 };
const price = item?.price;// 객체가 있으면 그 객체의 price 를 가져와라 

console.log(price);

let dog = { name: '바둑이', owner: { name: '연미' } };

function printOwner(obj) {
	//const ownerName = obj && obj.owner && obj.owner.name; // 논리연산자 사용해서 이름 가져오기 
	const ownerName = obj?.owner?.name; //옵셔널 체이닝 연산자를 이용하는법  
	console.log(ownerName);
}
printOwner(dog);
printOwner();

// 널병합 연산자
console.log('==============');

let num = 0; 
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0
console.log(num ?? '1'); //0
console.log(num ?? '2'); //0
console.log(null || '3'); // 3
console.log('' || '4'); // 4
console.log(null ?? '5'); //5
console.log('' ?? '6'); // ''
