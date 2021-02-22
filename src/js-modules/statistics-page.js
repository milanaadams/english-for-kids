import cards from './cards';
import SingleCategory from './single-category';
import { appMode } from './switcher';
import setMenuActiveEl from './burger-menu';

const StatisticsTable = {
  properties: {
    container: null,
    headerElements: ['Word', 'Translation', 'Category', 'Train', 'Asked', 'Hit', 'Miss', 'Hit %'],
    words: [],
  },
  sorting: {
    sortKeyIndex: 2,
    direction: false,
  },

  init() {
    this.properties.container = document.querySelector('[data-content]');
    const scrollWrapper = document.createElement('div');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');

    scrollWrapper.className = 'scroll-wrapper';
    table.className = 'statistics-table';
    tableHead.className = 'statistics-table__head';
    tableBody.className = 'statistics-table__body';

    if (appMode) tableHead.classList.add('statistics-table__head--play');

    this.properties.headerElements.forEach((key, index) => {
      const tableHeadCell = document.createElement('th');
      tableHeadCell.className = 'statistics-table__head-item cell';
      tableHeadCell.textContent = key;
      tableHeadRow.appendChild(tableHeadCell);
      tableHeadCell.addEventListener('click', () => {
        this.sortTable(index);
      });
    });

    tableHead.appendChild(tableHeadRow);
    tableBody.appendChild(this.loadData());
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    scrollWrapper.appendChild(table);

    this.properties.container.appendChild(this.createControlBtns());
    this.properties.container.appendChild(scrollWrapper);
  },

  loadData() {
    const fragment = document.createDocumentFragment();
    if (this.properties.words.length === 0) {
      cards[0].forEach((key, index) => {
        const category = key;
        cards[index + 1].forEach((el) => {
          let wordStat;
          if (localStorage.getItem(`${el.word}|${key}`)) {
            const currentWordStorage = JSON.parse(localStorage.getItem(`${el.word}|${key}`));
            let hitPercentage;
            if (currentWordStorage.asked) {
              hitPercentage = ((currentWordStorage.hit * 100)
            / currentWordStorage.asked).toFixed();
            } else {
              hitPercentage = 0;
            }
            wordStat = [el.word, el.translation, category,
              currentWordStorage.train, currentWordStorage.asked,
              currentWordStorage.hit, currentWordStorage.miss, hitPercentage];
          } else {
            wordStat = [el.word, el.translation, category, 0, 0, 0, 0, 0];
          }
          this.properties.words.push(wordStat);
        });
      });
    }
    this.properties.words.forEach((word) => {
      const tableBodyRow = document.createElement('tr');
      tableBodyRow.className = 'statistics-table__body-row';
      word.forEach((wordData) => {
        const tableBodyCell = document.createElement('td');
        tableBodyCell.className = 'statistics-table__body-item cell';
        tableBodyCell.textContent = wordData;
        tableBodyRow.appendChild(tableBodyCell);
      });
      fragment.appendChild(tableBodyRow);
    });

    return fragment;
  },

  sortTable(columnIndex) {
    switch (columnIndex) {
      case 0:
      case 1:
      case 2:
        if (this.sorting.sortKeyIndex !== columnIndex) {
          this.properties.words.sort((a, b) => a[columnIndex].localeCompare(b[columnIndex]));
          this.sorting.sortKeyIndex = columnIndex;
          this.sorting.direction = true;
        } else if (this.sorting.direction) {
          this.properties.words.sort((a, b) => b[columnIndex].localeCompare(a[columnIndex]));
          this.sorting.direction = false;
        } else {
          this.properties.words.sort((a, b) => a[columnIndex].localeCompare(b[columnIndex]));
          this.sorting.direction = true;
        }
        break;
      default:
        if (this.sorting.sortKeyIndex !== columnIndex) {
          this.properties.words.sort((a, b) => b[columnIndex] - a[columnIndex]);
          this.sorting.sortKeyIndex = columnIndex;
          this.sorting.direction = true;
        } else if (this.sorting.direction) {
          this.properties.words.sort((a, b) => a[columnIndex] - b[columnIndex]);
          this.sorting.direction = false;
        } else {
          this.properties.words.sort((a, b) => b[columnIndex] - a[columnIndex]);
          this.sorting.direction = true;
        }
    }
    while (this.properties.container.children.length > 0) {
      this.properties.container.children[0].remove();
    }
    this.init();
  },

  createControlBtns() {
    const fragment = document.createDocumentFragment();
    const controls = document.createElement('div');
    const repeatWords = document.createElement('button');
    const resetStatistics = document.createElement('button');

    controls.className = 'controls';
    repeatWords.className = 'controls__btn controls__repeat-words-btn';
    resetStatistics.className = 'controls__btn controls__reset-btn';

    if (appMode) {
      repeatWords.classList.add('controls__btn--play');
      resetStatistics.classList.add('controls__btn--play');
    }

    repeatWords.textContent = 'Repeat Difficult Words';
    resetStatistics.textContent = 'Reset';

    controls.appendChild(repeatWords);
    controls.appendChild(resetStatistics);
    fragment.appendChild(controls);

    resetStatistics.addEventListener('click', () => {
      localStorage.clear();
      while (this.properties.container.children.length > 0) {
        this.properties.container.children[0].remove();
      }
      this.properties.words = [];
      this.sorting.sortKeyIndex = 2;
      this.sorting.direction = false;
      this.init();
    });

    repeatWords.addEventListener('click', () => this.repeatDifficalsWords());

    return fragment;
  },
  repeatDifficalsWords() {
    setMenuActiveEl('remove');
    const missedWords = [];
    let firstEightWords = [];
    const missedWordsToRepeat = [];
    this.properties.words.forEach((arr) => {
      if (arr[6] > 0) {
        missedWords.push(arr);
      }
    });
    if (missedWords.length > 8) {
      missedWords.forEach((key) => {
        const missedPercentage = ((key[6] * 100) / key[4]).toFixed(2);
        key.push(missedPercentage);
      });
      missedWords.sort((a, b) => b[8] - a[8]);
      firstEightWords = missedWords.slice(0, 8);
    } else {
      firstEightWords = missedWords;
    }
    firstEightWords.forEach((key) => {
      const categoryNum = cards[0].indexOf(key[2]) + 1;
      const wordIndex = cards[categoryNum].findIndex((el) => el.word === key[0]);
      const currentCardObj = cards[categoryNum][wordIndex];
      currentCardObj.categoryID = categoryNum;
      currentCardObj.cardID = wordIndex;
      missedWordsToRepeat.push(currentCardObj);
    });
    while (this.properties.container.children.length > 0) {
      this.properties.container.children[0].remove();
    }
    this.properties.words = [];
    this.sorting.sortKeyIndex = 2;
    this.sorting.direction = false;
    SingleCategory.trainDifficult(missedWordsToRepeat);
  },
};

export default StatisticsTable;
