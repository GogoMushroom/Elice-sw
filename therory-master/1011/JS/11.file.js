const fs = require('fs').promises;
const path = require('path');
const fileName = 'member.txt';
const curPath = path.join(__dirname, fileName);

 fs.readFile(curPath, 'utf8')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

//fs.writeFile(curPath, '홍길동').catch(console.log);

// fs.appendFile(curPath, '\n박연미')
// .then(()=> console.log('추가완료'))
// .catch(console.log);


// fs.copyFile(curPath, __dirname + '/copied.txt')
// .then(()=> console.log('복사 완료'))
// .catch(console.error);

// fs.appendFile(curPath, '\n박연미')
// 	.then(() => {
// 		fs.copyFile(curPath, __dirname + '/copied2.txt').catch(console.error);
// 	})
// 	.catch(console.error);
//추가 후 복사 순서 만들어주기


//async await로 더 단순하게 사용 가능 
// async function copyFile(){
//     try{
//     await fs.appendFile(curPath, '\n박연미')
//     await fs.copyFile(curPath, __dirname + '/copied2.txt');
//     } catch (e){
//         console.log("에러 발생")
//     }
// }


// fs.mkdir('http').catch(console.error);

// // fs.readdir('./').then(console.log).catch(console.error);
// fs.readdir(__dirname + '/')
// 	.then(console.log)
// 	.catch(console.error);
