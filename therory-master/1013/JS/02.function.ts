{

  // function addNum1(num1, num2) {
  //   //'num2' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.ts
  //   return num1 + num2;
  // }

  function addNum2(num1: number, num2: number): number {
    return num1 + num2;//num1,num2 는 숫자이기때문에 산술연산자로만 사용이된다.
  }
  console.log(addNum2(10,20))

  // function fetchId1(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(1234);
  //   });
  // }

  function fetchId2(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(1234);
    });
  }

  function printName1(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName1('yeonmi', 'park'); //string타입만 올 수 있음 , 2개만, ?사용시 넣어도되고안넣어도됨
  printName1('박연미');

//  function printName2(firstName: string, lastName: "kim") { //default 값 
  function printName2(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  printName2('yeonmi', 'park');
  printName2('박연미', undefined);
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();


  function addNumbers(...numbers: number[]): number { //number 만 들어가는 배열
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));




}

