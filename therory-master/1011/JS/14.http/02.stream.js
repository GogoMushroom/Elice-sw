//const  = require('http');
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
	console.log('요청들어옴');
	const url = req.url;
	res.setHeader('Content-Type', 'text/html');
	// res.setHeader('key', 'value');
	if (url === '/') {
		fs.createReadStream('./src/index.html').pipe(res);
		//fs 을 실행하면 res 객체와 연결을 해준다
	} else if (url === '/member') {
		fs.createReadStream('./src/member.html').pipe(res);
	} else {
		fs.createReadStream('./src/error.html').pipe(res);
	}
});

server.listen(3000, () => {
	console.log('서버 실행');
});
