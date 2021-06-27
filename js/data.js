import {getRandomInteger, getRandomIntlimitDecimalPlaces} from './util.js';

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
getRandomInteger(10000, 100000);

//Массив с типами жилья
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

// Генерирует количество комнат
getRandomInteger(1, 10);

//Генерирует количество гостей
getRandomInteger(1, 20);

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


const generateRandomFeature = () => {
  const randomFeatureIndex = getRandomInteger(0, FEATURES_LIST.length - 1);
  const randomFeature = FEATURES_LIST[randomFeatureIndex];
  return randomFeature;
};


const generateAvailableFeatures = () => {
  const availableFeatures = [generateRandomFeature()];
  const numberOfAvailableFeatures = generateNumberOfFeatures();
  for (let ii = 0; ii < numberOfAvailableFeatures; ii++) {
    const newValueFeature = generateRandomFeature();
    const compareFeatures = availableFeatures.some((value) => value === newValueFeature);
    if (compareFeatures === false) {
      availableFeatures.push(newValueFeature);
    }
  }
  return availableFeatures;
};


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


const generateRandomPhoto = () => {
  const randomPhotoIndex = getRandomInteger(0, PHOTOS_LIST.length -1 );
  const randomPhoto = PHOTOS_LIST[randomPhotoIndex];
  return randomPhoto;
};


const generateAvailablePhotos = () => {
  const availablePhotos = [generateRandomPhoto()];
  const numberOfAvailablePhotos = generateNumberOfPhotos();

  for (let jj = 0; jj < numberOfAvailablePhotos; jj++) {
    const newValuePhoto = generateRandomPhoto();
    const comparePhotos = availablePhotos.some((value) => value === newValuePhoto);
    if (comparePhotos === false) {
      availablePhotos.push(newValuePhoto);
    }
  }

  return availablePhotos;
};


// Генерирует координату
const generateLat = () => +getRandomIntlimitDecimalPlaces(35.65000, 35.70000, 5);


const generateLng = () => +getRandomIntlimitDecimalPlaces(139.70000, 139.80000, 5);


//Генерирует адрес
const address = `${generateLat()}, ${generateLng()}`;

//Генерирует заголовок объявления
const createAdAuthor = () => {
  const randomAuthorAvatarIndex = getRandomInteger(0, AVATARS.length - 1);

  return {
    author: AVATARS[randomAuthorAvatarIndex],
  };
  // Возвращает объект с пунктами объявления
};

const getRandomTitleIndex  = () => getRandomInteger(0, TITLES.length - 1);


//Генерирует информацию в объявлении
const createOffer = () => {
  getRandomTitleIndex();
  const randomTypeIndex = getRandomInteger(0, TYPES.length - 1);
  const randomCheckinIndex = getRandomInteger(0, CHECKINS.length - 1);
  const randomCheckoutIndex = getRandomInteger(0, CHECKOUTS.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return {
    title: TITLES[getRandomTitleIndex()],
    address: address,
    price: getRandomInteger(10000, 100000),
    type: TYPES[randomTypeIndex],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 20),
    checkin: CHECKINS[randomCheckinIndex],
    checkout: CHECKOUTS[randomCheckoutIndex],
    features: generateAvailableFeatures(),
    description: DESCRIPTIONS[randomDescriptionIndex],
    photos: generateAvailablePhotos(),
  };
};

const createLocation = () => ({lat: generateLat(), lng: generateLng()});

const createAd = () => ({author: createAdAuthor(),offer: createOffer(),location: createLocation()});

const adsArray = new Array(10).fill(null).map(() => createAd());

export {TITLES, getRandomTitleIndex, CHECKINS, CHECKOUTS, FEATURES_LIST, generateRandomFeature, DESCRIPTIONS, PHOTOS_LIST, generateNumberOfPhotos, generateLat, generateLng, address, createAdAuthor, createOffer, createLocation, adsArray};
