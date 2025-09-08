// 로또 번호 생성
// 조건 1) 난수 생성 2) 중복 없음 3)  7개의 숫자
const Lotto = () => {
    // 0. 숫자 저장 배열
    let nums = [];

    // 1. 숫자 일곱 개 중복되지 않도록 생성
    while (nums.length < 7) {                       // length가 0인 경우 숫자를 배열에 하나 넣어 주고 7이 되는 순간 넣어 주면 안 됨, 요소 총 7개 생성
        let n = Math.floor(Math.random() * 45) + 1; // 1~45, +1 안 해 주면 0~44 숫자를 생성함
        // 숫자 배열에 있는지 확인하여 중복 검사
        if (nums.includes(n)){
            continue; // 여기서 뒤 명령문 실행하지 않고 반복문 다시 실행함
        }
        nums.push(n);
    }

        //배열에서 보너스 요소 뽑아내기
        const bonus = nums.pop();

        //보기 좋게 하기 위하여 숫자 정렬
        nums.sort((a, b) => a - b);

        console.log(nums);
        console.log(bonus);

    // 2. 태그 생성
    // +도 태그 생성
    let tags = [];

    for (let item of nums){
        tags.push(`<span class="sp${Math.floor(item / 10)}">${item}</span>`); // floor 버림
    }
    tags.push(`<span class="spplus">+</span>`);
    tags.push(`<span class="sp${Math.floor(bonus / 10)}">${bonus}</span>`);
    console.log(tags);

    // 3. 화면에 보이도록 HTML에 태그를 넣어 주기
    document.getElementById('spDiv').innerHTML = tags.join('');
}