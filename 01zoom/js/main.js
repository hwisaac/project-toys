console.log("hello");
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
