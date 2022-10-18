//함수를 실행할 떄 멈췄다가 다시 실행시킬 수 있다.


function* generatorFunc() {
	yield 1; 
	yield 2;
	yield 3;
}

const generator = generatorFunc();

console.log(generator);
console.log(Symbol.iterator in generator);
console.log('next' in generator);

console.log(generator.next());	//다음 값 출력 { value: 1, done: false }
console.log(generator.return()); //바로 종료를 해 준다. { value: undefined, done: true }
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

console.log('---------------------');
//함수가 아직 끝나지 않았는데 내부의 값 전달이 가능하다!

function* testGenerator() {
	const x = yield 1; // x = 10
	const y = yield x + 10; // 10 + 10 // y = 20
	return x + y; // 10 + 20
}

const gen = testGenerator();

let resultObj = gen.next();
console.log(resultObj);

resultObj = gen.next(10); // x 값에 10을 넣어줌 
console.log(resultObj);

resultObj = gen.next(20); // y 값에 20을 넣어줌 
console.log(resultObj);

console.log('---------------------');

function* evenGenerator() {
	const max = 5;
	for (let i = 0; i < max; ) {
		console.log("i=", i)
		yield i++ * 2;
	}
}

const evenNum = evenGenerator();
console.log(evenNum.next());
console.log(evenNum.next());
//console.log(evenNum.return()); //{ value: undefined, done: true } 즉시 종료
console.log(evenNum.next());
console.log(evenNum.next());
console.log(evenNum.next());

console.log('---------------------');
