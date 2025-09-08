//회문
const check1 = (e) => {
//     //0. 버튼의 submit 기능을 없앰
//     e.preventDefault(); => 폼에 있는 버튼을 누르면 submit(다른 파일로 정보를 날려 주는 것)이 됨
    
    //1. 사용자가 입력한 문자열을 가져오기 => 1) document.getElementById 2) 쿼리 셀렉터
    const inputV = document.getElementById('txt1').value ; // input 요소의 값은 .value로 가지고 오고 넣을 수 있음

    //2. 입력된 문자열을 뒤집기
    // console.log(typeof(inputV)); inputV의 데이터 타입 출력
    // console.log(inputV.length); inputV 문자열의 길이 출력
    // console.log(inputV[0]); inputV 배열의 [0]번째 요소 출력 => 문자열은 문자의 배열으로 봄

    //입력한 문자열에서 공백 제거 => 그래야 회문으로 인식함
    let inputVt = inputV.replaceAll(' ', '');
    let resultV = '';

    // 1) 문자열 뒤집는 방법
    // for (let i = inputVt.length - 1; i >= 0; i--) {
    //     console.log(inputVt[i]);
    //     resultV = resultV + inputVt[i];
    // }

    // 2) 문자열 뒤집는 방법 => 문자열은 문자를 조합한 배열이기 때문에 쪼갤 수 있음
    resultV = inputVt.split('').reverse().join('');
    console.log(resultV);

    //3. 입력된 문자열과 뒤집은 문자열을 비교하기
    //3-1. 결과를 input 요소에 출력
    if (inputVt == resultV){
        document.getElementById('txt2').value = `"${inputV}"는 회문입니다.` ;  
    } 
    else document.getElementById('txt2').value = `"${inputV}"는 회문이 아닙니다.`;

    //3-2. 결과를 div 요소에 출력
    document.getElementById('msg').innerHTML = `<span>"${inputV}"</span> ${(inputVt == resultV)? "는 회문입니다." : "는 회문이 아닙니다."}`;
    // innerHTML은 HTML 문서처럼 기능해서 태그를 가질 수 있음
    // input 태그가 아닌 일반 태그(div, span 등)의 값은 .innerHTML로 가지고 와야 함
    // innerHTML을 사용해서 HTML에 해당하는 자리에 값을 넣을 수 있음
    
}

//숫자 합계
const check2 = () => {
    //1. 사용자가 입력한 문자열을 가져오기
    const inputV = document.getElementById('txt1').value ;
    
    //2. 문자열에서 숫자 인식해서 더하기
    let sum = 0;
    // 1) 반복문
    // for (let i = 0; i < inputV.length; i++) {
    //     if (!isNaN(inputV[i])){                   // isNaN(input[i])=false 이거랑 똑같은 의미임
    //         sum = sum + parseInt(inputV[i]);      // 문자열에 속한 문자이기 때문에 정수로 변환
    //     }
    // }

    // 2) 반복문
    for (let c of inputV){
        if (!isNaN(c)){ 
            sum = sum + parseInt(c);
        }
    }

    //3. 합계 출력
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `합계&nbsp;=&nbsp;<span>${sum}</span>`; // &nbsp; => 공백 문자열
}

//취소
const check3 = () => {
    document.getElementById('txt1').value='';
    document.getElementById('txt2').value='';
    document.getElementById('msg').innerHTML='';

    document.getElementById('txt1').focus();
}