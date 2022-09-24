// section2 토글 설정
// display 스와이프
const s2_displaySwiperUp = new Swiper(".section2 .display-up .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".section2 .abc-next",
    prevEl: ".section2 .abc-prev",
  },
  pagination: {
    el: ".section2 .inner-left .display-up .nav-bar .controller .page",
    type: "fraction",
  },
});
const s2_displaySwiperDown = new Swiper(".section2 .display-down .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl:
      ".section2 .inner-left .display-down .nav-bar .controller .display-next",
    prevEl:
      ".section2 .inner-left .display-down .nav-bar .controller .display-prev",
  },
  pagination: {
    el: ".section2 .inner-left .display-down .nav-bar .controller .page",
    type: "fraction",
  },
});
//display-up 재생버튼 토글 설정
const s2_displayUpPlayBtn = document.querySelector(
  ".section2 .inner-left .display-up .nav-bar .controller .display-playToggle "
);
//// .play 클래스가 있는가?(=play모양인가?) false 디폴트
let s2_displayUpPlayBtnBool = false;
const s2_upDisplayActiveSlide = document.querySelector(
  ".section2 .display-up.display-on .swiper .swiper-slide-active"
);

function handlePlayBtn(event) {
  console.log("플레이버튼 클릭");
  if (s2_displayUpPlayBtnBool === false) {
    //play 가 아닌경우 모양 바꾸기
    s2_displayUpPlayBtn.textContent = "play_arrow";
    s2_displaySwiperUp.autoplay.pause();
  } else {
    //play 가 맞는 경우 pause로 모양 바꾸기
    s2_displayUpPlayBtn.textContent = "pause";
    s2_displaySwiperUp.autoplay.run();
  }
  s2_displayUpPlayBtnBool = !s2_displayUpPlayBtnBool; //boolean 전환
}
s2_displayUpPlayBtn.addEventListener("click", handlePlayBtn);
console.log("hello");

//display-down 재생버튼 토글 설정
const s2_displayDownPlayBtn = document.querySelector(
  ".section2 .inner-left .display-down .nav-bar .controller .display-playToggle "
);
//// .play 클래스가 있는가?(=play모양인가?) false 디폴트
let s2_displayDownPlayBtnBool = false;
const s2_downDisplayActiveSlide = document.querySelector(
  ".section2 .display-down.display-on .swiper .swiper-slide-active"
);

function handleDownPlayBtn(event) {
  console.log("플레이버튼 클릭");
  if (s2_displayDownPlayBtnBool === false) {
    //play 가 아닌경우 모양 바꾸기
    s2_displayDownPlayBtn.textContent = "play_arrow";
    s2_displaySwiperDown.autoplay.pause();
  } else {
    //play 가 맞는 경우 pause로 모양 바꾸기
    s2_displayDownPlayBtn.textContent = "pause";
    s2_displaySwiperDown.autoplay.run();
  }
  s2_displayDownPlayBtnBool = !s2_displayDownPlayBtnBool; //boolean 전환
}
s2_displayDownPlayBtn.addEventListener("click", handleDownPlayBtn);

//주요뉴스-시민참여 토글 파트
// toggle-up 에 .toggle-on 클래스가 달려있는가? 디폴트 true
let isTogUpOn = true;

const s2_togUp = document.querySelector(
  ".section2 .inner .inner-left .toggle-up "
);
const s2_togDown = document.querySelector(
  ".section2 .inner .inner-left .toggle-down "
);
const s2_displayUp = document.querySelector(
  ".section2 .inner .inner-left .display .display-up"
);
const s2_displayDown = document.querySelector(
  ".section2 .inner .inner-left .display .display-down"
);

function s2HandleTogDown(event) {
  console.log("아래 클릭");
  //이미 아래쪽 토글이 켜져있으면 조기종료
  if (isTogUpOn === false) {
    return;
  }
  //toggle-on 클래스를 바꿔 달아준다.
  s2_togUp.classList.remove("toggle-on");
  s2_togDown.classList.add("toggle-on");
  //display-on 클래스를 바꿔 달아준다.
  s2_displayUp.classList.remove("display-on");
  s2_displayDown.classList.add("display-on");
}
function s2HandleTogUp(event) {
  console.log("위클릭");
  //이미 위쪽 토글이 켜져있으면 조기종료
  if (isTogUpOn === false) {
    return;
  }
  //toggle-on 클래스를 바꿔 달아준다.
  s2_togUp.classList.add("toggle-on");
  s2_togDown.classList.remove("toggle-on");
  //display-on 클래스를 바꿔 달아준다.
  s2_displayUp.classList.add("display-on");
  s2_displayDown.classList.remove("display-on");
}

