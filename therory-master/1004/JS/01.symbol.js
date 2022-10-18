//일반 심볼은 힙에 저장되어있다.

const symbol = Symbol('yeonmi');
console.log(typeof symbol);
console.log(symbol);

const key1 = 'key';
const key2 = 'key';

const key3 = Symbol('key');
const key4 = Symbol('key');

console.log(key1 === key2); //true
console.log(key3 === key4); //false 심볼은 유일무의하다.
console.log(key3.description === key4.description); //true 

console.log('=============');

const map = new Map();
map.set(key1, 'hi');
map.set(key3, 'Hello');

console.log(map.get(key2)); //hi
console.log(map.get('key'));
console.log(map.get(key4));
console.log('=============');

// 전역 심벌 레지스트리 (Global Symbol Registry) :
// 다른  js 파일에서도 사용할 수 있다.



const k1 = Symbol.for('key'); //전역 key 가 없으면 생성  
const k2 = Symbol.for('key'); //전역 key 가 존재하면 값 가져옴 
console.log(k1 === k2);

console.log('Symbol =', Symbol.keyFor(k1)); //key 저장된 심벌에 있는 값을 출력할 수 있다.

console.log('=============');

const obj = {};
const sym = Symbol('symKey');
obj[sym] = '심볼키의 값 ';
obj.propKey = '일반 키의 값 ';

console.log(obj);

// console.log(obj['sym']);  //심볼로 만든건 심볼이라고 하는 변수로만 접근이 가능하다.
// console.log(obj.sym);  	// 문자열 이나 . 을 통해서도 접근이 안된다.

console.log(obj[sym]); 

console.log(obj.sym);

console.log(obj[Symbol()]); //undefined 기존에 만든것과 다른값임

console.log(sym in obj); // 객체 안에 속성확인하기 true

console.log(Object.keys(obj)); 

console.log(Object.getOwnPropertySymbols(obj));

console.log(Reflect.ownKeys(obj));

function idFunc1(obj) {
	obj.id = 0;
}

const libId = Symbol('id');

function idFunc2(obj) {
	obj[libId] = 0;
}

console.log('============');

let obj1 = { id: 1234 };
let obj2 = { id: 1111 };

idFunc1(obj1); //기존값이 수정된다.
idFunc2(obj2); //기존값을 건들지 않고 심볼로 만든 id 값이 추가된다.
console.log(obj1);
console.log(obj2);

