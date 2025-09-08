//리터럴 표기법
let arr1 = [1, 2, 3] ;

//Array 생성자를 이용
let arr2 = new Array(1, 2, 3);
let arr3 = new Array(3); // 요소 없이 비어 있는 3칸의 배열 생성

//배열 크기
console.log(arr1); // 배열의 길이, 요소 모든 정보를 볼 수 있음
console.log(`arr1: ${arr1}`); // arr1: 1, 2, 3
console.log(`arr1의 요소 개수: ${arr1.length}`); // arr1의 요소 개수: 3
console.log(`arr2의 요소 개수: ${arr2.length}`); // arr2의 요소 개수: 3
console.log(`arr3의 요소 개수: ${arr3.length}`); // arr3의 요소 개수: 3

//배열 요소 제거
console.log(arr2);
arr2.length = 0;
console.log(arr2);

console.log(arr3);
arr3 = [];
console.log(arr3);

//배열요소 추가
console.log(arr1);
arr1.push('가'); // 배열의 마지막에 '가' 요소가 추가됨
console.log(arr1);
//arr1.pop('가');
let arr1pop = arr1.pop(); // 배열의 마지막에 있는 요소를 제거함
console.log(arr1, typeof(arr1));
console.log(arr1pop, typeof(arr1pop));

//배열의 순회
//1. 배열의 값을 차례대로 순회하기
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//2. key(index)값 가져오기, 키란 데이터에 접근하기 위한 고유의 이름
for (let i in arr1){
    console.log(arr1[i]);
}

//3. value 값 가져오기
for (let item of arr1){
    console.log(item);
}

//4. foreach 메서드: 배열의 요소와 인덱스 모두에 접근 가능
arr1.forEach((item) => {
    console.log(item)
}); //foreach 매개변수 안에 함수가 들어감

//배열 map 메서드: 배열의 각 요소에 주어진 함수 호출하고 결과를 새 배열로 반환
const arr4 = arr1.map((item) => {
    return item * 2;
})
console.log(arr4);
//return은 값을 받아서 호출 함수에 되돌려줌
// const arr4 = arr1.map(item => item * 2) 같은 의미임
//콜백함수는 파라미터가 1개이면 ()가 생략 가능
//return문만 있으면 {}와 return을 생략가능
//콜백함수: 다른 함수에 전달되는 함수

//콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i) => item * i)
console.log(arr5);

//배열 filter 메서드: 주어진 조건 만족하는 요소만으로 새 배열 생성
const arr6 = arr1.filter((item) =>{
    return item % 2 == 0
})
console.log(arr6);
//const arr6 = arr1.filter(item => item % 2 == 0); 같은 의미임

//map함수
let arr7=[];
for (let c of arr1){
    arr7.push(c*2);
}
console.log(arr7);

//filter함수
let arr8=[];
for (let c of arr1){
    if (c%2==0){
        arr8.push(c);
}}
console.log(arr8);

//concat 함수: 함수 두 개 합치기
const arr9 = arr7.concat(arr8);
console.log(arr9);

//전개 연산자 (스프레드 연산자): 함수 두 개 합치기
const arr11 = [...arr7, ...arr8];
console.log(arr11);

//join 함수: 요소들 사이에 '' 끼워넣어서 합치기
let s = arr9.join('-'); // 2-4-6-2
console.log(s);
s = arr9.join(''); // 2462
console.log(s);

//slice 함수: 인덱스 start부터 end-1 자리까지 추출
console.log(arr9.slice(1,3)); // 인덱스 1부터 2까지 추출

//splice 함수: 배열을 변경(추가, 삭제)할 수 있음, (변경을 시작할 위치, 삭제할 요소의 개수(비우면 모든 요소 삭제함), 새롭게 추가할 요소)
arr9.splice(2, 0, 'A');
console.log(arr9); // return값을 주는 게 아니라 arr9 자체가 값이 바뀜

//sort 함수: 문자 정렬 / 숫자 정렬 시 sort((a, b) => a - b)) 오름차순 (b - a) 내림차순
arr9.sort();
console.log(arr9);  // return값을 주는 게 아니라 arr9 자체가 값이 바뀜

//trailing 쉼표
let arr10 = [1,2,];
console.log(arr10);

//구조 분해
let [x, y] = arr10;
console.log(`x = ${x}, y = ${y}`);

