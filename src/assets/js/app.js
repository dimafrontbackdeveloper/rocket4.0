import teamSlider from './teamSlider';
import mentionsSlider from './mentionsSlider';
import blogSlider from './blogSlider';
import aboutSlider from './aboutSlider';
import faqSlider from './faqSlider';
import burgerMenu from './burgerMenu';
import moveRocket from './rocketAnimation';
import featuresAnimation from './featuresAnimation';
import preloaderAnimation from './preloaderAnimation';
import fixedHeaderAnimation from './fixedHeaderAnimation';
import setActiveNavItemAnimation from './setActiveNavItemAnimation';

teamSlider();
mentionsSlider();
blogSlider();
aboutSlider();
faqSlider();
burgerMenu();
preloaderAnimation();

window.addEventListener('scroll', () => {
  moveRocket();
  featuresAnimation();
  fixedHeaderAnimation();
  setActiveNavItemAnimation();
});
