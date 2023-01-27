const teamSliderContainer = document.querySelector('.team-slider-container');
const teamSliderWrapper = document.querySelector('.team-slider-wrapper');
const teamSwiperButtonTeamNext = teamSliderContainer.querySelector('.swiper-button-next');
const teamSwiperButtonTeamPrev = teamSliderContainer.querySelector('.swiper-button-prev');
const teamSliderButtonTeamNext = teamSliderContainer.querySelector('.slider-button-next');
const teamSliderButtonTeamPrev = teamSliderContainer.querySelector('.slider-button-prev');

const teamSlider = () => {
  // activate team slider for team section on display width < 1024
  if (window.innerWidth <= 1024) {
    new Swiper(teamSliderContainer, {
      navigation: {
        nextEl: teamSwiperButtonTeamNext,
        prevEl: teamSwiperButtonTeamPrev,
      },
      loop: true,
    });

    teamSliderButtonTeamNext.addEventListener('click', () => {
      teamSwiperButtonTeamNext.click();
    });

    teamSliderButtonTeamPrev.addEventListener('click', () => {
      teamSwiperButtonTeamPrev.click();
    });

    teamSliderWrapper.classList.remove('team__row');
    teamSliderWrapper.classList.remove('d-g');
  }
};

export default teamSlider;
