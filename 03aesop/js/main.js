console.log('hello');

// SUPER-HEADER-MODAL
const superHeaderEl = document.querySelector('.super-header');
const superHeaderModalArea = document.querySelector('.super-header-modal');
const superHeaderModalCloseEl = document.querySelector(
  '.super-header-modal .close-container .material-symbols-outlined'
);

let superHeaderModalBool = false;
const bodyEl = document.querySelector('body');

// super-header 이벤트
superHeaderEl.addEventListener('click', () => {
  if (superHeaderModalBool) {
    // 열려있는 경우 닫아주기
    console.log('열려있어서 닫았어');
    superHeaderModalArea.classList.remove('show');
    superHeaderModalBool = false;
  } else {
    //닫혀 있는 경우 열어주기
    console.log('닫혀있어서 열었어');
    superHeaderModalArea.classList.add('show');
    superHeaderModalBool = true;
  }
  console.log(superHeaderModalBool);
});
// super-header-modal 닫기 버튼 이벤트
superHeaderModalCloseEl.addEventListener('click', () => {
  superHeaderModalArea.classList.remove('show');
  superHeaderModalBool = false;
});
//  body 클릭해서 닫기
bodyEl.addEventListener('click', (e) => {
  //해당 영역 누르면 super-header-modal 닫아주기
  if (e.x > 660 && superHeaderModalBool && e.y > 40) {
    superHeaderModalArea.classList.remove('show');
    superHeaderModalBool = false;
  }
});

///////////////////////////////////////////////////////////////////// HEADER
window.__scrollPosition = document.documentElement.scrollTop || 0;
const headerEl = document.querySelector('#header');
// 헤더 옵션 모두 제거
function removeHeaderOptions() {
  headerEl.classList.remove('header--white');
  headerEl.classList.remove('header--fixed');
}
//윈도우 스크롤 감지해서 헤더 작동시키기
window.addEventListener(
  'scroll',
  _.throttle(function () {
    let _documentY = document.documentElement.scrollTop;
    let _direction = _documentY - window.__scrollPosition >= 0 ? 'down' : 'up';

    console.log(_direction, window.scrollY); // 콘솔창에 스크롤 방향을 출력

    if (window.scrollY === 0 /*&& !isMenuModalOpen */) {
      //최상단에 도착하면 모든 옵션 삭제
      removeHeaderOptions();
    } else if (_direction === 'down' && window.scrollY > 40 + 77) {
      //어느정도 스크롤 내리면 흰색으로 바꾸고 화면 위로 없애기
      headerEl.classList.add('header--white');
      gsap.to(headerEl, 0.2, {
        y: -120,
      });
    } else if (_direction === 'up' && window.scrollY > 40 + 77) {
      // 스크롤 올리면 fixed로 등장
      headerEl.classList.add('header--fixed');
      gsap.to(headerEl, 0.2, {
        y: 0,
      });
    } else if (_direction === 'up' && window.scrollY <= 40) {
      //최상단 근처에 가까워 지면 fixed 를 해제
      headerEl.classList.remove('header--fixed');
    }

    window.__scrollPosition = _documentY; // Update scrollY
  }, 10)
);

/////////////////////////////////////////////////////////////////////// MODAL FOR HEADER MENUES
const headerModalArea = document.querySelector('.section1 .header-modal');
//// BUTTONS ELEMENT
const headerLeftBtnsEl = document.querySelectorAll(
  '.section1 .header .left__list .left-menu-btn'
);
const headerCloseBtnEl = document.querySelector('#closeBtnInMenu');
//// MODAL ELEMENTS

const menuModalsEl = document.querySelectorAll(
  '.section1 .header-modal__inner'
);

let headerMenuBools = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
console.log(menuModalsEl);
console.log(menuModalsEl);

//  버튼bools를 false &  버튼들 active 제거 & 컨텐츠 모두 닫기 & 닫기 버튼 제거
function turnOffAllHeaderMenu() {
  for (let i = 0; i < headerMenuBools.length; i++) {
    headerMenuBools[i] = false;
  }
  // headerMenuBools.forEach((bool) => (bool = false)); // bools false로 이상하게 작동 안하네?

  menuModalsEl.forEach((content) => content.classList.remove('show')); // 컨텐츠 모두 제거
  headerLeftBtnsEl.forEach((btn) => btn.classList.remove('active')); // 모든 버튼 밑줄 제거
  headerCloseBtnEl.classList.remove('show'); // close 버튼 제거
}

