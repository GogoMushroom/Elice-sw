let count = 1;

// setInterval(() => {
// 	console.log(count++);
// }, 1000);
////clearInterval 을 실행시켜줘야지 멈춰짐 

console.time('타이머');
const interval = setInterval(() => {
	console.log(count++);
}, 1000);

setTimeout(() => {
	console.log('타이머 종료');
	console.timeEnd('타이머'); 
	clearInterval(interval);
}, 5 * 1000);
//interval 을 멈춰주려면 clearInterval 안에 interval을 변수로 만들어서 넣어주면 됨

console.time('반복문');
for (let i = 0; i < 10; i++) {
	console.log('i=', i);
}
console.timeEnd('반복문');
