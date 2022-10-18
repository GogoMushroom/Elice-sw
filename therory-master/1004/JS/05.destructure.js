// 구조 분해 할당 Desturcturing Assignment
		//   0  1  2  3
const arr = [1, 2, 3, 4];

const [one, two, three] = arr;

console.log(arr[0], arr[1], arr[3]);

console.log(one, two, three);//원하는 이름으로 배열의 요소들을 꺼내올 수 있다.


const point = [1, 2]; 

// 기본값 사용 가능
const [y, x, z = 0] = point;
// let x = point[0];
// let y = point[1];
// let z = 0;

console.log(x);
console.log(y);
console.log(z);

//Rest element) 가능
const [a, ...b] = [1, 2, 3];
console.log(a, b); // 1 [ 2, 3 ]

function createProduct() {
	return ['노트', 3000];
}
const note = createProduct();
console.log(note[0], note[1]);

const [proName, price] = createProduct();
console.log(proName);
console.log(price);

const yeonmi = { name: '연미', age: 30, job: '강사' };

// 기존 방식
function personInfo(person) {
	console.log('이름', person.name);
	console.log('나이', person.age);
	console.log('직업', person.job);
}

personInfo(yeonmi);

// 구조분해 방식
// function printInfo({ name, age, job }) {
// 	console.log('이름', name);
// 	console.log('나이', age);
// 	console.log('직업', job);
// }

//내가 원하는 값만 가져올 수 있다.
function printInfo({ name, age}) {
	console.log('이름', name);
	console.log('나이', age);
	//console.log('직업', job);
}
printInfo(yeonmi);



const { name: myName, job } = yeonmi;
// const myName = yeonmi.name;
// const job = yeonmi.job;

//console.log(name);
//console.log(age);
console.log(myName);

console.log('yeonmi = ', yeonmi);

const btn = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black',
	},
};

// 기본 방식
function changeColor(btn) {
	console.log(btn.styles.color);
}
changeColor(btn);

// 구조 분해 방식
function changeColor({ styles: { color } }) {
	console.log(color);
	//console.log(styles);
}

changeColor(btn);
