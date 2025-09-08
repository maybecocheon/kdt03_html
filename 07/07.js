document.addEventListener('DOMContentLoaded', () => { // 돔 로드되었으니까 이제 노드를 가지고 올 수 있음
    //노드 가져오기
    // 컴퓨터 주사위 이미지 노드 가져오기
    const comImg = document.querySelector('#comImg');
    const usImg = document.querySelector('#usImg');

    // 주사위 버튼 노드 가져오기
    const bts = document.querySelectorAll('button'); // querySelectorAll 노드 리스트를 가져옴 => 배열로 인식함

    //메시지 영역
    const msg = document.querySelector('#msg')

    // 버튼이 클릭될 때 컴퓨터 이미지 랜덤으로 변경, 유저 이미지는 선택된 숫자에 맞게 변경 후 메시지 출력
    for (let bt of bts) {
        bt.addEventListener('click', () => {
            const userNum = parseInt(bt.innerHTML.charAt(0)); //charAt(0): html에서 bts 배열 중 하나인 bt의 맨 첫 글자를 가져오겠음 (예시: '1 선택'에서 '1'을 가져옴)
            const comNum = Math.floor(Math.random() * 6) + 1; //1~6까지
            
            // 이미지 변경
            comImg.setAttribute('src', `../img/${comNum}.png`)
            comImg.setAttribute('alt', `${comNum}`) // 이미지에 이름을 붙여 주는 것, 시각장애인을 위해 읽어 주면 이미지 이름을 n으로 읽게 됨

            usImg.setAttribute('src', `../img/${userNum}.png`)
            usImg.setAttribute('alt', `${userNum}`)

            // 숫자를 맞췄는지 확인
            if (userNum === comNum){
                msg.innerHTML = "<div class='spo'>맞음</div>"
            } else {
                msg.innerHTML = "<div class='spx'>틀림</div>"
            }
        });
    }
})