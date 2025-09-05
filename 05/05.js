//리터럴 표기법
let arr1 = [1, 2, 3] ;

//Array 생성자를 이용
let arr2 = new Array(1, 2, 3);
let arr3 = new Array(3); // 요소 없이 비어 있는 3칸의 배열 생성

//배열 크기
console.log(arr1);
console.log(`arr1: ${arr1}`);
console.log(`arr1의 요소 개수: ${arr1.length}`);
console.log(`arr2의 요소 개수: ${arr2.length}`);
console.log(`arr3의 요소 개수: ${arr3.length}`);

//배열 요소 제거
console.log(arr2);
arr2.length = 0;
console.log(arr2);

console.log(arr3);
arr3 = [];
console.log(arr3);

//배열요소 추가
console.log(arr1);
arr1.push('가');
console.log(arr1);
//arr1.pop('가');
let arr1pop = arr1.pop();
console.log(arr1, typeof(arr1));
console.log(arr1pop, typeof(arr1pop));

//배열의 순회
//1.
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//2. key(index)값 가져오기
for (let i in arr1){
    console.log(arr1[i]);
}

//3. value 값 가져오기
for (let item of arr1){
    console.log(item);
}

//4. foreach 메서드
arr1.forEach((item) => {
    console.log(item)
}); //foreach 인수 안에 함수가 들어감

//배열 map 메서드
const arr4 = arr1.map((item) => {
    return item * 2;
})
console.log(arr4);
//return은 값을 받아서 되돌려줌
// const arr4 = arr1.map(item => item * 2) 같은 의미임
//콜백함수는 파라미터가 1개이면 ()가 생략 가능
//return문만 있으면 {}와 return을 생략가능

//콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i) => item * i)
console.log(arr5);

//filter
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
