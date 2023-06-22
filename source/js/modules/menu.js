const menuButton = document.querySelector('.header__nav-button');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('.page__body');
const overlay = document.querySelector('.page__overlay');

const openMenu = () => {
  menu.classList.add('header__nav--opened');
  body.classList.add('page__body--menu-is-opened');
};

const closeMenu = () => {
  menu.classList.remove('header__nav--opened');
  body.classList.remove('page__body--menu-is-opened');
};

const initMenu = () => {
  if (menuButton && menu) {
    menu.classList.remove('header__nav--nojs');
    menuButton.addEventListener('click', () => {
      if (menu.classList.contains('header__nav--opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    overlay.addEventListener('click', closeMenu);
  }
};

export {initMenu};
