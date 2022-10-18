//고차함수

const animals = ['고양이', '강아지', '토끼'];







animals.forEach(function (val , idx , arr){
    console.log('val = ', val );
    console.log('idx = ', idx );
    console.log('arr = ', arr );
})

animals.forEach(val => {
    console.log('val = ', val );
});


const cat = { kind: '고양이', age: 4 };
const dog = { kind: '개', age: 13 };
const rabbit = { kind: '토끼', age: 2 };
const hamster = { kind: '햄스터', age: 0.5 };

const pets = [cat, dog, rabbit, hamster, cat];
console.log(pets);
//find

let result = pets.find((obj) => obj.kind === '개');
console.log(result); // 없는값 undefined

result = pets.findIndex((obj) => obj.kind === '개');
console.log(result); // 없는값 undefined

result = pets.some((obj) => obj.kind === '고양이'); // 고양이가 하나라도 있으면  true , || 
console.log(result); // 없는값 undefined

result = pets.every((obj) => obj.kind === '개'); //모든값이 개 일때 true , &&
console.log(result); // 없는값 undefined

//배열요소중에 해당되는 요소만 따로 빼서 새로운 배열을 만든다.
result = pets.filter((obj) => {obj.kind === '고양이'});
console.log(result); 

//map 배열에서 요소들을 각각 다른 요소로 맵핑해서 새로운 배열만든다.
const arr = [1,2,3,4,5,6];
//result = arr.map((num) => {num * 10});
result = arr.map((num) => num * 10);// 한줄로 쓸때는 {} 생략가능
console.log(result); 

const arr2 = arr.map((num)=> {
    [num , num+1]
});
console.log(arr2);

result = arr2.flatMap((num) => num);
console.log(result);

//sort 
let text = ['hi', 'abc', 'ss', 'ds'];
console.log(text);
text.sort();
console.log(text);
text.reverse();
console.log(text);


let number = [1,0,4,6,2,100];
number.sort();
console.log(number);// [ 0, 1, 100, 2, 4, 6 ] 텍스트 정렬이 기본이기 때문에 0, 1 다음에 100 이 정렬됨

//number.sort();

// number.sort((a,b) => a - b);// a와b를 비교해서 정렬해줌
// console.log(number);

// number.sort((a,b) => b - a);// a와b를 비교해서 정렬해줌
// console.log(number);


//reduce 총 합 , 갯수

result = number.reduce((sum,val) => {
   
    console.log(`sum ${sum} , value ${val}`);

    return ( sum+=val);
});
console.log(result);


