
// Сгенерировать балун
const generateBaloon = (point) => {
  const cardTemplate = document.querySelector('#card').content;
  const offer = document.createDocumentFragment();

  // Аватар
  const offerAvatar = cardTemplate.querySelector('.popup__avatar');
  const avatarAddress = point.author.avatar;
  offerAvatar.src = avatarAddress;
  const clonedOfferAvatar = offerAvatar.cloneNode(true);
  offer.appendChild(clonedOfferAvatar);

  // Заголовок балуна
  const offerTitle = cardTemplate.querySelector('.popup__title');
  const clonedOfferTitle = offerTitle.cloneNode(true);
  clonedOfferTitle.textContent = point.offer.title;
  offer.appendChild(clonedOfferTitle);

  // Адрес в балуне
  const offerAddress = cardTemplate.querySelector('.popup__text--address');
  const clonedOfferAddress = offerAddress.cloneNode(true);
  clonedOfferAddress.textContent = point.offer.address;
  offer.appendChild(clonedOfferAddress);

  // Цена в балуне
  const offerPrice = cardTemplate.querySelector('.popup__text--price');
  const clonedOfferPrice = offerPrice.cloneNode(true);
  clonedOfferPrice.textContent = `${point.offer.price} ₽/ночь`;
  offer.appendChild(clonedOfferPrice);

  // Тип жилья
  const offerLodgingType = cardTemplate.querySelector('.popup__type');
  const clonedOfferLodgingType = offerLodgingType.cloneNode(true);
  switch(point.offer.type) {
    case point.offer.type = 'flat':
      clonedOfferLodgingType.textContent = 'Квартира';
      break;
    case point.offer.type = 'bungalow':
      clonedOfferLodgingType.textContent = 'Бунгало';
      break;
    case point.offer.type = 'house':
      clonedOfferLodgingType.textContent = 'Дом';
      break;
    case point.offer.type = 'palace':
      clonedOfferLodgingType.textContent = 'Дворец';
      break;
    case point.offer.type = 'hotel':
      clonedOfferLodgingType.textContent = 'Отель';
      break;
  }
  offer.appendChild(clonedOfferLodgingType);

  // Количество комнат и гостей
  const numberOfRooms = point.offer.rooms;
  const numberOfGuests = point.offer.guests;
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
  offer.appendChild(clonedOfferRoomsGuests);

  // Въезд -выезд
  const checkinCheckout = cardTemplate.querySelector('.popup__text--time');
  const clonedCheckinCheckout = checkinCheckout.cloneNode(true);
  const checkin = point.offer.checkin;
  const checkout = point.offer.checkout;
  clonedCheckinCheckout.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  offer.appendChild(clonedCheckinCheckout);

  // Удобства
  const offerFeatures = cardTemplate.querySelector('.popup__features');
  const clonedOfferFeatures = offerFeatures.cloneNode(true);
  const offerFeaturesList = point.offer.features;
  if (offerFeaturesList) {
    const modifiers = offerFeaturesList.map((feature) => `popup__feature--${feature}`);
    clonedOfferFeatures.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (modifiers.includes(modifier)) {
        item.remove();
      }
    });
    offer.appendChild(clonedOfferFeatures);
  }

  // Описание
  const offerDescription = cardTemplate.querySelector('.popup__description');
  const clonedOfferDescription = offerDescription.cloneNode(true);
  const offerDescriptionText = point.offer.description;
  clonedOfferDescription.textContent = offerDescriptionText;
  offer.appendChild(clonedOfferDescription);

  // Фото жилья
  const offerLodgingPhotosList = point.offer.photos;
  const offerLodgingPhotos = cardTemplate.querySelector('.popup__photos');
  const offerLodgingPhoto = cardTemplate.querySelector('.popup__photo');
  const clonedOfferLodgingPhotos = offerLodgingPhotos.cloneNode(true);
  if (offerLodgingPhotosList) {
    for (let ii = 0; ii < offerLodgingPhotosList.length; ii++) {
      const clonedOfferLodgingPhoto = offerLodgingPhoto.cloneNode(true);
      clonedOfferLodgingPhoto.src = offerLodgingPhotosList[ii];
      clonedOfferLodgingPhotos.appendChild(clonedOfferLodgingPhoto);
    }
    const clonedPhotosList = clonedOfferLodgingPhotos.querySelectorAll('.popup__photo');
    clonedOfferLodgingPhotos.removeChild(clonedPhotosList[0]);
    offer.appendChild(clonedOfferLodgingPhotos);
  }

  return offer;
};


export {generateBaloon};
