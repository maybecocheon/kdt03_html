// 돔 로드하기
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    // 확인 버튼
    const check = document.querySelector('button');

    // 인풋
    const num1 = document.querySelector('#num1');

    // 이미지
    const img = document.querySelector('img');


     // 공통함수 및 변수 생성
    let flag = false;
    let rd;
    const init = (flagtf, numVal, numSt, checkTxt, imgSet) => {
        flag = flagtf; // flag에 flagtf값을 대입해야 함 int n = value
        num1.value = numVal 
        num1.style.display = numSt
        check.textContent = checkTxt;
        img.setAttribute('src', `../img/${imgSet}.png`);
    }

    // 버튼이 눌러졌을 때 랜덤수 확인 버튼 누를 때 한 번만 생성
    check.addEventListener('click', (e) => {
        e.preventDefault(); // 폼은 자동으로 제출되고 새로고침 되므로 제출 시 페이지 새로고침 막기

        // 1. 처음 눌러졌는지 확인해서 랜덤수 생성
        if (flag == false) {
            rd = Math.floor(Math.random() * 100 + 1); // 1~100
            init(true, '', 'inline', '확인', 'what')
            // flag = true; => 안 하면 랜덤값 계속 생성됨
        }

        // 2. 랜덤수와 인풋 값 비교해서 업다운 이미지 보여 주기
        if (rd > parseInt(num1.value)) {
            img.setAttribute('src', "../img/up.png");
        } else if (rd < parseInt(num1.value)) {
            img.setAttribute('src', "../img/down.png")

        // 3. 숫자를 맞추면 처음부터 다시 하도록 
        } else if (rd == parseInt(num1.value)) {
            init(false, '', 'none', '다시 시작하기', 'good')
        }
    })
})