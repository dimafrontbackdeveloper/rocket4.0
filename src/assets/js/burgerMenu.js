const burgerMenu = () => {
  // burger menu
  const burger = document.querySelector('.burger');
  const closeBurger = document.querySelector('.close-burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const headerNavItems = document.querySelectorAll('.header__nav-item');

  const openBurgerMenu = () => {
    burgerMenu.classList.add('burger-menu--active');
    document.body.classList.add('overflow-h');
  };

  const closeBurgerMenu = () => {
    burgerMenu.classList.remove('burger-menu--active');
    document.body.classList.remove('overflow-h');
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