// 닫기 버튼 눌렀을 때
headerCloseBtnEl.addEventListener('click', () => {
  turnOffAllHeaderMenu(); // 헤더 메뉴 전부 끄기
  headerModalArea.classList.remove('show'); // 모달 컨테이너도 끄기
  superHeaderEl.classList.remove('hidden'); // super-header 도 더이상 감추지 말기

  if (window.scrollY === 0) {
    //바디 스크롤 최상단에 위치한 경우 fixed랑 white 옵션 끄기
    removeHeaderOptions();
  }
  //스크롤 막아놓은거 다시 풀기
  preventBodyScroll('off');
});

// input 값으로 'on' / 'off' 를 입력하여 바디 스크롤 유무 설정
function preventBodyScroll(input) {
  if (input === 'on') {
    // on 이 입력되면 바디 스크롤 기능 X
    bodyEl.style.overflow = 'hidden';
    bodyEl.style.height = '100%';
  } else if (input === 'off') {
    // off 가 입력되면 바디 스크롤 기능 O
    bodyEl.style.overflow = '';
    bodyEl.style.height = '';
  }
}

function handleMenuBtn() {
  const i = Number(this.id); // 누른 버튼의 id 넘버를 가져온다.
  //  우선 메뉴모달 관련하여 끌 수 있는 건 전부다 꺼준다
  turnOffAllHeaderMenu();

  // super-header감추기
  superHeaderEl.classList.add('hidden');

  //헤더 컨트롤
  headerEl.classList.add('header--white');
  headerEl.classList.add('header--fixed');

  //바디 스크롤 막기
  preventBodyScroll('on');

  //헤더EL 위치 설정
  gsap.to(headerEl, 0.2, {
    y: 0,
  });

  //버튼에 active 클래스 달아서 밑줄 표시
  this.classList.add('active');

  // 모달에 show 클래스 달린 유무에 따라 on 또는 off
  if (menuModalsEl[i].classList.contains('show')) {
    // true 인 경우(이미 켜진경우) 꺼준다.
    headerModalArea.classList.remove('show');
    menuModalsEl[i].classList.remove('show');
    headerCloseBtnEl.classList.remove('show');
  } else {
    //false 인 경우(안켜진 상태) 켜준다.
    headerModalArea.classList.add('show');
    menuModalsEl[i].classList.add('show');
    headerCloseBtnEl.classList.add('show');
  }

  // headerMenuBools[i] = !headerMenuBools[i];
  //

  if (i >= 9) {
    storeTextInputEls[i - 8].focus();
  }
}

// 모든 헤더메뉴버튼에 클릭시 이벤트 리스너를 추가한다.
headerLeftBtnsEl.forEach((el) => el.addEventListener('click', handleMenuBtn));

const storeTextBoxEls = document.querySelectorAll(
  '.section1 .header-modal__inner .textbox'
);
const storeTextInputEls = document.querySelectorAll(
  '.section1 .header-modal__inner .textbox input'
);
storeTextInputEls.forEach((el, index) => {
  el.addEventListener('focus', () => {
    storeTextBoxEls[index].style.borderBottom = '1px solid rgba(0,0,0)';
  });
  el.addEventListener('blur', () => {
    storeTextBoxEls[index].style.borderBottom = '1px solid rgba(0,0,0,0.3)';
  });
});
///////////////////////////////////////////////////////////////////////////////////// Section 2

//section2 버튼
const s2_prevBtn = document.querySelector('.section2 .prev-btn');
const s2_nextBtn = document.querySelector('.section2 .next-btn');

// section2 slides
const s2_swiper = new Swiper('.section2 .swiper', {
  speed: 900,
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.section2 .next-btn',
    prevEl: '.section2 .prev-btn',
  },
  scrollbar: {
    el: '.section2 .pagination-bar',
    dragSize: 170,
  },
});

// section2 row에 마우스 올리면 버튼 나타나기
const s2_El = document.querySelector('.section2');

s2_El.addEventListener('mouseover', () => {
  s2_nextBtn.classList.add('show');
  s2_prevBtn.classList.add('show');
});
s2_El.addEventListener('mouseout', () => {
  s2_nextBtn.classList.remove('show');
  s2_prevBtn.classList.remove('show');
});
// section 5 버튼 등장 토글
const s5_el = document.querySelector('.section5');
const s5_prevBtn = document.querySelector('.section5 .prev-btn');
const s5_nextBtn = document.querySelector('.section5 .next-btn');

