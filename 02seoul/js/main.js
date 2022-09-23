console.log("hello");

// section9
const section9_swiper = new Swiper(".section9 .swiper", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
console.log(
  "오토플레이중임?",
  section9_swiper.autoplay.running,
  section9_swiper.autoplay.paused
);
//버튼 토글
const playToggleEl = document.querySelector(
  ".section9 .swiper-controller .swiper-playToggle"
);
const playIcon = document.querySelector(
  ".section9 .swiper-playToggle .material-icons"
);

function toggleHanddle(event) {
  let classes = playToggleEl.classList;
  if (classes[1] === "play") {
    classes.remove("play");
    playIcon.textContent = "pause";
    section9_swiper.autoplay.run();
  } else {
    classes.add("play");
    playIcon.textContent = "play_arrow";
    section9_swiper.autoplay.pause();
  }
  console.log(
    "오토플레이중임?",
    section9_swiper.autoplay.running,
    section9_swiper.autoplay.paused
  );
}
playToggleEl.addEventListener("click", toggleHanddle);
