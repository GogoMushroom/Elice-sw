const x = (x, y) => x * y;
//한줄로 쓸때는 {} 필요없음 !

const y = (x, y) => {
    return x + y;
};

function z(x, y) {
    return x - y;
}

//호이스팅 : 코드의 최상단으로 올린다.



document.write(x(5, 5));
document.write("<br/>");

document.write(y(5, 5));
document.write("<br/>");

document.write(z(5, 5));
