const burgerMenu = () => {
  // burger menu
  const burger = document.querySelector('.burger');
  const closeBurger = document.querySelector('.close-burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const headerNavItems = document.querySelectorAll('.header__nav-item');
  const burgerMenuTransition = 700; // 0.7

  const openBurgerMenu = () => {
    burgerMenu.classList.add('burger-menu--active');
    burgerMenu.style.zIndex = '5';
    document.body.classList.add('overflow-h');
  };

  const closeBurgerMenu = () => {
    burgerMenu.classList.remove('burger-menu--active');
    document.body.classList.remove('overflow-h');

    setTimeout(() => {
      burgerMenu.style.zIndex = '-1';
    }, burgerMenuTransition);
  };

  burger.addEventListener('click', openBurgerMenu);
  closeBurger.addEventListener('click', closeBurgerMenu);
  headerNavItems.forEach((headerNavItem) => {
    headerNavItem.addEventListener('click', () => {
      closeBurgerMenu();
    });
  });
};

export default burgerMenu;
