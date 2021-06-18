import {adsArray} from './data.js';

const cardTemplate = document.querySelector('#card').content;


const generateOfferTitle = (index) => {
  const offerTitle = cardTemplate.querySelector('.popup__title');
  const clonedOfferTitle = offerTitle.cloneNode(true);
  clonedOfferTitle.textContent = adsArray[index].offer.title;
  return clonedOfferTitle;
};

const generateOfferAddress = (index) => {
  const offerAddress = cardTemplate.querySelector('.popup__text--address');
  const clonedOfferAddress = offerAddress.cloneNode(true);
  clonedOfferAddress.textContent = adsArray[index].offer.address;
  return clonedOfferAddress;
};

const generateOfferPrice = (index) => {
  const offerPrice = cardTemplate.querySelector('.popup__text--price');
  const clonedOfferPrice = offerPrice.cloneNode(true);
  clonedOfferPrice.textContent = `${adsArray[index].offer.price} ₽/ночь`;
  return clonedOfferPrice;
};

const generateOfferLogging = (index) => {
  const offerLodgingType = cardTemplate.querySelector('.popup__type');
  const clonedOfferLodgingType = offerLodgingType.cloneNode(true);
  switch(adsArray[index].offer.type) {
    case adsArray[index].offer.type = 'flat':
      clonedOfferLodgingType.textContent = 'Квартира';
      break;
    case adsArray[index].offer.type = 'bungalow':
      clonedOfferLodgingType.textContent = 'Бунгало';
      break;
    case adsArray[index].offer.type = 'house':
      clonedOfferLodgingType.textContent = 'Дом';
      break;
    case adsArray[index].offer.type = 'palace':
      clonedOfferLodgingType.textContent = 'Дворец';
      break;
    case adsArray[index].offer.type = 'hotel':
      clonedOfferLodgingType.textContent = 'Отель';
      break;
  }
  return clonedOfferLodgingType;
};

const generateNumberOfRoomsGuests = (index) => {
  const numberOfRooms = adsArray[index].offer.rooms;
  const numberOfGuests = adsArray[index].offer.guests;
  const offerRoomsGuests = cardTemplate.querySelector('.popup__text--capacity');
  const clonedOfferRoomsGuests = offerRoomsGuests.cloneNode(true);
  let roomsCount;
  if (numberOfRooms % 10 === 0 || (numberOfRooms % 10 >= 5 && numberOfRooms <= 9)) {
    roomsCount = 'комнат';
  } else if (numberOfRooms % 10 === 1) {
    roomsCount = 'комната';
  } else if (numberOfRooms % 10 >= 2 && numberOfRooms <= 4) {
    roomsCount = 'комнаты';
  }
  clonedOfferRoomsGuests.textContent = `${numberOfRooms} ${roomsCount} для ${numberOfGuests} гостей`;
  return clonedOfferRoomsGuests;
};

const generateOfferCheckinCheckout = (index) => {
  const checkinCheckout = cardTemplate.querySelector('.popup__text--time');
  const clonedCheckinCheckout = checkinCheckout.cloneNode(true);
  const checkin = adsArray[index].offer.checkin;
  const checkout = adsArray[index].offer.checkout;
  clonedCheckinCheckout.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  return clonedCheckinCheckout;
};

const generateFeatures = (index) => {
  const offerFeatures = cardTemplate.querySelector('.popup__features');
  const clonedOfferFeatures = offerFeatures.cloneNode(true);
  const offerFeaturesList = adsArray[index].offer.features;
  const modifiers = offerFeaturesList.map((feature) => `popup__feature--${feature}`);
  clonedOfferFeatures.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (modifiers.includes(modifier)) {
      item.remove();
    }
  });
  return clonedOfferFeatures;
};

const generateDescription = (index) => {
  const offerDescription = cardTemplate.querySelector('.popup__description');
  const clonedOfferDescription = offerDescription.cloneNode(true);
  const offerDescriptionText = adsArray[index].offer.description;
  clonedOfferDescription.textContent = offerDescriptionText;

  return clonedOfferDescription;
};

const generateLodgingPhotos = (index) => {
  const offerLodgingPhotosList = adsArray[index].offer.photos;
  const offerLodgingPhotos = cardTemplate.querySelector('.popup__photos');
  const offerLodgingPhoto = cardTemplate.querySelector('.popup__photo');
  const clonedOfferLodgingPhotos = offerLodgingPhotos.cloneNode(true);
  for (let ii = 0; ii < offerLodgingPhotosList.length; ii++) {
    const clonedOfferLodgingPhoto = offerLodgingPhoto.cloneNode(true);
    clonedOfferLodgingPhoto.src = offerLodgingPhotosList[ii];
    clonedOfferLodgingPhotos.appendChild(clonedOfferLodgingPhoto);
  }
  const clonedPhotosList = clonedOfferLodgingPhotos.querySelectorAll('.popup__photo');
  clonedOfferLodgingPhotos.removeChild(clonedPhotosList[0]);

  return clonedOfferLodgingPhotos;
};


const generateAvatar = (index) => {
  const offerAvatar = cardTemplate.querySelector('.popup__avatar');
  const avatarAddress = adsArray[index].author.author;
  offerAvatar.src = avatarAddress;
  const clonedOfferAvatar = offerAvatar.cloneNode(true);
  return clonedOfferAvatar;
};

const mapCanvas = document.querySelector('#map-canvas');
const offer = document.createDocumentFragment();

const generateOffer = (index) => {
  if (generateAvatar(index) !== null) {
    offer.appendChild(generateAvatar(index));
  }
  if (generateOfferTitle(index) !== null) {
    offer.appendChild(generateOfferTitle(index));
  }
  if (generateOfferAddress(index) !== null) {
    offer.appendChild(generateOfferAddress(index));
  }
  if (generateOfferPrice(index) !== null) {
    offer.appendChild(generateOfferPrice(index));
  }
  if (generateOfferLogging(index) !== null) {
    offer.appendChild(generateOfferLogging(index));
  }
  if (generateNumberOfRoomsGuests(index) !== null) {
    offer.appendChild(generateNumberOfRoomsGuests(index));
  }
  if (generateOfferCheckinCheckout(index) !== null) {
    offer.appendChild(generateOfferCheckinCheckout(index));
  }
  if (generateFeatures(index) !== null) {
    offer.appendChild(generateFeatures(index));
  }
  if (generateDescription(index) !== null) {
    offer.appendChild(generateDescription(index));
  }
  if (generateLodgingPhotos(index) !== null) {
    offer.appendChild(generateLodgingPhotos(index));
  }
  mapCanvas.appendChild(offer);
};

export{generateOffer, generateAvatar, generateOfferTitle, generateOfferAddress, generateOfferPrice, generateOfferLogging, generateNumberOfRoomsGuests, generateOfferCheckinCheckout, generateFeatures, generateDescription, generateLodgingPhotos};
