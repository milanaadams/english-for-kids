import cards from './cards';
import SingleCategory from './single-category';
import { switchCardState } from './switcher';
import setMenuActiveEl from './burger-menu';

const СategoriesPage = {
  categories: [],
  categoryCards: null,
  container: null,

  init() {
    this.container = document.querySelector('[data-content]');
    this.categoryCards = document.createElement('div');

    this.categoryCards.className = 'category-cards';

    this.categoryCards.appendChild(this.createCards());
    this.container.appendChild(this.categoryCards);

    this.loadSelectedCategory();
  },

  createCards() {
    const fragment = document.createDocumentFragment();
    cards[0].forEach((key, index) => {
      const cardsItem = document.createElement('div');
      const cardsImg = document.createElement('div');
      const cardsDescr = document.createElement('div');

      this.categories.push(cardsItem);

      cardsItem.className = 'category-cards__item';
      cardsImg.className = 'category-cards__img';
      cardsDescr.className = 'category-cards__descr';

      cardsImg.style.backgroundImage = `url(./assets/category-${index + 1}.jpg)`;

      cardsDescr.textContent = key;

      cardsItem.appendChild(cardsImg);
      cardsItem.appendChild(cardsDescr);

      fragment.appendChild(cardsItem);
    });
    switchCardState();
    return fragment;
  },
  loadSelectedCategory() {
    this.categories.forEach((card, index) => {
      card.addEventListener('click', () => {
        setMenuActiveEl(card.textContent);
        SingleCategory.init(index);
        this.container.removeChild(this.categoryCards);
        this.categoryCards = null;
        this.categories = [];
      });
    });
  },

  reset() {
    this.categories = [];
    this.categoryCards = null;
    this.container = null;
  },
};

export default СategoriesPage;
