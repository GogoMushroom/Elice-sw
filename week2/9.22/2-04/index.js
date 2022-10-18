// 지시사항을 참고하여 코드를 작성하세요.

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const answer = document.querySelector("#answer");

form.addEventListener("click", save);


//form은 submit하게되면 새로고침되는 기본기능이 탑재되어있기 때문에 기본 이벤트를 멈춰줘야한다.
function save(e) {
    e.preventDefault(); // 새로고침 방지
    answer.innerHTML = input.value;
    // answer. = input.value;
}

// JS로 태그안에 텍스트를 추가하는 방법은?
console.log("innerHTML : ", form.innerHTML);    //대상 태그의 안쪽의 html
console.log("outerHTML : ", form.outerHTML);    //대상 태그를 포함한 html
console.log("textContent : ", form.textContent);//태그를 제외한 text만 


