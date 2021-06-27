import {adsArray} from './data.js';
import {enableActive} from './form.js';


// const cardTemplate = document.querySelector('#card').content;
// const offer = document.createDocumentFragment();


// const generateOfferTitle = (index) => {
//   const offerTitle = cardTemplate.querySelector('.popup__title');
//   const clonedOfferTitle = offerTitle.cloneNode(true);
//   clonedOfferTitle.textContent = adsArray[index].offer.title;
//   return clonedOfferTitle;
// };

// const generateOfferAddress = (index) => {
//   const offerAddress = cardTemplate.querySelector('.popup__text--address');
//   const clonedOfferAddress = offerAddress.cloneNode(true);
//   clonedOfferAddress.textContent = adsArray[index].offer.address;
//   return clonedOfferAddress;
// };

// const generateOfferPrice = (index) => {
//   const offerPrice = cardTemplate.querySelector('.popup__text--price');
//   const clonedOfferPrice = offerPrice.cloneNode(true);
//   clonedOfferPrice.textContent = `${adsArray[index].offer.price} ₽/ночь`;
//   return clonedOfferPrice;
// };

// const generateOfferLogging = (index) => {
//   const offerLodgingType = cardTemplate.querySelector('.popup__type');
//   const clonedOfferLodgingType = offerLodgingType.cloneNode(true);
//   switch(adsArray[index].offer.type) {
//     case adsArray[index].offer.type = 'flat':
//       clonedOfferLodgingType.textContent = 'Квартира';
//       break;
//     case adsArray[index].offer.type = 'bungalow':
//       clonedOfferLodgingType.textContent = 'Бунгало';
//       break;
//     case adsArray[index].offer.type = 'house':
//       clonedOfferLodgingType.textContent = 'Дом';
//       break;
//     case adsArray[index].offer.type = 'palace':
//       clonedOfferLodgingType.textContent = 'Дворец';
//       break;
//     case adsArray[index].offer.type = 'hotel':
//       clonedOfferLodgingType.textContent = 'Отель';
//       break;
//   }
//   return clonedOfferLodgingType;
// };

// const generateNumberOfRoomsGuests = (index) => {
//   const numberOfRooms = adsArray[index].offer.rooms;
//   const numberOfGuests = adsArray[index].offer.guests;
//   const offerRoomsGuests = cardTemplate.querySelector('.popup__text--capacity');
//   const clonedOfferRoomsGuests = offerRoomsGuests.cloneNode(true);
//   let roomsCount;
//   if (numberOfRooms % 10 === 0 || (numberOfRooms % 10 >= 5 && numberOfRooms <= 9)) {
//     roomsCount = 'комнат';
//   } else if (numberOfRooms % 10 === 1) {
//     roomsCount = 'комната';
//   } else if (numberOfRooms % 10 >= 2 && numberOfRooms <= 4) {
//     roomsCount = 'комнаты';
//   }
//   clonedOfferRoomsGuests.textContent = `${numberOfRooms} ${roomsCount} для ${numberOfGuests} гостей`;
//   return clonedOfferRoomsGuests;
// };

// const generateOfferCheckinCheckout = (index) => {
//   const checkinCheckout = cardTemplate.querySelector('.popup__text--time');
//   const clonedCheckinCheckout = checkinCheckout.cloneNode(true);
//   const checkin = adsArray[index].offer.checkin;
//   const checkout = adsArray[index].offer.checkout;
//   clonedCheckinCheckout.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
//   return clonedCheckinCheckout;
// };

// const generateFeatures = (index) => {
//   const offerFeatures = cardTemplate.querySelector('.popup__features');
//   const clonedOfferFeatures = offerFeatures.cloneNode(true);
//   const offerFeaturesList = adsArray[index].offer.features;
//   const modifiers = offerFeaturesList.map((feature) => `popup__feature--${feature}`);
//   clonedOfferFeatures.querySelectorAll('.popup__feature').forEach((item) => {
//     const modifier = item.classList[1];
//     if (modifiers.includes(modifier)) {
//       item.remove();
//     }
//   });
//   return clonedOfferFeatures;
// };

// const generateDescription = (index) => {
//   const offerDescription = cardTemplate.querySelector('.popup__description');
//   const clonedOfferDescription = offerDescription.cloneNode(true);
//   const offerDescriptionText = adsArray[index].offer.description;
//   clonedOfferDescription.textContent = offerDescriptionText;

//   return clonedOfferDescription;
// };

