//데이터 가져오기
const getData = (content) => {
    //인코딩한 txt1 값을 키워드에 넣기
    //let keyword = encodeURIComponent(txt1);
    let keyword = "%EB%B6%80%EC%82%B0%EC%97%AD";
    let apikey = "";
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apikey}`;
    url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${keyword}&_type=json`

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let items = data.response.body.items.item;
            let tags = items.map(item => `<div class="divItem">
                                            <img src="${item.galWebImageUrl}">
                                            <p class="pTitle">${item.galTitle}</p>
                                            <p class="pLocate">${item.galPhotographyLocation}</p>
                                            </div>`).join('');
            console.log(tags);
            content.innerHTML = tags;
        })
        .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded', () => {
    //노드 가져오기
    const txt1 = document.querySelector('#txt1');
    const btOk = document.querySelector('#btOk');
    const btCancel = document.querySelector('#btCancel');
    const content = document.querySelector('#content');

    //btOk 눌리면 데이터 가져오기
    getData(content);

    //btCancel 눌리면 화면 지우기 -> 텍스트 내용과 content 내용 지우기
})