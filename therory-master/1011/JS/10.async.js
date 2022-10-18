const fs = require('fs');

// fs.rename('./05week1/test.txt', './05week1/test222.txt', (error) => {
// 	error ? console.log(error) : console.log('이름 변경 완료');
// });

// fs.rename('therory-master/1011/JS/test.txt', 'therory-master/1011/JS/test2222.txt', (error) => {
// 	error ? console.log(error) : console.log('이름 변경 완료'); //삼항연산자
// }); // fs.rename 는 비동기적으로 작동

console.log('====출력1===');
// // fs.renameSync('./05week1/test222.txt', './05week1/test.txt');
// try{
// fs.renameSync('therory-master/1011/JS/test2222.txt', 'therory-master/1011/JS/test.txt');
// //fs.rename뒤에 Sync를 붙여주면 동기적으로 사용 가능
// console.log("이름변경 완료")
// } catch(e){
//     console.log(e)
// }
//동기적으로작용할때는 try catch 처리를 해줘야 한다.

fs.promises
	.rename('./05week1/test.txt', './05week1/test222.txt')
	.then(() => console.log('이름 변경 완료'))
	.catch((err) => console.log(err));

console.log('====출력2===');