s5_el.addEventListener('mouseover', () => {
  s5_nextBtn.classList.add('show');
  s5_prevBtn.classList.add('show');
});

s5_el.addEventListener('mouseout', () => {
  s5_nextBtn.classList.remove('show');
  s5_prevBtn.classList.remove('show');
});

//sectino 5 스와이퍼
const s5_swiper = new Swiper('.section5 .swiper', {
  speed: 900,
  autoplay: true,
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.section5 .next-btn',
    prevEl: '.section5 .prev-btn',
  },
  scrollbar: {
    el: '.section5 .pagination-bars',
    dragSize: 400,
  },
});

//section 6 스와이퍼
const s6_paginationNameEl = document.querySelector(
  '.section6 .pagination-name'
);
const s6_nextBtnEl = document.querySelector('.section6 .next-btn');
const s6_prevBtnEl = document.querySelector('.section6 .prev-btn');

console.log('s6 swiper');
const s6_swiper = new Swiper('.section6 .swiper', {
  // observer: true,
  // observeParents: true,
  autoplay: true,
  speed: 900,
  rewind: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.section6 .next-btn',
    prevEl: '.section6 .prev-btn',
  },
  scrollbar: {
    el: '.section6 .pagination-bars',
  },
  pagination: {
    el: '.section6 .pagination-name',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let text;
      switch (current) {
        case 1:
          text = '이솝 파르나스';
          break;
        case 2:
          text = '이솝 성수';
          break;
        case 3:
          text = '이솝 한남';
          break;
        default:
          text = 'None';
          break;
      }

      gsap.to(s6_paginationNameEl, 0.2, {
        opacity: 0,
      });

      setTimeout(() => {
        s6_paginationNameEl.textContent = text;
        gsap.to(s6_paginationNameEl, 0.2, {
          opacity: 1,
        });
      }, 300);
    },
  },
});

// section6 버튼 등장
const s6_colRight = document.querySelector('.section6 .col-right');
s6_colRight.addEventListener('mouseover', () => {
  s6_nextBtnEl.classList.add('show');
  s6_prevBtnEl.classList.add('show');
  s6_swiper.autoplay.stop();
});

s6_colRight.addEventListener('mouseout', () => {
  s6_nextBtnEl.classList.remove('show');
  s6_prevBtnEl.classList.remove('show');
  s6_swiper.autoplay.start();
});

////////////////////////////////////////////////////////////////////// footer
//require 요소들 : 조건
const ft_requireEls = document.querySelectorAll('footer .require');
// 에러메세지 요소들 : 조건이 안맞으면 띄움
const ft_errMsgEls = document.querySelectorAll('footer .error-msg');
// 이메일버튼
const ft_emailBtnEl = document.querySelector('footer #enterEmail');
const ft_emailEl = document.querySelector('footer .email');

ft_emailBtnEl.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    if (ft_requireEls[i].checked) {
      // 체크가 된 경우 display : none;
      ft_errMsgEls[i].style.display = 'none';
    } else {
      // 체크 안된 경우 display 를 초기화 하여 나타냄
      ft_errMsgEls[i].style.display = 'flex';
    }
  }
  const textInput = ft_requireEls[3].value;
  if (checkEmail(textInput)) {
    //유효한 이메일이면 에러 없앰
    ft_emailEl.classList.remove('border--wine');
    ft_errMsgEls[3].style.display = 'none';
  } else {
    //입력한 메일이 유효하지 않으면 에러띄우기
    ft_emailEl.classList.add('border--wine');
    ft_errMsgEls[3].style.display = 'flex';
  }
});

//이메일 유효 체크 함수
function checkEmail(str) {
  let reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}

// 스크롤 효과

const spyEls = document.querySelectorAll('.scroll-spy');
console.log(spyEls, 'scroll 스파이');
spyEls.forEach((el, i) => {
  new ScrollMagic.Scene({
    triggerElement: el, //감시할 요소
    triggerHook: 0.8, //화면 80% 위치에 트리거
  })
    .setClassToggle(el, 'show') //show 를 토글
    .addTo(new ScrollMagic.Controller());
});
