const array = [1, 2, 3];
console.log(Symbol.iterator in array);

for (const item of array) {
	console.log(item);
}

const object = { a: 1, b: 2 };
console.log(Symbol.iterator in object); // false

// // iterator 사용해 보기!

console.log('============');
const iterator = array.values(); //(method) Array<number>.values(): IterableIterator<number>
console.log(iterator);
console.log(iterator.next()); //(method) Iterator<number, any, undefined>.next(...args: [] | [undefined]): IteratorResult<number, any>
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('============');

const evenMaker = {
	[Symbol.iterator]: () => {
		const max = 5;
		let num = 0;
		return {
			
			next() {
				if(num < max){
					return { value: num++ * 2, done: num > max };
				}else{
					return { value: undefined, done: true };
				}
				},
			return(){
				num = max; 
				return{ value: undefined , done: true}
			}

		};
	},
};

console.log(Symbol.iterator in evenMaker); // true

for (const num of evenMaker) {
	console.log(num);
}

console.log('============');
const myIterator = evenMaker[Symbol.iterator](); // 이터레이터 반환

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.return());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

console.log('============');
