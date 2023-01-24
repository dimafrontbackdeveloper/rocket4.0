const blogSlider = () => {
  const blogSliderContainer = document.querySelector('.blog-slider-container');
  const blogSliderWrapper = document.querySelector('.blog-slider-wrapper');
  const blogSwiperButtonTeamNext = blogSliderContainer.querySelector('.swiper-button-next');
  const blogSwiperButtonTeamPrev = blogSliderContainer.querySelector('.swiper-button-prev');
  const blogSliderButtonTeamNext = blogSliderContainer.querySelector('.slider-button-next');
  const blogSliderButtonTeamPrev = blogSliderContainer.querySelector('.slider-button-prev');

  new Swiper(blogSliderContainer, {
    navigation: {
      nextEl: blogSwiperButtonTeamNext,
      prevEl: blogSwiperButtonTeamPrev,
    },
    loop: true,
  });

  blogSliderButtonTeamNext.addEventListener('click', () => {
    blogSwiperButtonTeamNext.click();
  });

  blogSliderButtonTeamPrev.addEventListener('click', () => {
    blogSwiperButtonTeamPrev.click();
  });
};

export default blogSlider;
