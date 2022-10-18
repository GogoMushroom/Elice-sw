class Car { //붕어빵 틀
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    color = "red";
    speed = 30;

    booster(num) {
        this.speed += num;
    }
}
//class 000 설계도
//new 000 = 설계도를 기반으로 만든 인스턴스 = 내맘대로 집어넣는것

//인스턴스 = 클래스로 찍어낸 객체 ! 


let myCar1 = new Car("Ford", 2014);  //Car 붕어빵 틀 { 밀가루 : Ford , 팥 : 2014 } = myCar1 팥붕어빵 
let myCar2 = new Car("Audi", 2019);

console.log("==================car1=================");
console.log(myCar1.name);
console.log(myCar1.year);
console.log(myCar1.color);
console.log(myCar1.speed);

myCar1.booster(20);

console.log(myCar1.speed);
console.log("==================car2=================");
console.log(myCar2.name);
console.log(myCar2.year);
console.log(myCar2.color);
console.log(myCar2.speed);

myCar2.booster(100);
console.log(myCar2.speed);
