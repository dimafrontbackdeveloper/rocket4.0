const oneScroll = 100;

const featuresColumnCenter = document.querySelector('.features__column-center');

const featuresColumnCenterImages = [...featuresColumnCenter.getElementsByTagName('img')];
featuresColumnCenterImages[0].style.opacity = '1';
featuresColumnCenterImages[1].style.opacity = '0';

const featuresColumnCenterRectTop = featuresColumnCenter.getBoundingClientRect().top;
const featuresColumnCenterHeight = featuresColumnCenter.offsetHeight;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
const featuresImages = ['./assets/images/phone1.png', './assets/images/phone2.png'];

const featuresAnimation = () => {
  const bottomPositionOfFeaturesColumnCenter =
    featuresColumnCenterHeight + featuresColumnCenterRectTop - window.scrollY - window.innerHeight;

  // if we scroll to bottom of features column center
  if (bottomPositionOfFeaturesColumnCenter + oneScroll < 0) {
    featuresColumnCenterImages[0].style.opacity = '0';
    featuresColumnCenterImages[1].style.opacity = '1';
  } else {
    featuresColumnCenterImages[0].style.opacity = '1';
    featuresColumnCenterImages[1].style.opacity = '0';
  }
};

export default featuresAnimation;
