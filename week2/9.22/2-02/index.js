/*지시사항을 따라 작성해주세요*/

function scrollUp(e) {
    /*1. 함수를 적용할 target 변수 지정하기*/
    /**
     * querySelector (#아이디 , .클래스 , 태그 )
     * getElementById 
     * 둘다 사용 가능 
     */
    const btn = document.querySelector("#scroll-btn");
    /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
    console.log(btn.offsetTop);
    console.log(btn.offset);
    btn.addEventListener("click", () => //클릭 이벤트가 발생되었을 때 함수가 실행됨
        window.scrollTo({       //스크롤 옮기기 
            top: 0, left: 0,    // 옮기는 위치 
            behavior: "smooth"  // 부드럽게 
        })
    );
}

scrollUp("scroll-btn");

// target 지정하는 방법들
// window객체
// window.scrollUp("scroll-btn");
