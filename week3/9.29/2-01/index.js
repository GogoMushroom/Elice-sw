class Menu {
    // 지시사항을 참고하여 코드를 작성하세요.
    handleEvent(event) {
        let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
        if (method === "onMousedown") return this.onMousedown();
        else if (method === "onMouseup") return this.onMouseup();
    }

    onMousedown() {
        elem.innerHTML = "마우스 버튼을 눌렀습니다.";
    }

    onMouseup() {
        elem.innerHTML = "마우스 버튼을 뗐습니다.";
    }
}

let menu = new Menu();
const elem = document.getElementById("elem");
elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);

// 이벤트 타입 : https://developer.mozilla.org/ko/docs/Web/API/Event/type
