// 돔 로드
document.addEventListener('DOMContentLoaded', () => {
    //노드 가져오기
    const img = document.querySelector("#sec1 img");
    const prevbt = document.querySelector("#prevbt");
    const nextbt = document.querySelector("#nextbt"); //getElemntById('prevbt') => # 안 씀

    //이미지 배열
    const imgarr = ['html', 'css', 'js', 'react']; //String이니까 따옴표 붙이기

    //이미지 배열의 인덱스가 바뀔 때 이미지 src 값 바뀌고 버튼 사라지게 하기
    let idx = 0;

    const updateImg = () => {
        img.setAttribute('src', `../img/${imgarr[idx]}.png`);
        img.setAttribute('alt', `${imgarr[idx]}`) // imgarr[idx].split(".")[0] => html.png로 가지고 온다면

        if (idx == 0) {prevbt.style.backgroundColor = "white"}
            else {prevbt.style.backgroundColor = "blue"}

        if (idx == imgarr.length - 1) {nextbt.style.backgroundColor = "white"}
            else {nextbt.style.backgroundColor = "blue"}
    }

    // 이전 버튼 누르면 idx 작아지기
    prevbt.addEventListener('click', () => {
        idx = idx - 1;
        if (idx < 0) {
            idx = 0
        }
        updateImg();
    })
    
    // 다음 버튼 누르면 idx 커지기
    nextbt.addEventListener('click', () => {
        idx = idx + 1;
        if (idx > imgarr.length - 1) {
            idx = imgarr.length - 1;
        }
        updateImg(); 
    })
    
    console.log(idx)
})