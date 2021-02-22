import SingleCategory from './single-category';
import CategoriesPage from './categories-page';
import colorPalette from './colors';
import PlayGround from './play';
import StatisticsTable from './statistics-page';

const switcher = document.querySelector('[data-switcher]');
const switcherCircle = document.querySelector('[data-switcher-circle]');
const switcherText = document.querySelector('.header-controls__switcher-text');
const container = document.querySelector('[data-content]');
let appMode = false;

function switchCardState() {
  if (appMode) {
    CategoriesPage.categories.forEach((key) => {
      const item = key;
      item.style.backgroundColor = colorPalette.primaryColorPlay;
    });

    SingleCategory.properties.categoryItems.forEach((key) => {
      const item = key.element.childNodes[0];
      const imgBlock = item.childNodes[0];
      imgBlock.style.width = '100%';
      imgBlock.style.height = '100%';
      const descrBlock = key.element.childNodes[0].childNodes[1];
      descrBlock.style.display = 'none';
    });
    if (SingleCategory.properties.categoryItems.length > 0) {
      PlayGround.init();
    }
  } else {
    CategoriesPage.categories.forEach((key) => {
      const item = key;
      item.style.backgroundColor = colorPalette.primaryColorLearn;
    });
    SingleCategory.properties.categoryItems.forEach((key) => {
      const item = key.element.childNodes[0];
      const imgBlock = item.childNodes[0];
      imgBlock.style.width = '';
      imgBlock.style.height = '';
      const descrBlock = key.element.childNodes[0].childNodes[1];
      descrBlock.style.display = '';
    });

    if (SingleCategory.properties.categoryItems.length > 0) {
      while (container.children.length > 1) container.children[1].remove();
    }

    if (PlayGround.button.started) {
      const currentCat = SingleCategory.properties.currentCategory;
      PlayGround.resetGameStat();
      setTimeout(() => {
        while (container.children.length > 0) container.children[0].remove();
        SingleCategory.init(currentCat);
      }, 500);
    }
  }
}

switcher.addEventListener('click', () => {
  switcher.classList.toggle('header-controls__switcher--play');
  if (!appMode) {
    switcherCircle.animate([
      { left: 'auto', right: '60%' }, { left: 'auto', right: '20%' },
    ],
    { duration: 100 });
  } else {
    switcherCircle.animate([
      { right: 'auto', left: '60%' }, { right: 'auto', left: '20%' },
    ],
    { duration: 100 });
  }
  switcherCircle.classList.toggle('header-controls__switcher-circle--play');
  switcherText.classList.toggle('header-controls__switcher-text--play');
  if (switcherText.textContent === 'Train') switcherText.textContent = 'Play';
  else switcherText.textContent = 'Train';

  const burgerMenu = document.querySelector('.header-controls__nav');
  burgerMenu.classList.toggle('header-controls__nav--play');
  const burgerMenuStripe = document.querySelectorAll('.header-controls__stripe');
  burgerMenuStripe.forEach((key) => key.classList.toggle('header-controls__stripe--play'));

  const footerDescr = document.querySelector('.footer-descr');
  footerDescr.classList.toggle('footer-descr--play');

  if (StatisticsTable.properties.words.length > 0) {
    const statisticsTableHeader = document.querySelector('.statistics-table__head');
    statisticsTableHeader.classList.toggle('statistics-table__head--play');

    const controlsBtns = document.querySelectorAll('.controls__btn');
    controlsBtns.forEach((btn) => {
      btn.classList.toggle('controls__btn--play');
    });
  }

  appMode = !appMode;
  switchCardState();
});

export { appMode, switchCardState };