// const generateLodgingPhotos = (index) => {
//   const offerLodgingPhotosList = adsArray[index].offer.photos;
//   const offerLodgingPhotos = cardTemplate.querySelector('.popup__photos');
//   const offerLodgingPhoto = cardTemplate.querySelector('.popup__photo');
//   const clonedOfferLodgingPhotos = offerLodgingPhotos.cloneNode(true);
//   for (let ii = 0; ii < offerLodgingPhotosList.length; ii++) {
//     const clonedOfferLodgingPhoto = offerLodgingPhoto.cloneNode(true);
//     clonedOfferLodgingPhoto.src = offerLodgingPhotosList[ii];
//     clonedOfferLodgingPhotos.appendChild(clonedOfferLodgingPhoto);
//   }
//   const clonedPhotosList = clonedOfferLodgingPhotos.querySelectorAll('.popup__photo');
//   clonedOfferLodgingPhotos.removeChild(clonedPhotosList[0]);

//   return clonedOfferLodgingPhotos;
// };


// const generateAvatar = (index) => {
//   const offerAvatar = cardTemplate.querySelector('.popup__avatar');
//   const avatarAddress = adsArray[index].author.author;
//   offerAvatar.src = avatarAddress;
//   const clonedOfferAvatar = offerAvatar.cloneNode(true);
//   return clonedOfferAvatar;
// };

// const generateOffer = (index) => {
//   for (index = 0; index < adsArray.length; index++) {
//     if (generateAvatar(index) !== null) {
//       offer.appendChild(generateAvatar(index));
//     }
//     if (generateOfferTitle(index) !== null) {
//       offer.appendChild(generateOfferTitle(index));
//     }
//     if (generateOfferAddress(index) !== null) {
//       offer.appendChild(generateOfferAddress(index));
//     }
//     if (generateOfferPrice(index) !== null) {
//       offer.appendChild(generateOfferPrice(index));
//     }
//     if (generateOfferLogging(index) !== null) {
//       offer.appendChild(generateOfferLogging(index));
//     }
//     if (generateNumberOfRoomsGuests(index) !== null) {
//       offer.appendChild(generateNumberOfRoomsGuests(index));
//     }
//     if (generateOfferCheckinCheckout(index) !== null) {
//       offer.appendChild(generateOfferCheckinCheckout(index));
//     }
//     if (generateFeatures(index) !== null) {
//       offer.appendChild(generateFeatures(index));
//     }
//     if (generateDescription(index) !== null) {
//       offer.appendChild(generateDescription(index));
//     }
//     if (generateLodgingPhotos(index) !== null) {
//       offer.appendChild(generateLodgingPhotos(index));
//     }
//   }
//   }
//   generateOffer(10)
//   mapContainer.appendChild(offer);


