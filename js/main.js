import {generateOffer} from './generate-elements.js';
import {enableInactive} from './form.js';


// Валидация длины заголовка
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const titleInput = document.querySelector('#title');
const titleInputEvent = titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

});

// Валидация цены за ночь
let minPrice;
let MAX_PRICE = 1000000;

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');


typeSelect.addEventListener('change', (evt) => {
 console.log(evt.target.value);
    if (evt.target.value === 'bungalow') {
      minPrice = 0;
      priceInput.placeholder = '0';
      priceInput.min = '0';
    } else if (evt.target.value === 'flat') {
      minPrice = 1000;
      priceInput.placeholder = '1000';
      priceInput.min = '1000';
    } else if (evt.target.value === 'hotel') {
      minPrice= 3000;
      priceInput.placeholder = '3000';
      priceInput.min = '3000';
    } else if (evt.target.value === 'house') {
      minPrice = 5000;
      priceInput.placeholder = '5000';
      priceInput.min = '5000';
    } else if (evt.target.value === 'palace'){
      minPrice = 10000;
      priceInput.placeholder = '10000'
      priceInput.min = '10000';
    }
    console.log(minPrice);
})

const priceInputEvent = priceInput.addEventListener('input', () => {
  const price = Number(priceInput.value);

  if (price < minPrice) {
    priceInput.setCustomValidity(`Минимальное значение ${minPrice}`)
  } else if (price > MAX_PRICE) {
      priceInput.setCustomValidity(`Максимальное значение ${MAX_PRICE}`)
  } else {
    priceInput.setCustomValidity('');
  }
});

//Валидация количества комнат и количества мест
const roomsNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const capacityOptionsList = capacity.querySelectorAll('option');
let maxNumberOfGuests;

console.log(capacityOptionsList);

roomsNumberSelect.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    maxNumberOfGuests = 1;
  } else if (evt.target.value === '2') {
    maxNumberOfGuests = 2;
  } else if (evt.target.value === '3') {
    maxNumberOfGuests = 3;
  } else if (evt.target.value === '100') {
    maxNumberOfGuests = 0;
  }
  console.log(maxNumberOfGuests);
})



console.log(capacitySelect.validity);

capacitySelect.addEventListener('change', (evt) => {
  console.log(Number(evt.target.value));
  let guestsNumber = Number(evt.target.value);
  if (guestsNumber > maxNumberOfGuests) {
    console.log('Ошибка');
    capacitySelect.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат');
  }
})



// const cardTemplate = document.querySelector('#card').content;
// const mapCanvas = document.querySelector('#map-canvas');
//   //Сгенерировать объект с данными объявления
// const randomOffer = createOffer();
// console.log(randomOffer);

// // Сгенерировать аватар
// const randomAvatar = createAdAuthor();

// // Сгенерировать и сделать заголовок объявления

//   const randomOfferTitle = randomOffer.title;
//   console.log(randomOfferTitle);
//   console.log(cardTemplate);
//   const offerTitle = cardTemplate.querySelector(".popup__title");
//   console.log(offerTitle)
//   offerTitle.textContent = randomOfferTitle;

// //Адрес
// const randomOfferAddress = randomOffer.address;
// const offerAddress = cardTemplate.querySelector('.popup__text--address');
// if (randomOfferAddress) {
//   offerAddress.textContent = randomOfferAddress;
// } else {
//   offerAddress.style.display = 'none';
// }

// //Цена
// const randomOfferPrice = randomOffer.price;
// const offerPrice = cardTemplate.querySelector('.popup__text--price');
// if (randomOfferAddress) {
//   offerPrice.textContent = `${randomOfferPrice} ₽/ночь`;
// } else {
//   offerPrice.style.display = 'none';
// }

