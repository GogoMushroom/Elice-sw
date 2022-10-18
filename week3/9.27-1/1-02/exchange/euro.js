function euroToWon(money) {
    var won = money * 1329.87;
    return won;
}

//export default 를 기본값으로 가져온다.
export default euroToWon;

function test() {
    console.log("export test");
}

//as test 로 정의되있는 함수을 changeName로 내보낸다.
export { test as changeName };
