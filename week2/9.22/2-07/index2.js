const boxs = document.querySelectorAll(".favorites-icon");

function clickBox() {
    //각각의 박스 안에서 on z클래스를 remove 해준다.
    boxs.forEach((box) => box.classList.remove("on"));
    this.classList.add("on");
}

function checkBox() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", clickBox);
    }
}

checkBox();
