const arr = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5];

console.log("초기값 없음");
arr.reduce((total, now, nowIdx, arr) => {
    console.log("total :", total);
    console.log("now :", now);
    console.log("nowIdx :", nowIdx);
    console.log("arr :", arr);
    console.log("\n");

    return total + now;
}//여기 초기값
);

// console.log("초기값 없음");
// arr2.reduce((total, now, nowIdx, arr) => {
//     console.log("total :", total);
//     console.log("now :", now);
//     console.log("nowIdx :", nowIdx);
//     console.log("arr :", arr);
//     console.log("\n");

//     return total + now;
// },1);

console.log("\n초기값 있음");
arr.reduce((total, now, nowIdx, arr) => {
    console.log("total :", total);
    console.log("now :", now);
    console.log("nowIdx :", nowIdx);
    console.log("arr :", arr);
    console.log("\n");

    return total + now;
}, 0); //초기값 0으로 지정해줌 

