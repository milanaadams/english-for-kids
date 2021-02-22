import cards from './cards';
import { appMode, switchCardState } from './switcher';

const SingleCategory = {
  properties: {
    categoryItems: [],
    backSide: false,
    currentCategory: 0,
    difficultWords: [],
  },

  init(categoryNum) {
    const container = document.querySelector('[data-content]');
    const flashCards = document.createElement('div');

    flashCards.className = 'flash-cards';

    flashCards.appendChild(this.createFlashCards(categoryNum));
    if (categoryNum === -1 && this.properties.difficultWords.length === 0) {
      const noCardsMsg = document.createElement('p');
      noCardsMsg.className = 'flash-cards__message';
      noCardsMsg.textContent = 'No difficult words to train yet!';
      flashCards.appendChild(noCardsMsg);
    }
    container.appendChild(flashCards);
    this.properties.currentCategory = categoryNum;
    this.setInteraction();
    if (appMode) switchCardState();
  },

  createFlashCards(num) {
    const fragment = document.createDocumentFragment();
    const currentcardSet = num === -1 ? this.properties.difficultWords : cards[num + 1];
    currentcardSet.forEach((key, index) => {
      const flashCardsItem = document.createElement('div');
      const flashCardsFront = document.createElement('div');
      const flashCardsBack = document.createElement('div');
      const flashCardsImgFront = document.createElement('div');
      const flashCardsImgBack = document.createElement('div');
      const flashCardsDescrFront = document.createElement('div');
      const flashCardsDescrBack = document.createElement('div');

      const flashCardsDescrTextFront = document.createElement('span');
      const flashCardsDescrTextBack = document.createElement('span');
      const flashCardsArrow = document.createElement('i');

      flashCardsItem.className = 'flash-cards__item';
      flashCardsImgFront.className = 'flash-cards__img';
      flashCardsImgBack.className = 'flash-cards__img';
      flashCardsDescrFront.className = 'flash-cards__descr';
      flashCardsDescrBack.className = 'flash-cards__descr';
      flashCardsArrow.className = 'fas fa-sync-alt';
      flashCardsFront.className = 'flash-cards__front';
      flashCardsBack.className = 'flash-cards__back';

      flashCardsArrow.classList.add('flash-cards-arrow');

      flashCardsDescrTextFront.textContent = key.word;
      flashCardsDescrTextBack.textContent = key.translation;

      flashCardsImgFront.style.backgroundImage = `url(./assets/${key.image})`;
      flashCardsImgBack.style.backgroundImage = `url(./assets/${key.image})`;

      flashCardsDescrFront.appendChild(flashCardsDescrTextFront);
      flashCardsDescrFront.appendChild(flashCardsArrow);
      flashCardsFront.appendChild(flashCardsImgFront);
      flashCardsFront.appendChild(flashCardsDescrFront);

      flashCardsDescrBack.appendChild(flashCardsDescrTextBack);
      flashCardsBack.appendChild(flashCardsImgBack);
      flashCardsBack.appendChild(flashCardsDescrBack);

      flashCardsItem.appendChild(flashCardsFront);
      flashCardsItem.appendChild(flashCardsBack);

      const newCard = {};

      if (num === -1) {
        newCard.element = flashCardsItem;
        newCard.categoryID = key.categoryID;
        newCard.cardID = key.cardID;
      } else {
        newCard.element = flashCardsItem;
        newCard.categoryID = num + 1;
        newCard.cardID = index;
      }

      flashCardsArrow.addEventListener('click', () => {
        this.properties.backSide = true;
        flashCardsArrow.style.display = 'none';
        flashCardsItem.style.transform = 'rotateY(180deg)';
        flashCardsItem.addEventListener('mouseleave', () => {
          flashCardsItem.style.transform = 'none';
          flashCardsArrow.style.display = '';
          this.properties.backSide = false;
        });
      });

      this.properties.categoryItems.push(newCard);

      fragment.appendChild(flashCardsItem);
    });

    return fragment;
  },

  setInteraction() {
    this.properties.categoryItems.forEach((item) => {
      item.element.addEventListener('click', () => {
        if (!this.properties.backSide && !appMode) {
          this.properties.categoryItems.forEach((key) => {
            const currentEl = key;
            currentEl.element.style.pointerEvents = 'none';
          });
          const audioElement = new Audio(`./assets/${cards[item.categoryID][item.cardID].audioSrc}`);
          audioElement.play();
          setTimeout(() => {
            this.properties.categoryItems.forEach((key) => {
              const currentEl = key;
              currentEl.element.style.pointerEvents = '';
            });
          }, 400);
        }
        if (!appMode) {
          const currentWord = `${cards[item.categoryID][item.cardID].word}|${cards[0][item.categoryID - 1]}`;
          if (localStorage.getItem(currentWord)) {
            const savedWord = JSON.parse(localStorage.getItem(currentWord));
            savedWord.train += 1;
            localStorage.setItem(currentWord, JSON.stringify(savedWord));
          } else {
            const wordObj = {
              train: 1,
              asked: 0,
              hit: 0,
              miss: 0,
            };
            localStorage.setItem(currentWord, JSON.stringify(wordObj));
          }
        }
      });
    });
  },

  trainDifficult(arr) {
    arr.forEach((key) => {
      this.properties.difficultWords.push(key);
    });
    this.init(-1);
  },

  reset() {
    this.properties.categoryItems = [];
    this.properties.backSide = false;
    this.properties.currentCategory = 0;
    this.properties.difficultWords = [];
  },
};

export default SingleCategory;
