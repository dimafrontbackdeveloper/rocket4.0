// faq
const faqItems = document.querySelectorAll('.faq__item');
const faqColumnVisibles = document.querySelectorAll('.faq__column-visible');
const faqColumnHides = document.querySelectorAll('.faq__column-hide');
const faqColumnArrow = document.querySelectorAll('.faq__column-arrow');

const faqColumnHideTransitionOpacity = 500; // 0.5

const faqSlider = () => {
  faqColumnVisibles.forEach((el, i) => {
    el.addEventListener('click', (e) => {
      if (el.classList.contains('faq__column-visible--active')) {
        faqItems[i].classList.remove('faq__item--active');
        faqColumnHides[i].classList.remove('faq__column-hide--active');

        setTimeout(() => {
          el.classList.remove('faq__column-visible--active');
          faqColumnArrow[i].classList.remove('faq__column-arrow--active');
        }, faqColumnHideTransitionOpacity);
      } else {
        faqItems[i].classList.add('faq__item--active');
        el.classList.add('faq__column-visible--active');
        faqColumnArrow[i].classList.add('faq__column-arrow--active');
        faqColumnHides[i].classList.add('faq__column-hide--active');
      }
    });
  });
};

export default faqSlider;
