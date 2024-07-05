document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const categoryItems = document.querySelectorAll('.categories ul li');

  categoryItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      swiper.slideTo(index);
    });
  });
});