// Simple nav toggle

const navBtn = document.getElementById("nav-btn");
const navList = document.getElementById("nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

//Slider
const swiper = new Swiper(".my-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
