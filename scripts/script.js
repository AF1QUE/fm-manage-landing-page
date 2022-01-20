var swiper = new Swiper(".swipers", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  spaceBetween: 30,
  coverflowEffect: {
    grabCursor: true,
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  loop: true,
});
