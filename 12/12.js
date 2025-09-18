// 돔 로드
document.addEventListener('DOMContentLoaded', () => {
    
    //노드 가져오기
    const bt = document.querySelector('button');
    const cols = document.querySelectorAll('.col');
    const msg = document.querySelector('#msg')

    //배열 생성 및 변수 설정
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = false;
    let idx;
    let cnt = 0;

    //초기화하는 공통함수
    // const init = () => {
    //     flag = false;
    //     cnt = 0;
    //     idx = 0;
    //     for (let i = 0; i < cols.length; i++){
    //         cols[i].innerHTML = i + 1;
    //     }
    //     bt.innerHTML = "폭탄 섞기";
    //     msg.innerHTML = "";
    // }

    
    //처음 폭탄 섞기 클릭될 때만 배열 순서 섞기
    bt.addEventListener('click', () => {
        if(flag) {
            arr.sort(() => Math.random() - 0.5); 
            
        }
        bt.innerHTML = "게임 중..."
    }) 
    console.log(flag)
    console.log(arr)

    //bt 변수는 다 초기화됨
    
    //보드 선택
    //flag가 false 상태일 때 col 클릭하면 폭탄 섞으라 하고, true 상태일 때는 게임 시작
    
        // if (flag){
        //     cols.addEventListener('click', () => {
        //         msg.innerHTML = "폭탄을 섞어 주세요.";
        //     })
        // }
          
    // for (let col of cols){
    //     col.addEventListener('click', () => {
    //         idx = parseInt(col.getAttribute('id').replace('col',''));

    //         cnt = cnt++;
                    
    //                 //클릭했을 때 1이면 폭탄 꺼내기
    //                 if (arr[idx] == 1){
    //                     col.innerHTML = "💥";
    //                     msg.innerHTML = "실패";
    //                     bt.innerHTML = "다시 하기";
    //                     init();
    //                 } else {
    //                     col.innerHTML = "❤";
    //                 }
    //                 console.log(cnt)
    //                 if (cnt == 8) {
    //                     col.innerHTML = "❤";
    //                     msg.innerHTML = "실패";
    //                     bt.innerHTML = "다시 하기";
    //                     flag = false;
    //                 }
    //             })
    // }
})

// document.addEventListener('DOMContentLoaded', () => {
//   const bt = document.querySelector('section > button');
//   const cols = document.querySelectorAll('.col') ;
//   const msg = document.querySelector('#msg') ;

//   let arrnum = [0,0,0,0,0,0,0,0,1] ;
//   let flag = false ;
//   let idx ;
//   let cnt = 0 ;

//   //초기화 
//   const init = () => {
//     flag = false ;
//     cnt = 0 ;
//     bt.innerHTML = '폭탄섞기' ;
//     msg.innerHTML = '';

//     for(let col of cols) col.innerHTML = '' ;
//   }

//   //폭탄섞기 버튼 
//   bt.addEventListener('click' , () => {
//     if (flag) return ;

//     if (bt.innerHTML == '다시하기') init() ;

//     //shuffle
//     arrnum.sort(() => Math.random() - 0.5) ;
//     flag = true ;
//     bt.innerHTML = '게임중 ...' ;
//     msg.innerHTML = ''; 
//   }) ;

//   //보드 선택
//   for(let col of cols) {
//     col.addEventListener('click', () => {
//       if (!flag) {
//         if ( cnt == 0) msg.innerHTML = "<span>폭탄을 섞어주세요.</span>" ;
//         return ;
//       }

//       cnt = cnt + 1 ;
//       idx = parseInt(col.getAttribute('id').replace('col',''));
//       if (arrnum[idx] == 0) {
//         col.innerHTML = '💖' ;
//         if (cnt == 8) {
//           cols[arrnum.indexOf(1)].innerHTML = '💖' ;
//           msg.innerHTML = "<span>성공</span>" ;
//           bt.innerHTML = '다시하기' ;
//           flag = false ;
//         }
//       }
//       else {
//         col.innerHTML = '💣' ;
//         msg.innerHTML = "<span>실패</span>" ;
//         bt.innerHTML = '다시하기' ;
//         flag = false ;
//       }
//       console.log(cnt)
//     }); 
//   }

// });