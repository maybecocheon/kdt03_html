//어제 날짜 가져오기
const getYesterday = () => {
    //Date 객체의 인스턴스 생성
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let year = yesterday.getFullYear(); // 연도 4자리
    let mon = yesterday.getMonth() + 1; // 월 1~12
    let date = yesterday.getDate(); //일 1~31 참고: day는 요일

    //let mon = String(yesterday.getMonth() + 1).padStart(2,"0"); 이것도 가능
    
    //console.log(year + mon + date); 그냥 이렇게 쓰면 숫자라서 서로 더함
    return (year + "-" + String(mon).padStart(2,'0') + "-" + String(date).padStart(2,'0'));
    //2자리 나오게 할 건데 앞에 숫자 없으면 0으로 채워라

    // return yesterday.toISOString().slice(0, 10); => ISO형식(예: 2025-09-22 09:00:00.000Z)
}

//랭크 순위 변화
const getRankInten = (rankInten) => {
    let boxRank;
    if (rankInten > 0) {
        boxRank = `<span class="boxUp">▲ ${rankInten}</span>` //백틱 안에 있는 문자열만 반환됨
    } else if (rankInten < 0) {
        boxRank = `<span class="boxDown">▼ ${Math.abs(rankInten)}</span>`
    } else {
        boxRank = `<span class="boxSame">-</span>`
    }
    return boxRank;
}

//박스오피스 가져오기
const getData = (gdt, box) => {
    let apikey = '';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}`

    //fetch => 자바스크립트 내장함수
    //fetch는 주소 검색해서 불러오는 것
    //비동기 방식(url 다 불러오기 전에 fetch 밖에 있는 다음 실행문을 진행하고 있을 수 있음)
    //.then 끝나고 .then 실행됨 => 다 점으로 연결한 한 문장임
    fetch(url)
        .then(resp => resp.json()) //resp = response url fetch 끝난 결과(리턴값)를 받는 변수임 //.json()도 promise // 괄호 안은 콜백함수
        .then(data => {let boxs = data.boxOfficeResult.dailyBoxOfficeList; //boxOfficeResult는 대괄호+""로 감싸서 불러 올 수도 있음
                let tags = boxs.map(item => `<li onclick="getPoster('${item.movieNm}')">
                                    <span class="boxRank">${item.rank}</span>
                                    ${getRankInten(item.rankInten)}
                                    ${item.movieNm}</li>`).join(''); // tags는 box를 map 돈 결과 //join으로 묶어 주면 배열이 문자열 됨
                box.innerHTML = tags;   
        })
        .catch(err => console.log(err))
}

//영화 포스터 가져오기
const getPoster = (title) => {
    //제목 인코딩해서 가져오기
    const posterTitle = encodeURIComponent(title);
    //Api 키와 url 변수 지정
    let posterApi = '';
    let posterUrl = `https://api.themoviedb.org/3/search/movie?api_key=${posterApi}&query=${posterTitle}`;
    //fetch 해서 정보 불러오기
    fetch(posterUrl)
        .then(resp => resp.json())
        .then(data => {
                let source;
                if (data.results.length <= 0){
                    source = `<img src="../img/no_image.jpg" alt="이미지없음">`;
                } else {
                    let imagePath = data.results[0].poster_path;
                    source = `<img src="https://image.tmdb.org/t/p/w500${imagePath}" alt="${title}">`;
                }
                poster.innerHTML = source;
        })
        .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', () => {
    //요소(노드) 가져오기
    const dt = document.querySelector('#dt');
    const box = document.querySelector('#box');
    const poster = document.querySelector('#poster')
    
    //날짜 바뀔 때마다 결과 바뀌기
    dt.addEventListener('change', () => {getData(dt.value.replaceAll('-',''), box)});

    //어제 날짜
    dt.value = getYesterday();
    dt.setAttribute('max', getYesterday());

    //초기 박스오피스 가져오기
    getData(dt.value.replaceAll('-',''), box);

})