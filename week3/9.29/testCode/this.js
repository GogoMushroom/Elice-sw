// case1
function myFn() {
    return console.log(this);
}
myFn();
console.log("=".repeat(60));

// case2
const fn = {
    title: "Hello World!",
    tags: [1, 2, 3, 4],
    func() {
        console.log(this.title);
    },
    funcThis: {
        title: "Hello elice",
        func() {
            return console.log(this.title);
        },
        arrFunc: () => {
            return console.log(this);
        },
    },
};
fn.func(); // hello world!
fn.funcThis.func(); // hello elice
fn.funcThis.arrFunc(); //globel

console.log("=".repeat(60));
