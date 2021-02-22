import SingleCategory from './single-category';
import СategoriesPage from './categories-page';
import cards from './cards';
import setMenuActiveEl from './burger-menu';

const PlayGround = {
  button: {
    started: false,
    element: null,
  },
  container: null,
  currentMixedCardsInx: [],
  currentCard: null,
  wrongAnswers: 0,
  resultsField: null,
  firstAttemp: true,

  init() {
    this.container = document.querySelector('[data-content]');
    const playControls = document.createElement('div');
    this.button.element = document.createElement('button');

    playControls.className = 'play-controls';
    this.button.element.className = 'play-controls__btn';

    this.button.element.innerHTML = 'start game';

    playControls.appendChild(this.button.element);
    this.container.appendChild(playControls);

    this.button.element.addEventListener('click', () => {
      if (!this.button.started) {
        this.button.started = !this.button.started;
        this.button.element.innerHTML = '<i class = "fas fa-sync-alt"></i>';
        this.button.element.animate([
          { width: '130px' }, { width: '85px' }, { width: '55px' },
        ],
        { duration: 500 });
        this.button.element.style.width = '55px';

        this.startGame();
      } else {
        const activeCard = SingleCategory.properties.categoryItems[this.currentCard];
        const audioElement = new Audio(`./assets/${cards[activeCard.categoryID][activeCard.cardID].audioSrc}`);
        audioElement.play();
      }
    });
  },

  startGame() {
    this.resultsField = document.createElement('div');
    this.resultsField.className = 'results-field';
    this.container.appendChild(this.resultsField);

    this.randomizeCards();
    this.playNextCard();
    this.getHitOrMiss();
  },

  randomizeCards() {
    let i = 0;
    const cardsCount = SingleCategory.properties.categoryItems.length;
    while (i < cardsCount) {
      const tempNum = Math.floor(Math.random() * cardsCount);
      if (!this.currentMixedCardsInx.includes(tempNum)) {
        this.currentMixedCardsInx.push(tempNum);
        i += 1;
      }
    }
  },

  playNextCard() {
    this.currentCard = this.currentMixedCardsInx.pop();
    const activeCard = SingleCategory.properties.categoryItems[this.currentCard];
    const audioElement = new Audio(`./assets/${cards[activeCard.categoryID][activeCard.cardID].audioSrc}`);
    setTimeout(() => {
      audioElement.play();
    }, 1000);
    this.recordStatistics('asked');
  },

  getHitOrMiss() {
    SingleCategory.properties.categoryItems.forEach((key, index) => {
      key.element.addEventListener('click', () => {
        if (index === this.currentCard) {
          key.element.classList.add('disabled');
          const star = document.createElement('i');
          star.className = 'fas fa-star results-field__star correct';
          this.resultsField.prepend(star);
          const audioSuccess = new Audio('./assets/correct.mp3');
          audioSuccess.play();
          if (this.firstAttemp) this.recordStatistics('hit');
          else this.firstAttemp = true;
          this.currentCard = null;
          if (this.currentMixedCardsInx.length > 0) {
            this.playNextCard();
          } else {
            setTimeout(() => {
              this.finishGame();
            }, 1000);
          }
        } else {
          const star = document.createElement('i');
          star.className = 'fas fa-star results-field__star incorrect';
          this.resultsField.prepend(star);
          const audioError = new Audio('./assets/error.mp3');
          audioError.play();
          this.wrongAnswers += 1;
          if (this.firstAttemp) this.recordStatistics('miss');
          this.firstAttemp = false;
        }
      });
    });
  },

  recordStatistics(event) {
    const activeCard = SingleCategory.properties.categoryItems[this.currentCard];
    const currentWord = `${cards[activeCard.categoryID][activeCard.cardID].word}|${cards[0][activeCard.categoryID - 1]}`;
    if (localStorage.getItem(currentWord)) {
      const savedWord = JSON.parse(localStorage.getItem(currentWord));
      savedWord[event] += 1;
      localStorage.setItem(currentWord, JSON.stringify(savedWord));
    } else {
      const wordObj = {
        train: 0, asked: 0, hit: 0, miss: 0,
      };
      wordObj[event] += 1;
      localStorage.setItem(currentWord, JSON.stringify(wordObj));
    }
  },

  finishGame() {
    while (this.container.children.length > 0) this.container.children[0].remove();
    this.loadResults();
  },

  loadResults() {
    const results = document.createElement('div');
    const resultImg = document.createElement('img');
    const resultsMessage = document.createElement('p');

    results.className = 'results';
    resultImg.className = 'results__img';
    resultsMessage.className = 'results__message';

    results.appendChild(resultImg);
    results.appendChild(resultsMessage);
    this.container.appendChild(results);

    if (this.wrongAnswers === 0) {
      resultImg.src = './assets/win.png';
      resultsMessage.textContent = 'You win!';
      const audioElement = new Audio('./assets/success.mp3');
      audioElement.play();
    } else {
      const mistakesCount = document.createElement('p');
      mistakesCount.className = 'results__mistakes-count';
      mistakesCount.innerHTML = `Mistakes count: ${this.wrongAnswers}`;
      this.container.appendChild(mistakesCount);

      resultImg.src = './assets/lose.png';
      resultsMessage.textContent = 'You lose!';

      const audioElement = new Audio('./assets/failure.mp3');
      audioElement.play();
    }

    setTimeout(() => {
      while (this.container.children.length > 0) this.container.children[0].remove();
      this.resetGameStat();
      СategoriesPage.init();
      setMenuActiveEl('Main');
    }, 3000);
  },

  resetGameStat() {
    this.button.started = false;
    this.button.element = null;
    this.currentMixedCardsInx = [];
    this.currentCard = null;
    this.wrongAnswers = 0;

    SingleCategory.properties.categoryItems = [];
  },
};

export default PlayGround;
