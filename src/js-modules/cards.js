const cards = [
  ['Animals 1', 'Animals 2', 'Clothing', 'Emotions', 'Actions 1', 'Actions 2', 'Food', 'Nature'],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'cat.jpg',
      audioSrc: 'cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'chick.jpg',
      audioSrc: 'chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'chicken.jpg',
      audioSrc: 'chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'dog.jpg',
      audioSrc: 'dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'horse.jpg',
      audioSrc: 'horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'pig.jpg',
      audioSrc: 'pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'rabbit.jpg',
      audioSrc: 'rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'sheep.jpg',
      audioSrc: 'sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'bird.jpg',
      audioSrc: 'bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'fish1.jpg',
      audioSrc: 'fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'frog.jpg',
      audioSrc: 'frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жираф',
      image: 'giraffe.jpg',
      audioSrc: 'giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'lion.jpg',
      audioSrc: 'lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'mouse.jpg',
      audioSrc: 'mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'turtle.jpg',
      audioSrc: 'turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'dolphin.jpg',
      audioSrc: 'dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'skirt.jpg',
      audioSrc: 'skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'pants.jpg',
      audioSrc: 'pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'blouse.jpg',
      audioSrc: 'blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'dress.jpg',
      audioSrc: 'dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'boot.jpg',
      audioSrc: 'boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'shirt.jpg',
      audioSrc: 'shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'coat.jpg',
      audioSrc: 'coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'shoe.jpg',
      audioSrc: 'shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'sad.jpg',
      audioSrc: 'sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'angry.jpg',
      audioSrc: 'angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'happy.jpg',
      audioSrc: 'happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'tired.jpg',
      audioSrc: 'tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'surprised.jpg',
      audioSrc: 'surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'scared.jpg',
      audioSrc: 'scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'smile.jpg',
      audioSrc: 'smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'laugh.jpg',
      audioSrc: 'laugh.mp3',
    },
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'cry.jpg',
      audioSrc: 'cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'dance.jpg',
      audioSrc: 'dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'dive.jpg',
      audioSrc: 'dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'draw.jpg',
      audioSrc: 'draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'fish.jpg',
      audioSrc: 'fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'fly.jpg',
      audioSrc: 'fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'hug.jpg',
      audioSrc: 'hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'jump.jpg',
      audioSrc: 'jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'open.jpg',
      audioSrc: 'open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'play.jpg',
      audioSrc: 'play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'point.jpg',
      audioSrc: 'point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'ride.jpg',
      audioSrc: 'ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'run.jpg',
      audioSrc: 'run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'sing.jpg',
      audioSrc: 'sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'skip.jpg',
      audioSrc: 'skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'swim.jpg',
      audioSrc: 'swim.mp3',
    },
  ],
  [
    {
      word: 'bacon',
      translation: 'бекон',
      image: 'bacon.jpg',
      audioSrc: 'bacon.mp3',
    },
    {
      word: 'bread',
      translation: 'хлеб',
      image: 'bread.jpg',
      audioSrc: 'bread.mp3',
    },
    {
      word: 'chocolate',
      translation: 'шоколад',
      image: 'chocolate.jpg',
      audioSrc: 'chocolate.mp3',
    },
    {
      word: 'cake',
      translation: 'торт',
      image: 'cake.jpg',
      audioSrc: 'cake.mp3',
    },
    {
      word: 'soup',
      translation: 'суп',
      image: 'soup.jpg',
      audioSrc: 'soup.mp3',
    },
    {
      word: 'seafood',
      translation: 'морепродукты',
      image: 'seafood.jpg',
      audioSrc: 'seafood.mp3',
    },
    {
      word: 'pasta',
      translation: 'макароны',
      image: 'pasta.jpg',
      audioSrc: 'pasta.mp3',
    },
    {
      word: 'sandwich',
      translation: 'бутерброт',
      image: 'sandwich.jpg',
      audioSrc: 'sandwich.mp3',
    },
  ],
  [
    {
      word: 'sea',
      translation: 'море',
      image: 'sea.jpg',
      audioSrc: 'sea.mp3',
    },
    {
      word: 'desert',
      translation: 'пустыня',
      image: 'desert.jpg',
      audioSrc: 'desert.mp3',
    },
    {
      word: 'beach',
      translation: 'пляж',
      image: 'beach.jpg',
      audioSrc: 'beach.mp3',
    },
    {
      word: 'flower',
      translation: 'цветок',
      image: 'flower.jpg',
      audioSrc: 'flower.mp3',
    },
    {
      word: 'river',
      translation: 'река',
      image: 'river.jpg',
      audioSrc: 'river.mp3',
    },
    {
      word: 'forest',
      translation: 'лес',
      image: 'forest.jpg',
      audioSrc: 'forest.mp3',
    },
    {
      word: 'mountain',
      translation: 'гора',
      image: 'mountain.jpg',
      audioSrc: 'mountain.mp3',
    },
    {
      word: 'meadow',
      translation: 'луг',
      image: 'meadow.jpg',
      audioSrc: 'meadow.mp3',
    },
  ],
];

export default cards;
