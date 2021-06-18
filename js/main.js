import {getRandomInteger, getRandomIntlimitDecimalPlaces} from './util.js';
import {AVATARS, TITLES, price, TYPES, rooms, guests, CHECKINS, CHECKOUTS, FEATURES_LIST, generateNumberOfFeatures, numberOfAvailableFeatures, generateRandomFeature, availableFeatures, DESCRIPTIONS, PHOTOS_LIST, generateNumberOfPhotos, numberOfAvailablePhotos, generateRandomPhoto, availablePhotos, lat, lng, address, createAdAuthor, createOffer, createLocation, adsArray} from './data.js';
import {generateOffer, generateAvatar, generateOfferTitle, generateOfferAddress, generateOfferPrice, generateOfferLogging, generateNumberOfRoomsGuests, generateOfferCheckinCheckout, generateFeatures, generateDescription, generateLodgingPhotos} from './generate-elements.js'


console.log(adsArray);
generateOffer(0);


















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









