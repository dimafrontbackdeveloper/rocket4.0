const sections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const headerNavItems = document.querySelector('.header').querySelectorAll('.header__nav-item');
const burgerNavItems = document.querySelector('.burger-menu').querySelectorAll('.header__nav-item');

const headerHeight = header.clientHeight;
let scrolledSectionIndexes = [];
let scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;

const setActiveNavItemAnimation = () => {
  sections.forEach((section, i) => {
    // if scrolled element and element includes in scrolledSectionIndexes
    if (
      section.getBoundingClientRect().top - headerHeight < 0 &&
      !scrolledSectionIndexes.includes(i)
    ) {
      scrolledSectionIndexes.push(i);
      scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;
      // set active navigation item
      headerNavItems[scrolledSectionIndexesLastIndex - 1]?.classList.remove(
        'header__nav-item--active',
      );
      headerNavItems[scrolledSectionIndexesLastIndex]?.classList.add('header__nav-item--active');
    }

    // if scrolled to top and we scrolled element we need to delete index at scrolledSectionIndexes
    if (
      section.getBoundingClientRect().top - headerHeight > 0 &&
      scrolledSectionIndexes.includes(i)
    ) {
      scrolledSectionIndexes.pop();
      scrolledSectionIndexesLastIndex = scrolledSectionIndexes.length - 1;
      // set active navigation item
      headerNavItems[scrolledSectionIndexesLastIndex + 1]?.classList.remove(
        'header__nav-item--active',
      );
      headerNavItems[scrolledSectionIndexesLastIndex]?.classList.add('header__nav-item--active');
    }
  });
};

export default setActiveNavItemAnimation;
