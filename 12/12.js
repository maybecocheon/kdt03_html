// 돔 로드
document.addEventListener('DOMContentLoaded', () => {
    
    //노드 가져오기
    const bt = document.querySelector('button');
    const cols = document.querySelectorAll('.col');
    const msg = document.querySelector('#msg')

    //배열 생성 및 변수 설정
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = false;
    let idx;
    let cnt = 0;

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
    
    //처음 폭탄 섞기 클릭될 때만 배열 순서 섞기
    bt.addEventListener('click', () => {
        if (bt.innerHTML == '다시 하기') init();

        if(flag == false) {
            arr.sort(() => Math.random() - 0.5); 
            msg.innerHTML = "";
            bt.innerHTML = "게임 중..."
            flag = true;
        }
        
    }) 

    console.log(arr)
    
    //보드 선택
    //flag가 false 상태일 때 col 클릭하면 폭탄 섞으라 하고, true 상태일 때는 게임 시작
    
          
    for (let col of cols){
        col.addEventListener('click', () => {
            if (flag == false){
                    msg.innerHTML = "폭탄을 섞어 주세요.";
                    return; // return을 하면 밑에 코드 실행 안 되고 함수를 빠져 나감
            }

            idx = parseInt(col.getAttribute('id').replace('col',''));

            cnt++;
                    
                    //클릭했을 때 1이면 폭탄 꺼내기
                    if (arr[idx] == 1){
                        col.innerHTML = "💥";
                        msg.innerHTML = "실패";
                        bt.innerHTML = "다시 하기";
                        flag = false;
                        return;
                    } else {
                        col.innerHTML = "❤";
                        if (cnt == 8) {
                            cols[arr.indexOf(1)].innerHTML = "❤";
                            msg.innerHTML = "성공";
                            bt.innerHTML = "다시 하기";
                            flag = false;
                        }
                    }
                })
    }
})