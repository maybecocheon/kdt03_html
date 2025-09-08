document.addEventListener('DOMContentLoaded', () => { // 돔 로드되었으니까 이제 노드를 가지고 올 수 있음
    //노드 가져오기
    // 주사위 이미지 노드 가져오기
    const diceImg = document.querySelector('#diceDiv > img');

    // 주사위 버튼 노드 가져오기
    const diceBt = document.querySelector('#btDiv > button');
    
    // 버튼이 클릭될 때
    diceBt.addEventListener('click', () => {
        let n = Math.floor(Math.random() * 6) + 1; //1~6까지
        diceImg.setAttribute('src', `../img/${n}.png`)
        diceImg.setAttribute('alt', `${n}`) // 이미지에 이름을 붙여 주는 것, 시각장애인을 위해 읽어 주면 이미지 이름을 n으로 읽게 됨
    });
}); 