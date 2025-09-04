// 기존 방식
// function Hello(n) {
//     if (n == '1') alert("안녕하세요!");
//     else alert('반갑습니다.');

//     console.log('콘솔출력입니다');
// }

const Hello = (n) => {
    if (n == '1') alert("안녕하세요!");
    else alert('반갑습니다.');

    console.log('콘솔출력입니다');
}

// const = 상수
// == 값만 비교(데이터 타입 확인 x, 1 = "1"), === 타입까지 비교함(1 != "1")
// 함수가 변수에 할당될 수 있다??
// 익명함수??
// 콜백함수??

const CheckVar = () => {
    // x = 10;
    // var x; 생략 가능, 변수 값이 var보다 위에 있어도 밑에 있어도 언제든 값이 나옴
    let x; // 변수 값이 let보다 밑에 있을 때만 값이 나옴
    x = "test";
    const y =  20;
    // console.log('x = ' + x);
    console.log(`x = ${x}, y = ${typeof(y)}`);
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)? '예':'아니오'}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)? '예':'아니오'}`);
}

// 문자열은 "", '', ``로 묶을 수 있는데, ``(백틱)은 안에 변수 값도 넣을 수 있음.