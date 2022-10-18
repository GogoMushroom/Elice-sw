// array
const days = ["월", "화", "수"];
const otherDays = ["목", "금", "토", "일"];

const allDays = days + otherDays;
console.log(allDays);

const allDays2 = [days + otherDays];
console.log(allDays2);

const allDays3 = [days, otherDays];
console.log(allDays3);

const allDays4 = [...days, ...otherDays];
console.log(allDays4);

//object
const elice = {
    name: "엘리스",
    age: 3,
    jobs: "레이서",
};

const student = {
    name: "김토끼",
    MaxAge: 20,
    favoriteFood: "당근",
};

const eliceStudent = { ...elice, ...student };
console.log(eliceStudent);

// 깊은 복사
const elice2 = { ...elice };
elice2.jobs = "엘리트 레이서";
console.log(elice);
console.log(elice2);

// 구조분해 연산자와 함께 사용, 순서가 중요
const elice3 = { jobs: "SW엔지니어", ...elice, favoriteFood: "피자" };
console.log(elice3);
const elice4 = { ...elice, jobs: "SW엔지니어", favoriteFood: "피자" };
console.log(elice4);
