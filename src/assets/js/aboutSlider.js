const aboutSlider = () => {
  // about slider
  const aboutSliderContainer = document.querySelector('.about-slider-container');
  const aboutSliderWrapper = document.querySelector('.about-slider-wrapper');
  const aboutSwiperPagination = aboutSliderContainer.querySelector('.swiper-pagination');
  const aboutItems = document.querySelectorAll('.about__item');

  document.addEventListener('DOMContentLoaded', async () => {
    const aboutSwiperPaginationBullet = aboutSliderContainer.querySelectorAll(
      '.swiper-pagination-bullet',
    );

    aboutItems.forEach((aboutItem, i) => {
      aboutItem.addEventListener('click', () => {
        aboutSwiperPaginationBullet[i].click();

        // add active class
        aboutItems.forEach((item) => {
          item.classList.remove('about__item--active');
        });
        aboutItem.classList.add('about__item--active');
      });
    });
  });

  new Swiper(aboutSliderContainer, {
    loop: true,
    pagination: {
      el: aboutSwiperPagination,
      clickable: true,
    },
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });
};

export default aboutSlider;
