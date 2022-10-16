console.log("hello");
// Header

// 솔루션 패널 열기
const expandSolution = document.querySelector(
  ".header__container2__item ul.left .expand-solution"
);
const solutionPanelEl = document.querySelector(
  ".header__container2__item ul.left .panel"
);
let leftSolPanelBool = false;

function handleSolExpandEl(event) {
  console.log("call handleSolExpandEl");
  if (event.type === "mouseover" && !leftSolPanelBool) {
    solutionPanelEl.classList.add("show");
    leftSolPanelBool = true;
  } else if (event.type === "mouseout" && leftSolPanelBool) {
    solutionPanelEl.classList.remove("show");
    leftSolPanelBool = false;
  }
}

expandSolution.addEventListener("mouseover", handleSolExpandEl);
solutionPanelEl.addEventListener("mouseover", handleSolExpandEl);

expandSolution.addEventListener("mouseout", handleSolExpandEl);
solutionPanelEl.addEventListener("mouseout", handleSolExpandEl);

//리소스 패널 열기
const expandResource = document.querySelector(
  ".header__container2__item ul.left .expand-resource"
);
const resourcePanelEl = document.querySelector(
  ".header__container2__item ul.left .panel-resource "
);
let leftResPanelBool = false;

function handleResExpandEl(event) {
  console.log("call handleResExpandEl");
  if (event.type === "mouseover" && !leftResPanelBool) {
    resourcePanelEl.classList.add("show");
    leftResPanelBool = true;
  } else if (event.type === "mouseout" && leftResPanelBool) {
    resourcePanelEl.classList.remove("show");
    leftResPanelBool = false;
  }
}

expandResource.addEventListener("mouseover", handleResExpandEl);
resourcePanelEl.addEventListener("mouseover", handleResExpandEl);

expandResource.addEventListener("mouseout", handleResExpandEl);
resourcePanelEl.addEventListener("mouseout", handleResExpandEl);
// .header__container2__item .right .expand 펼치기
const expandEl = document.querySelector(
  ".header__container2__item .right .expand "
);
const rightPanelEl = document.querySelector(
  ".header__container2__item .right .expand .panel"
);
let rightPanelBool = false; //닫여있는가? 기본 false

function handleExpandEl(event) {
  console.log("call handleExpandEl");
  if (event.type === "mouseover" && !rightPanelBool) {
    rightPanelEl.classList.add("show");
    rightPanelBool = true;
  } else if (event.type === "mouseout" && rightPanelBool) {
    rightPanelEl.classList.remove("show");
    rightPanelBool = false;
  }
}

expandEl.addEventListener("mouseover", handleExpandEl);
rightPanelEl.addEventListener("mouseover", handleExpandEl);

expandEl.addEventListener("mouseout", handleExpandEl);
rightPanelEl.addEventListener("mouseout", handleExpandEl, 300);
// Section 3
const s3_swiper = new Swiper(".section3 .row-second .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".section3 .swiper-pagination",
    clickable: "true",
  },
});

const s4_swiper = new Swiper(".section4 .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".section4 .s4-pagination",
    clickable: "true",
  },
});
