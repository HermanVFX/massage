// menu
const menuBtn = document.querySelector('.header__menu-button');
const menuBlock = document.querySelector('.header__wrapper');
const menuElemLogo = document.querySelector('.header__logo');
const menuElemLogoImg = document.querySelector('.header__logo img');
const menuElemTitle = document.querySelector('.header__title');
const menuElemList = document.querySelector('.header__menu');

const openMenu = function () {
  if (menuBlock.classList.contains('header__wrapper--close-menu')) {
    menuBlock.classList.remove('header__wrapper--close-menu');
    menuElemLogo.classList.remove('header__logo--close-menu');
    menuElemTitle.classList.remove('header__title--close-menu');
    menuElemList.classList.remove('header__menu--close-menu');

    menuBlock.classList.add('header__wrapper--open-menu');
    menuElemLogo.classList.add('header__logo--open-menu');
    menuElemTitle.classList.add('header__title--open-menu');
    menuElemList.classList.add('header__menu--open-menu');

    menuElemLogoImg.src='img/logo-green.svg';
  } else {
    menuBlock.classList.remove('header__wrapper--open-menu');
    menuElemLogo.classList.remove('header__logo--open-menu');
    menuElemTitle.classList.remove('header__title--open-menu');
    menuElemList.classList.remove('header__menu--open-menu');

    menuBlock.classList.add('header__wrapper--close-menu');
    menuElemLogo.classList.add('header__logo--close-menu');
    menuElemTitle.classList.add('header__title--close-menu');
    menuElemList.classList.add('header__menu--close-menu');

    menuElemLogoImg.src='img/logo-white.svg';
  }
};

menuBtn.addEventListener('click', openMenu);
