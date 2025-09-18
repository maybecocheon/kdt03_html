// 돔 로드
document.addEventListener("DOMContentLoaded", () => {
    // 노드 가져오기
    const main = document.querySelector('#sec1 img');

    const sub = document.querySelectorAll('#sec2 img');
    // const css = document.querySelector('.css');
    // const html = document.querySelector('.html');
    // const js = document.querySelector('.js');
    // const react = document.querySelector('.react');
    // alt 같은 속성값으로 노드 불러 오고 싶으면 ('#sec2 [alt="css"])처럼 대괄호로 불러 와야 함

    // 이미지 클릭하면 main이 해당 이미지로 바뀌기
    for (let subimg of sub){
        subimg.addEventListener('click', () => { // 마우스 올렸을 때 바꾸려면 mouseover 이용하면 됨
            main.setAttribute('src', subimg.getAttribute('src')); // set, get 이용해서 값 쓰고 읽을 수 있음
            main.setAttribute('alt', subimg.getAttribute('alt'));
        })
    }
})