s2_togDown.addEventListener("click", s2HandleTogDown);
s2_togUp.addEventListener("click", s2HandleTogUp);

// section9
const section9_swiper = new Swiper(".section9 .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// 재생정지 버튼 토글 설정
const playToggleEl = document.querySelector(
  ".section9 .swiper-controller .swiper-playToggle"
);
const playIcon = document.querySelector(
  ".section9 .swiper-playToggle .material-icons"
);

function s9ToggleHandle(event) {
  let classes = playToggleEl.classList;

  if (classes[1] === "play") {
    //play 클래스가 있으면 제거하여 pause 아이콘으로 바꾸고 autoplay 실행
    classes.remove("play");
    playIcon.textContent = "pause";
    section9_swiper.autoplay.run();
  } else {
    // play 클래스가 없으면 추가하여 play_arrow 아이콘으로 바꾸고 autoplay 정지.
    classes.add("play");
    playIcon.textContent = "play_arrow";
    section9_swiper.autoplay.pause();
  }
}
playToggleEl.addEventListener("click", s9ToggleHandle);

// 바디클릭 테스트
const bodyClick = document.querySelector("body");
function handleBodyClick(event) {
  console.log(event.target);
}
bodyClick.addEventListener("click", handleBodyClick);

//section10
//버튼눌러서 hide 없앴다 생겼다 해주기
const displayEl = document.querySelector(".section10 .inner .display");
let toggleDisplay = false;

// s10_btn1.addEventListener("click", function () {
//   if (toggleDisplay) {
//     displayEl.classList.add("hide");
//   } else {
//     displayEl.classList.remove("hide");
//   }
// });

//펼치기할 버튼
const s10_btn1 = document.querySelector(".section10 .item:nth-child(2)");
const s10_btn2 = document.querySelector(".section10 .item:nth-child(3)");
const s10_btn3 = document.querySelector(".section10 .item:nth-child(4)");
const s10_btn5 = document.querySelector(".section10 .item:nth-child(6)");

//버튼이 클릭돼있으면 true 반환. 아니면 false
function isClicked(s10_btn) {
  const classes = s10_btn.classList;
  if (classes[1] === "clicked") {
    return true;
  } else {
    return false;
  }
}
//버튼1 핸들
function handleBtn1(event) {
  if (isClicked(s10_btn1)) {
    //클릭 됐으면 클래스 삭제
    s10_btn1.classList.remove("clicked");
  } else {
    //클릭 안됐으면 클릭추가
    s10_btn1.classList.add("clicked");
    //나머지는 클릭제거
    s10_btn2.classList.remove("clicked");
    s10_btn3.classList.remove("clicked");
    s10_btn5.classList.remove("clicked");
  }
  toggleDisplay = !toggleDisplay;
  if (toggleDisplay) {
    displayEl.classList.add("hide");
  } else {
    displayEl.classList.remove("hide");
  }
}
s10_btn1.addEventListener("click", handleBtn1);
//버튼2 핸들
function handleBtn2(event) {
  if (isClicked(s10_btn2)) {
    //클릭 됐으면 클래스 삭제
    s10_btn2.classList.remove("clicked");
  } else {
    //클릭 안됐으면 추가
    s10_btn2.classList.add("clicked");
    //나머지는 클릭제거
    s10_btn1.classList.remove("clicked");
    s10_btn3.classList.remove("clicked");
    s10_btn5.classList.remove("clicked");
  }
  console.log(event);
}
s10_btn2.addEventListener("click", handleBtn2);
//버튼3 핸들
function handleBtn3(event) {
  if (isClicked(s10_btn3)) {
    //클릭 됐으면 클래스 삭제
    s10_btn3.classList.remove("clicked");
  } else {
    //클릭 안됐으면 추가
    s10_btn3.classList.add("clicked");
    //나머지는 클릭제거
    s10_btn1.classList.remove("clicked");
    s10_btn2.classList.remove("clicked");
    s10_btn5.classList.remove("clicked");
  }
}
s10_btn3.addEventListener("click", handleBtn3);
//버튼5 핸들
function handleBtn5(event) {
  if (isClicked(s10_btn5)) {
    //클릭 됐으면 클래스 삭제
    s10_btn5.classList.remove("clicked");
  } else {
    //클릭 안됐으면 추가
    s10_btn5.classList.add("clicked");
    //나머지는 클릭제거
    s10_btn1.classList.remove("clicked");
    s10_btn3.classList.remove("clicked");
    s10_btn2.classList.remove("clicked");
  }
  console.log(event);
}
s10_btn5.addEventListener("click", handleBtn5);