// // Тип жилья
// const offerLodgingType = cardTemplate.querySelector('.popup__type');
// if (randomOffer.type) {
//   switch(randomOffer.type) {
//     case randomOffer.type = 'flat':
//       offerLodgingType.textContent = 'Квартира';
//       break;
//     case randomOffer.type = 'bungalow':
//       offerLodgingType.textContent = 'Бунгало';
//       break;
//     case randomOffer.type = 'house':
//       offerLodgingType.textContent = 'Дом';
//       break;
//     case randomOffer.type = 'palace':
//       offerLodgingType.textContent = 'Дворец';
//       break;
//     case randomOffer.type = 'hotel':
//       offerLodgingType.textContent = 'Отель'
//       break;
//   }
// } else {
//   offerLodgingType.style.display = 'none';
// }

// // Количество гостей и комнат
// const numberOfRooms = randomOffer.rooms;
// const numberOfGuests = randomOffer.guests;
// const offerRoomsAndGuests = cardTemplate.querySelector('.popup__text--capacity');
// if (numberOfRooms && numberOfGuests) {
//   let roomsCount;
//   if (numberOfRooms % 10 === 0 || (numberOfRooms % 10 >= 5 && numberOfRooms <=9)) {
//     roomsCount = 'комнат'
//   } else if (numberOfRooms % 10 === 1) {
//       roomsCount = 'комната'
//   } else if (numberOfRooms % 10 >= 2 && numberOfRooms <= 4) {
//     roomsCount = 'комнаты'
//   }
//   offerRoomsAndGuests.textContent = `${numberOfRooms} ${roomsCount} для ${numberOfGuests} гостей`;
// } else {
//   offerRoomsAndGuests.style.display = 'none';
// }

// // Заезд и выезд
// const offerCheckin = randomOffer.checkin;
// const offerCheckout = randomOffer.checkout;
// const offerCheckinCheckout = cardTemplate.querySelector('.popup__text--time');
// if (offerCheckin && offerCheckout) {
// offerCheckinCheckout.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
// } else {
//   offerCheckinCheckout.style.display = 'none';
// }

// //Удобства
// const offerFeaturesList = randomOffer.features;
// const offerAvailableFeatures = cardTemplate.querySelector('.popup__features');
// if (offerFeaturesList) {
// const modifiers = offerFeaturesList.map((feature) => `popup__feature--${feature}`)
// const removeItem = offerAvailableFeatures.querySelectorAll('.popup__feature').forEach((item) => {
//     const modifier = item.classList[1];
//     if (modifiers.includes(modifier)) {
//       item.remove();
//     }
//   });
// } else {
//   offerAvailableFeatures.style.display = 'none';
// }
// // Описания
// const offerDescriptionText = randomOffer.description;
// const offerDescription = cardTemplate.querySelector('.popup__description');
// if (offerDescriptionText) {
// offerDescription.textContent = offerDescriptionText;
// } else {
//   offerDescription.style.display = 'none';
// }
// //Фотографии жилья
// const offerLodgingPhotosList = randomOffer.photos;
// const offerLodgingPhoto = cardTemplate.querySelector('.popup__photo');
// const offerLodgingPhotos = cardTemplate.querySelector('.popup__photos');
// if (offerLodgingPhotosList ) {
//   if (offerLodgingPhotosList.length === 1) {
//     offerLogingPhoto.src = offerLodgingPhotosList[0];
//   } else if (offerLodgingPhotosList.length > 1) {
//     offerLodgingPhoto.src = offerLodgingPhotosList[0];
//     for (let ii = 0; ii <= offerLodgingPhotosList.length - 2; ii ++) {
//       const lodgingPhoto = offerLodgingPhoto.cloneNode(true);
//       lodgingPhoto.src = offerLodgingPhotosList[ii + 1];
//       offerLodgingPhotos.appendChild(lodgingPhoto);
//     }
//   }
// } else {
//   offerLodgingPhotos.style.display = 'none';
// }

// //Аватар
// const offerAvatarPhoto = randomAvatar.author;
// console.log(offerAvatarPhoto)
// const offerAvatar = cardTemplate.querySelector('.popup__avatar')
// if (offerAvatarPhoto) {
//   offerAvatar.src = offerAvatarPhoto;
// } else {
//   offerAvatar.style.display = 'none';
// }

// mapCanvas.appendChild(cardTemplate)
// }