const generatePointsOnMap = () => {
  const mapCanvas = L.map('map-canvas')
    .on('load', () => {
      enableActive();
    })

    .setView({
      lat: 35.556161,
      lng: 139.7580223,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapCanvas);

  const tokyoCenterAddress = {
    lat: 35.556161,
    lng: 139.7580223,
  };

  const mainPinIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: tokyoCenterAddress.lat,
      lng: tokyoCenterAddress.lng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(mapCanvas);

  const addressInput = document.querySelector('#address');
  let mainPinMarkerAddress = `lat: ${tokyoCenterAddress.lat}, lng: ${tokyoCenterAddress.lng}`;

  addressInput.placeholder = `lat: ${parseFloat((tokyoCenterAddress.lat).toFixed(5))}, lng: ${parseFloat((tokyoCenterAddress.lng).toFixed(5))}`;

  mainPinMarker.on('moveend', (evt) => {
    mainPinMarkerAddress = evt.target.getLatLng();
    addressInput.placeholder = `lat: ${parseFloat((mainPinMarkerAddress.lat).toFixed(5))}, lng: ${parseFloat((mainPinMarkerAddress.lng).toFixed(5))}`;
  });


  const points = [];
  const generatePoints = (index) => {
    for (index = 0; index < adsArray.length; index++) {
      points.push({
        lat: adsArray[index].location.lat,
        lng: adsArray[index].location.lng,
        avatar: adsArray[index].author.author,
        title: adsArray[index].offer.title,
        address: `lat: ${parseFloat((adsArray[index].location.lat).toFixed(5))}, lng: ${parseFloat((adsArray[index].location.lng).toFixed(5))}`,
        price: `${adsArray[index].offer.price} ₽/ночь`,
        type: adsArray[index].offer.type,
        rooms: adsArray[index].offer.rooms,
        guests: adsArray[index].offer.guests,
        checkin: adsArray[index].offer.checkin,
        checkout: adsArray[index].offer.checkout,
        features: adsArray[index].offer.features,
        description: adsArray[index].offer.description,
        photos: adsArray[index].offer.photos,
      });
    }

    return points;
  };

  generatePoints();

  const createCustomPopup = (point) => {
    const popupTemplate = document.querySelector('#card').content;
    const popupAvatar = popupTemplate.querySelector('.popup__avatar');
    const clonedPopupAvatar = popupAvatar.cloneNode(true);
    const offer = document.createDocumentFragment();
    clonedPopupAvatar.src = point.avatar;
    offer.appendChild(clonedPopupAvatar);

    const popupTitle = popupTemplate.querySelector('.popup__title');
    const clonedPopupTitle = popupTitle.cloneNode(true);
    clonedPopupTitle.textContent = point.title;
    offer.appendChild(clonedPopupTitle);

    const popupAddress = popupTemplate.querySelector('.popup__text--address');
    const clonedPopupAddress = popupAddress.cloneNode(true);
    clonedPopupAddress.textContent = point.address;
    offer.appendChild(clonedPopupAddress);

    const popupPrice = popupTemplate.querySelector('.popup__text--price');
    const clonedPopupPrice = popupPrice.cloneNode(true);
    clonedPopupPrice.textContent = point.price;
    offer.appendChild(clonedPopupPrice);

    const popupType = popupTemplate.querySelector('.popup__type');
    const clonedPopupType = popupType.cloneNode(true);
    switch(point.type) {
      case point.type = 'flat':
        clonedPopupType.textContent = 'Квартира';
        break;
      case point.type = 'bungalow':
        clonedPopupType.textContent = 'Бунгало';
        break;
      case point.type = 'house':
        clonedPopupType.textContent = 'Дом';
        break;
      case point.type = 'palace':
        clonedPopupType.textContent = 'Дворец';
        break;
      case point.type = 'hotel':
        clonedPopupType.textContent.textContent = 'Отель';
        break;
    }
    offer.appendChild(clonedPopupType);

    const popupCapacity = popupTemplate.querySelector('.popup__text--capacity');
    const clonedPopupCapacity = popupCapacity.cloneNode(true);
    let roomsCount;
    if (point.rooms % 10 === 0 || (point.rooms % 10 >= 5 && point.rooms <= 9)) {
      roomsCount = 'комнат';
    } else if (point.rooms % 10 === 1) {
      roomsCount = 'комната';
    } else if (point.rooms % 10 >= 2 && point.rooms <= 4) {
      roomsCount = 'комнаты';
    }
    clonedPopupCapacity.textContent = `${point.rooms} ${roomsCount} для ${point.guests} гостей`;
    offer.appendChild(clonedPopupCapacity);

    const popupCheckinCheckout = popupTemplate.querySelector('.popup__text--time');
    const clonedPopupCheckinCheckout = popupCheckinCheckout.cloneNode(true);
    clonedPopupCheckinCheckout.textContent = `Заезд после ${point.checkin}, выезд до ${point.checkout}`;
    offer.appendChild(clonedPopupCheckinCheckout);

    const popupFeatures = popupTemplate.querySelector('.popup__features');
    const clonedPopupFeatures = popupFeatures.cloneNode(true);
    const offerFeaturesList = point.features;
    const modifiers = offerFeaturesList.map((feature) => `popup__feature--${feature}`);

    clonedPopupFeatures.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (modifiers.includes(modifier)) {
        item.remove();
      }
    });
    offer.appendChild(clonedPopupFeatures);

    const popupDescription = popupTemplate.querySelector('.popup__description');
    const clonedPopupDescription = popupDescription.cloneNode(true);
    clonedPopupDescription.textContent = point.description;
    offer.appendChild(clonedPopupDescription);

    const popupPhotosList = point.photos;
    const popupPhotos = popupTemplate.querySelector('.popup__photos');
    const popupPhoto = popupTemplate.querySelector('.popup__photo');
    const clonedPopupPhotos = popupPhotos.cloneNode(true);
    for (let ii = 0; ii < popupPhotosList.length; ii++) {
      const clonedPopupPhoto = popupPhoto.cloneNode(true);
      clonedPopupPhoto.src = popupPhotosList[ii];
      clonedPopupPhotos.appendChild(clonedPopupPhoto);
    }

    const clonedPopupPhotosList = clonedPopupPhotos.querySelectorAll('.popup__photo');
    clonedPopupPhotos.removeChild(clonedPopupPhotosList[0]);

    offer.appendChild(clonedPopupPhotos);

    return offer;
  };

  points.forEach((point) => {
    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat: point.lat,
      lng: point.lng,
    },
    {
      icon,
    },
    );

    marker
      .addTo(mapCanvas)
      .bindPopup(
        createCustomPopup(point),
      );
  });
};

export {generatePointsOnMap};
