const mentionsSliderContainer = document.querySelector('.mentions__slider-container');
const mentionsSliderWrapper = document.querySelector('.mentions__slider-wrapper');
const mentionsSwiperButtonTeamNext = mentionsSliderContainer.querySelector('.swiper-button-next');
const mentionsSwiperButtonTeamPrev = mentionsSliderContainer.querySelector('.swiper-button-prev');
const mentionsSliderButtonTeamNext = mentionsSliderContainer.querySelector('.slider-button-next');
const mentionsSliderButtonTeamPrev = mentionsSliderContainer.querySelector('.slider-button-prev');

const mentionsSlider = () => {
  new Swiper(mentionsSliderContainer, {
    navigation: {
      nextEl: mentionsSwiperButtonTeamNext,
      prevEl: mentionsSwiperButtonTeamPrev,
    },
    loop: true,
  });

  mentionsSliderButtonTeamNext.addEventListener('click', () => {
    mentionsSwiperButtonTeamNext.click();
  });

  mentionsSliderButtonTeamPrev.addEventListener('click', () => {
    mentionsSwiperButtonTeamPrev.click();
  });
};

export default mentionsSlider;
