import SingleCategory from './single-category';
import CategoriesPage from './categories-page';
import PlayGround from './play';
import StatisticsTable from './statistics-page';

const burgerMenu = document.querySelector('[data-burger]');
const burgerStripe = document.querySelectorAll('[data-burger-stripe]');
const closeBtn = document.querySelector('[data-close]');
const menu = document.querySelector('.header-controls__nav');
const blackout = document.querySelector('.blackout');

const menuLinks = [];

burgerMenu.addEventListener('mouseover', () => {
  burgerStripe.forEach((key) => {
    key.classList.add('burger-menu--hover');
  });
});

burgerMenu.addEventListener('mouseout', () => {
  burgerStripe.forEach((key) => {
    key.classList.remove('burger-menu--hover');
  });
});

burgerMenu.addEventListener('click', () => {
  burgerStripe.forEach((key) => {
    key.classList.toggle('header-controls__stripe--active');
  });
  burgerMenu.style.opacity = '0';
  menu.classList.toggle('header-controls__nav--active');
  blackout.classList.toggle('blackout--active');
  document.body.classList.toggle('lock');
});

function closeMenu() {
  burgerStripe.forEach((key) => {
    key.classList.remove('header-controls__stripe--active');
  });
  burgerMenu.style.opacity = '';
  menu.classList.remove('header-controls__nav--active');
  blackout.classList.remove('blackout--active');
  document.body.classList.remove('lock');
}

blackout.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu);

const burgerMenuItems = ['Main', 'Animals 1', 'Animals 2', 'Clothing', 'Emotions', 'Actions 1', 'Actions 2', 'Food', 'Nature', 'Statistics'];
const burgerMenuIcons = ['1-menu.png', '2-menu.png', '3-menu.png', '4-menu.png', '5-menu.png', '6-menu.png', '7-menu.png', '8-menu.png', '9-menu.png', '10-menu.png'];
const headerMenuContainer = document.querySelector('[data-header-menu]');

burgerMenuItems.forEach((key, index) => {
  const liElement = document.createElement('li');
  liElement.className = 'header-controls__menu-item';
  liElement.classList.add('header-controls__menu-link');
  liElement.innerHTML = `<img class="header-controls__menu-icon" src="assets/${burgerMenuIcons[index]}" alt="menu icon"> ${key}`;

  if (index === 0) liElement.classList.add('header-controls__menu-link--active');
  headerMenuContainer.appendChild(liElement);

  menuLinks.push(liElement);

  liElement.addEventListener('click', () => {
    const pageContainer = document.querySelector('[data-content]');
    document.querySelectorAll('.header-controls__menu-item').forEach((el) => el.classList.remove('header-controls__menu-link--active'));
    liElement.classList.add('header-controls__menu-link--active');
    while (pageContainer.children.length > 0) pageContainer.children[0].remove();
    if (StatisticsTable.properties.words) StatisticsTable.properties.words = [];
    if (SingleCategory) SingleCategory.reset();
    if (CategoriesPage) CategoriesPage.reset();
    PlayGround.resetGameStat();
    if (index === 0) {
      CategoriesPage.init();
    } else if (index === burgerMenuItems.length - 1) {
      StatisticsTable.init();
    } else {
      SingleCategory.init(index - 1);
    }
    closeMenu();
  });
});

export default function setMenuActiveEl(link) {
  menuLinks.forEach((key) => key.classList.remove('header-controls__menu-link--active'));

  if (link !== 'remove') {
    const menuLinkIndex = burgerMenuItems.indexOf(link);
    menuLinks[menuLinkIndex].classList.add('header-controls__menu-link--active');
  }
}
