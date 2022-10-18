const boxs = document.querySelectorAll(".favorites-icon");

function clickBox() {
    boxs.forEach((box) => box.classList.remove("on"));
    this.classList.add("on");
    //this = 객체 스스로를 선택한다.
    
}

function checkBox() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", clickBox);
    }
}

checkBox();
