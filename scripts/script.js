// SwiperJS

var swiper = new Swiper(".swipers", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  coverflowEffect: {
    grabCursor: true,
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

// Sticky header feature

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log("fired!!!");
});
