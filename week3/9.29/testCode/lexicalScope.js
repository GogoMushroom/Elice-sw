let x = 1; // global

function first() {
    let x = 10;
    second();
    function third() {
        let x = 100;
        console.log("third: ", x);
    }
    third();
}

function second() {
    console.log("second: ", x);
}

first(); // ?
second(); // ?
