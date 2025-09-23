// 돔 로드
document.addEventListener('DOMContentLoaded', () => {
    
    //노드 가져오기
    const bt = document.querySelector('button');
    const cols = document.querySelectorAll('.col'); //노드리스트 형태로 가지고 옴. 한 개를 all로 들고 와도 노드리스트 형태가 됨.
    const msg = document.querySelector('#msg');

    //배열 생성 및 변수 설정
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; // 1일 때는 폭탄, 0일 때는 하트 나옴
    let flag = false; // arr을 섞는 조건을 만드는 불린 변수
    let idx; // 현재 선택된 위치(배열의 인덱스)
    let cnt = 0; // 보드를 몇 번 클릭했는지

    //초기화하는 공통함수
    const init = () => {
        flag = false;
        cnt = 0;
        for (let i = 0; i < cols.length; i++){
            cols[i].innerHTML = i + 1;
        }
        bt.innerHTML = "폭탄 섞기";
        msg.innerHTML = "";
    }

    //결과 공통함수
    const check = (message) => {
        msg.innerHTML = `${message}`;
        bt.innerHTML = "다시 하기";
        flag = false;
    }
    
    //처음 폭탄 섞기 클릭될 때만 배열 순서 섞기
    bt.addEventListener('click', () => {
        //게임이 종료된 경우 다시 초기화
        if (bt.innerHTML == '다시 하기') init();

        //폭탄을 섞는 과정임
        if(flag == false) {
            arr.sort(() => Math.random() - 0.5); 
            msg.innerHTML = "";
            bt.innerHTML = "게임 중..."
            flag = true;
        }
        
    }) 
    
    //보드 선택
    //flag가 false 상태일 때 col 클릭하면 폭탄 섞으라 하고, true 상태일 때는 게임 시작

    for (let col of cols){
        col.addEventListener('click', () => {
            if (flag == false){ //폭탄이 섞이지 않은 상태
                    msg.innerHTML = "폭탄을 섞어 주세요.";
                    return; // return을 하면 밑에 코드 실행 안 되고 함수를 빠져 나감
            }

            //현재 선택된 보드를 id 속성으로 찾기 id="col0"
            idx = parseInt(col.getAttribute('id').replace('col',''));

            //보드를 누른 횟수 증가
            cnt++;
            
            //현재 선택된 보드의 위치에 해당하는 배열의 위치 값으로 비교
            //클릭했을 때 1이면 폭탄 꺼내기
            if (arr[idx] == 1){
                col.innerHTML = "💥";
                check("실패");
                // msg.innerHTML = "실패";
                // bt.innerHTML = "다시 하기";
                // flag = false; // 생략 가능
                return;
            } else {
                col.innerHTML = "❤";
                //나머지 하나가 폭탄이 되므로 배열에서 1의 위치를 찾아서 하트를 채워 줌
                if (cnt == 8) {
                    cols[arr.indexOf(1)].innerHTML = "❤";
                    check("성공");
                    // msg.innerHTML = "성공";
                    // bt.innerHTML = "다시 하기";
                    // flag = false;
                }
            }
        })
    }
})