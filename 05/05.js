//오브젝트 (객체) 생성
let obj = {'오렌지': '🍊'};

//오브젝트에 자료 추가
obj['사과'] = '🍎';
obj['바나나'] = '🍌'
console.log(obj);

// 오브젝트 자료 수정 (오브젝트 안에 해당 키가 있었으면 수정)
obj['사과'] = '🍏';
console.log(obj);

// 오브젝트 자료 삭제
delete obj['사과'];
console.log(obj);

// keys, values, entries의 결과는 array다. 따라서 배열의 함수를 쓸 수 있다.
// 키만 추출
// => 값을 추출하려면 따로 obj[k]로써 정의를 해야 함, k, v 등 따로 변수를 선언하여 활용할 수 없음
console.log(Object.keys(obj));
for (let k of Object.keys(obj)) {
    console.log(k, obj[k]);
}

// 값만 추출
console.log(Object.values(obj));
for (let v of Object.values(obj)) {
    console.log(v);
}

// 키와 값 추출 => array의 array로 값이 추출됨, 배열 안에 배열이 들어감, 2차원 배열이랑 비슷하긴 한데...
console.log(Object.entries(obj))
for (let [k,v] of Object.entries(obj)) {
    console.log(k, v);
}

// 전개연산자 (obj가 먼저 있으면 obj 먼저 나열됨)
let obj2 = {'수박': '🍉'};
let obj3 = {...obj2, ...obj};
console.log(obj3);

