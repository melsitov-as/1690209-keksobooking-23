
// Возвращающает случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => {
  if (max - min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return Math.floor(Math.random() * (min - max) + min);
};

// Возвращающает случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomIntlimitDecimalPlaces = (min, max, limitSigns) => {
  if (max - min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(limitSigns);
  }

  return (Math.random() * (min - max) + min).toFixed(limitSigns);
};

document.write(typeof first,  ' ', typeof second);

//Массив с адресами изображений для аваторов
const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

//Массив с заголовками объявлений
const TITLES = [
  'Заголовок-01',
  'Заголовок-02',
  'Заголовок-03',
  'Заголовок-04',
  'Заголовок-05',
  'Заголовок-06',
  'Заголовок-07',
  'Заголовок-08',
  'Заголовок-09',
  'Заголовок-10',
];

//Генерирует цену
const price = getRandomInteger(10000, 100000);

//Массив с типами жилья
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

// Генерирует количество комнат
const rooms = getRandomInteger(1, 10);

//Генерирует количество гостей
const guests = getRandomInteger(1, 20);

//Массив с временем заселения
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

//Массив с временем выселения
const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

//Массив со списком удобств
const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const generateNumberOfFeatures = () => {
  const numberOfFeatures = getRandomInteger(0, FEATURES_LIST.length);
  return numberOfFeatures;
};

const numberOfAvailableFeatures = generateNumberOfFeatures();

const generateRandomFeature = () => {
  const randomFeatureIndex = getRandomInteger(0, FEATURES_LIST.length - 1);
  const randomFeature = FEATURES_LIST[randomFeatureIndex];
  return randomFeature;
};

const availableFeatures = [generateRandomFeature()];

for (let ii = 1; ii <= numberOfAvailableFeatures; ii++) {
  const newValueFeature = generateRandomFeature();
  const compareFeatures = availableFeatures.some((value) => {value === newValueFeature;});
  if (compareFeatures === false) {
    availableFeatures.push(newValueFeature);
  }
}

//  Массив с описаниями помещений
const DESCRIPTIONS = [
  'Описание помещения - 01',
  'Описание помещения - 02',
  'Описание помещения - 03',
  'Описание помещения - 04',
  'Описание помещения - 05',
  'Описание помещения - 06',
  'Описание помещения - 07',
  'Описание помещения - 08',
  'Описание помещения - 09',
  'Описание помещения - 10',
];

// Массив с фотографиями
const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const generateNumberOfPhotos = () => {
  const numberOfPhotos = getRandomInteger(0, PHOTOS_LIST.length);
  return numberOfPhotos;
};

const numberOfAvailablePhotos = generateNumberOfPhotos();

const generateRandomPhoto = () => {
  const randomPhotoIndex = getRandomInteger(0, PHOTOS_LIST.length -1 );
  const randomPhoto = PHOTOS_LIST[randomPhotoIndex];
  return randomPhoto;
};

const availablePhotos = [generateRandomPhoto()];

for (let jj = 0; jj <= numberOfAvailablePhotos; jj++) {
  const newValuePhoto = generateRandomPhoto();
  const comparePhotos = availablePhotos.some((value) => {value === newValuePhoto;});
  if (comparePhotos === false) {
    availablePhotos.push(newValuePhoto);
  }
}

// Генерирует координату
const lat = +getRandomIntlimitDecimalPlaces(35.65000, 35.70000, 5);

const lng = +getRandomIntlimitDecimalPlaces(139.70000, 139.80000, 5);


//Генерирует адрес
const address = '$String(lat), $String(lng)';

//Генерирует заголовок объявления
const createAdAuthor = () => {
  const randomAuthorAvatarIndex = getRandomInteger(0, AVATARS.length - 1);

  return {
    author: AVATARS[randomAuthorAvatarIndex],
  };
  // Возвращает объект с пунктами объявления
};


//Генерирует информацию в объявлении
const createOffer = () => {
  const randomTitleIndex = getRandomInteger(0, TITLES.length - 1);
  const randomTypeIndex = getRandomInteger(0, TYPES.length - 1);
  const randomCheckinIndex = getRandomInteger(0, CHECKINS.length - 1);
  const randomCheckoutIndex = getRandomInteger(0, CHECKOUTS.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return {
    title: TITLES[randomTitleIndex],
    address: address,
    price: price,
    type: TYPES[randomTypeIndex],
    rooms: rooms,
    guests: guests,
    checkin: CHECKINS[randomCheckinIndex],
    checkout: CHECKOUTS[randomCheckoutIndex],
    features: availableFeatures,
    description: DESCRIPTIONS[randomDescriptionIndex],
    photos: availablePhotos,

  };
};

const createLocation = () => ({lat: lat, lng: lng});


const createAd = () => ({author: createAdAuthor(),offer: createOffer(),location: createLocation()});


new Array(10).fill(null).map(() => createAd());


