const boxs = document.querySelectorAll(".favorites-icon");

// 이벤트 삭제가 안됨 ㅜ
function checkBox() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", () => {
            const checkedBox = document.querySelector(".on");
            if (checkedBox !== null) checkedBox.classList.remove("on");
            boxs[i].classList.add("on");
        });
    }
}

checkBox();
