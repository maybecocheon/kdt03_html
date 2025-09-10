// 돔 로드하기
document.addEventListener('DOMContentLoaded', () => {
    // 내가 제어할 노드 가져오기
        // select
        const sel1 = document.querySelector('#sel1');
        const sel2 = document.querySelector('#sel2');
    
        // input
        const txt1 = document.querySelector('#txt1');
        const txt2 = document.querySelector('#txt2');

        // label
        const label1 = document.querySelector('[for=txt1]');
        const label2 = document.querySelector('[for=txt2]');

    // 공통함수: 셀렉트 변경될 때 값 비워지고 lable(단위) 변경하기
    const updataUI = () => {
        txt1.value = '';
        label1.textContent = sel1.value;
    
        txt2.value = '';
        label2.textContent = sel2.value;
    }

    // 한 셀렉트 변경될 때 다른 셀렉트 변경하기
    sel1.addEventListener('change', () => {
        sel2.value = (sel1.value == '℃' ? '℉' : '℃');

        // 셀렉트 변경될 때 값 비워지고 lable 변경하기
        updataUI();
    })

    sel2.addEventListener('change', () => {
        sel1.value = (sel2.value == '℃' ? '℉' : '℃');

        // 셀렉트 변경될 때 값 비워지고 lable 변경하기
        updataUI();
    })

    //인풋 txt1에 값 받으면 단위 변환해서 txt2에 나타내기
    txt1.addEventListener('input', () => {
        let temp;
        // 섭씨온도를 화씨온도로 바꾸기
        if (sel1.value=='℃'){
            temp = (parseFloat(txt1.value) * 9 / 5) + 32;

        // 화씨온도를 섭씨온도로 바꾸기
        } else {
            temp = (parseFloat(txt1.value) - 32) * 5 / 9;
        }

        txt2.value = parseFloat(temp.toFixed(4)); //toFixed 걸면 string이 됨
    })
})