
var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
/**
 * 이벤트 등록 3가지 방법
 * 1. 인라인 방식으로 html 코드 내에 적기
 * 2. DOM요소 프로퍼티 사용방법
 * 3. addEventListener
 * 1,2 번은 거의 쓰지않고 3번이 주로 사용된다.
 * 
*/

blockOne.addEventListener("mouseenter", () => {
    //console.log(blockOne.outerHTML);
    //className 은 기존의 값이 존재하면 그 위에 덮어씌운다.
    blockOne.className = "red";
    //blockOne.classList.add("red");
});

blockTwo.addEventListener("mouseenter", function () {
    // blockTwo.className = "yellow";
    blockTwo.classList.add("yellow");
});

function green() {
    // blockThree.className = "green";
    blockThree.classList.add("green");
}

blockThree.addEventListener("mouseenter", green);

// 차이점

// 여러개 등록 차이

//기존의 이벤트들이 지워지고 마지막 이벤트 하나만 등록이된다.
// 해결방법 : 하나의 함수에 여러개 등록하기 , 하지만 유지보수가 어려워짐
// blockTwo.onclick = function () {
//     console.log("DOM요소 프로퍼티 사용방법1 ");
// };

// blockTwo.onclick = function () {
//     console.log("DOM요소 프로퍼티 사용방법2 ");
// };




function eventListener() {
    console.log("이벤트 리스너 이용");
}

blockThree.addEventListener("click", eventListener);

// 이벤트 삭제
function remove() {
    console.log("이벤트 삭제1");
}
// 불가능
// 화살표 함수로 정의되면 이벤트 삭제가 불가능하다.
// 각각의 함수가 다른 함수이기 때문 
blockTwo.addEventListener("dblclick", () => console.log("이벤트 삭제"));
blockTwo.removeEventListener("dblclick", () => console.log("이벤트 삭제"));

// 가능
// 등록 삭제가 편하다
// 함수를 따로 정의해두고 사용하면 삭제가 가능하다.
blockTwo.addEventListener("dblclick", remove);
blockTwo.removeEventListener("dblclick", remove);

// tip
//이벤트를 등록과 동시에 삭제 , 한번만 실행됨
blockThree.addEventListener("dblclick", () => console.log("이벤트 한번만 실행하기"), {
    once: true,
});
