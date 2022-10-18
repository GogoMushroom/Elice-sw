// function yuanToWon(money) {
//     var won = money * 192.53;
//     return won;
// }

// function yenToWon(money) {
//     var won = money * 9.88;
//     return won;
// }

//선언을 먼저 하고 나중에 export 
//named 이름을 그대로 가지고 와서 사용가능함
// export { yuanToWon, yenToWon };


export function yuanToWon(money) {
    var won = money * 192.53;
    return won;
}

export function yenToWon(money) {
    var won = money * 9.88;
    return won;
}
