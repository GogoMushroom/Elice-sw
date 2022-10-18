{

    const num: number = -6;

    const str: string = 'yeonmi';

    const boal: boolean = false;

    let name: undefined;//X

    let age: number | undefined;
    age = undefined;
    age = 30;

    function find(): number | undefined { //아직 값이 결정되지않음
        return undefined;
    }

    // null
    let person: null;
    let person2: string | null;

    // unknown 
    let dontKnow: unknown = 0;
    dontKnow = 'he';
    dontKnow = true;

    // any 
    let anything: any = null;
    anything = true;
    anything = 'string'; 

    // void
    function sayHi(): void {
        console.log('hi~~');
        return;
    }

    let notUse1: void = undefined; //X 

    // never : 없다 
    function throwError(message: string): never { // 함수가 종료되지 않을 때 사용됨 변수사용 X
        throw new Error(message);
        while (true) { }
    }
    let notUse2: never;


    let obj: object; //모든 타입은 object 상속, 대부분 사용자가 정의한 값을 사용한다. 

    //X
    function anyObject(obj: object) { }
    anyObject([1, 2, 3]);
    anyObject({ name: '나비', age: 5 });
}
