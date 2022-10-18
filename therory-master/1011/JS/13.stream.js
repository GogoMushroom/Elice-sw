const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/data.txt', {
	highWaterMark: 8, //64kb
	//encoding: 'utf-8',
});
const data = [];
// readStream.on('data', (chunk) => {
// 	data.push(chunk);
// 	console.count('data');
// 	readStream.close();
// });
// readStream.on('close', () => { //.on 이벤트들을 가지고있구낭 
// 	console.log(data);
// 	console.log(data.join('')); //값을 str으로 바꿔줌, buffer데이터도 문자열로 바꿔줌
// });

// readStream.on('error', (error) => {
// 	console.log(error);
// });

readStream
	.once('data', (chunk) => {
		data.push(chunk);
		//readStream.close();
	})
	.on('close', () => {
		console.log(data.join(''));
	})
	.on('error', console.log);
//promise 체인처럼 사용 가능