const generateBaloon = (point) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offer = cardTemplate.cloneNode(true);
  const offerAvatar = offer.querySelector('.popup__avatar');
  const offerTitle = offer.querySelector('.popup__title');
  const offerAddress = offer.querySelector('.popup__text--address');
  const offerPrice = offer.querySelector('.popup__text--price');
  const offerType = offer.querySelector('.popup__type');
  const offerCapacity = offer.querySelector('.popup__text--capacity');
  const offerTime = offer.querySelector('.popup__text--time');
  const offerFeatures = offer.querySelector('.popup__features');
  const offerDescription = offer.querySelector('.popup__description');
  const offerPhotos = offer.querySelector('.popup__photos');
  const offerPhoto = offer.querySelector('.popup__photo');


  let roomsCount;
  let guestsCount;

  // Аватор в балуне
  if (point.author.avatar === 'img/avatars/default.png') {
    offerAvatar.style.display = 'none';
  } else {
    offerAvatar.src = point.author.avatar;
  }

  // Заголовок балуна
  offerTitle.textContent = point.offer.title;


  //Адрес в балуне
  offerAddress.textContent = point.offer.address;

  // Цена в балуне
  offerPrice.textContent = `${point.offer.price} ₽/ночь`;


  // Тип жилья
  switch(point.offer.type) {
    case 'flat':
      offerType.textContent = 'Квартира';
      break;
    case 'bungalow':
      offerType.textContent = 'Бунгало';
      break;
    case 'house':
      offerType.textContent = 'Дом';
      break;
    case 'palace':
      offerType.textContent = 'Дворец';
      break;
    case 'hotel':
      offerType.textContent = 'Отель';
      break;
  }

  // Количество комнат и гостей
  if (point.offer.rooms % 10 === 0 || (point.offer.rooms % 10 >= 5 && point.offer.rooms <= 9)) {
    roomsCount = 'комнат';
  } else if (point.offer.rooms % 10 === 1) {
    roomsCount = 'комната';
  } else if (point.offer.rooms % 10 >= 2 && point.offer.rooms <= 4) {
    roomsCount = 'комнаты';
  }

  if (point.offer.guests === '1') {
    guestsCount = 'гостя';
  } else {
    guestsCount = 'гостей';
  }

  offerCapacity.textContent = `${point.offer.rooms} ${roomsCount} для ${point.offer.guests} ${guestsCount}`;


  // Въезд - выезд
  offerTime.textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;


  // Удобства
  if (!point.offer.features) {
    offerFeatures.style.display = 'none';
  } else {
    const modifiers = (point.offer.features).map((feature) => `popup__feature--${feature}`);
    offerFeatures.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (modifiers.includes(modifier)) {
        item.remove();
      }
    });
  }

  // Описание
  if (!point.offer.description) {
    offerDescription.style.display = 'none';
  } else {
    offerDescription.textContent = point.offer.description;
  }

  //Фото жилья
  if (!point.offer.photos) {
    offerPhotos.style.display = 'none';
  } else {
    for (let ii = 0; ii < (point.offer.photos).length; ii++) {
      const clonedOfferPhoto = offerPhoto.cloneNode(true);
      clonedOfferPhoto.src = point.offer.photos[ii];
      offerPhotos.appendChild(clonedOfferPhoto);
    }
    offerPhoto.style.display = 'none';
  }

  return offer;
};

export {generateBaloon};

