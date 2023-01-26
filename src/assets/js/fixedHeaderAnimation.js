const header = document.querySelector('.header');

const fixedHeaderAnimation = () => {
  if (window.scrollY >= 100) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
};

export default fixedHeaderAnimation;
