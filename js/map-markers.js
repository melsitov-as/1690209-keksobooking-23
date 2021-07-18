
import { adFormEnableActive, mapFiltersEnableActive } from './enable-active.js';
import { generateBaloon } from './generate-elements.js';
import {debounce} from './utils/debounce.js';

const addressInput = document.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingTypeOptionsList = housingType.querySelectorAll('option');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingPriceOptionsList = housingPrice.querySelectorAll('option');
const housingNumberOfRooms = mapFilters.querySelector('#housing-rooms');
const housingRoomsOptionsList = housingNumberOfRooms.querySelectorAll('option');
const housingNumberOfGuests = mapFilters.querySelector('#housing-guests');
const housingGuestsOptionsList = housingNumberOfGuests.querySelectorAll('option');
const housingFeatures = mapFilters.querySelector('#housing-features');
const wifiCheckbox = housingFeatures.querySelector('#filter-wifi');
const dishwasherCheckbox = housingFeatures.querySelector('#filter-dishwasher');
const parkingCheckbox = housingFeatures.querySelector('#filter-parking');
const washerCheckbox = housingFeatures.querySelector('#filter-washer');
const elevatorCheckbox = housingFeatures.querySelector('#filter-elevator');
const conditionerCheckbox = housingFeatures.querySelector('#filter-conditioner');

const RERENDER_DELAY = 500;
const MAIN_PIN_MARKER_DEFAULT_LAT = 35.556161;
const MAIN_PIN_MARKER_DEFAULT_LNG = 139.7580223;




let mapCanvas;
let mainPinMarker;

// Добавляет карту

const loadMap = () => {
  mapCanvas = L.map('map-canvas')
  .on('load', () => adFormEnableActive())
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

  return mapCanvas;
}

// Добавляет основной маркер
const addMainPinMarker = (mapCanvas) => {
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

    mainPinMarker = L.marker(
    {
      lat: MAIN_PIN_MARKER_DEFAULT_LAT,
      lng: MAIN_PIN_MARKER_DEFAULT_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(mapCanvas);
  return mainPinMarker;
}

//Добавляет координаты в инпут с адресом

 addressInput.value = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;


// Меняет координаты инпута с адресом по смене положения маркера

const changeMainPinMarkerCoordinates = (mainPinMarker) => {
  mainPinMarker.on('moveend', (evt) => {
    const mainPinMarkerAddress = evt.target.getLatLng();
    addressInput.value = `${parseFloat((mainPinMarkerAddress.lat).toFixed(5))}, ${parseFloat((mainPinMarkerAddress.lng).toFixed(5))}`;
  });
}

let markerGroup;

const addMarkersLayer = (mapCanvas) => {
  markerGroup = L.layerGroup().addTo(mapCanvas);

  return markerGroup;
}


// Добавляет маркеры

const addMarkers = (debounce((data, markerGroup) => {
  mapFiltersEnableActive();
  (data.slice(0, 10)).forEach((point) => {
    const markerIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const marker = L.marker(
      {
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        icon: markerIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(generateBaloon(point));
    });
  }, RERENDER_DELAY ));

export {mapCanvas, loadMap, addMainPinMarker, addressInput, mainPinMarker, changeMainPinMarkerCoordinates, addMarkersLayer, addMarkers, markerGroup}














  // // Добавляет маркеры




  // let comparedTypeValue = 'any';
  // let comparedPriceValue = 'any';
  // let comparedRoomsValue = 'any';
  // let comparedGuestsValue = 'any';

  // mapFilters.addEventListener('change', () => {
  //   let filteredServerData = serverData;

  //   // Получаем данные для фильтра для типа жилья
  //   housingTypeOptionsList.forEach((option) => {
  //     if (option.selected) {
  //       comparedTypeValue = option.value;
  //     }
  //   });

  //   // Получаем данные для фильтра по стоимости аренды
  //   housingPriceOptionsList.forEach((option) => {
  //     if (option.selected) {
  //       comparedPriceValue = option.value;
  //     }
  //   });

  //   // Получаем данные для фильтра по количеству комнат
  //   housingRoomsOptionsList.forEach((option) => {
  //     if (option.selected) {
  //       comparedRoomsValue = option.value;
  //     }
  //   });

  //   // Получаем данные для фильтра по количеству гостей
  //   housingGuestsOptionsList.forEach((option) => {
  //     if (option.selected) {
  //       comparedGuestsValue = option.value;
  //     }
  //   });

  //   //Фильтр для типа жилья
  //   const onTypeFilter = (point) => {
  //     if (comparedTypeValue === 'any') {
  //       return point.offer.type;
  //     } else {
  //       return point.offer.type === comparedTypeValue;
  //     }
  //   };

  //   // Фильтр для стоимости жилья
  //   const onPriceFilter = (point) => {
  //     if (comparedPriceValue === 'any') {
  //       return point.offer.price;
  //     } else if (comparedPriceValue === 'low') {
  //       return Number(point.offer.price) < 10000;
  //     } else if (comparedPriceValue === 'middle') {
  //       return Number(point.offer.price) >= 10000 && Number(point.offer.price) < 50000;
  //     } else {
  //       return Number(point.offer.price) >= 50000;
  //     }
  //   };

  //   //Фильтр для количества комнат
  //   const onRoomsFilter = (point) => {
  //     if (comparedRoomsValue === 'any') {
  //       return point.offer.rooms;
  //     } else if (comparedRoomsValue === '1') {
  //       return Number(point.offer.rooms) === 1;
  //     } else if (comparedRoomsValue === '2') {
  //       return Number(point.offer.rooms) === 2;
  //     } else {
  //       return Number(point.offer.rooms) === 3;
  //     }
  //   };

  //   // Фильтр для количества гостей
  //   const onGuestsFilter = (point) => {
  //     if (comparedGuestsValue === 'any') {
  //       return point.offer.guests;
  //     } else if (comparedGuestsValue === '0') {
  //       return Number(point.offer.guests) === 0;
  //     } else if (comparedGuestsValue === '1') {
  //       return Number(point.offer.guests) === 1;
  //     } else {
  //       return Number(point.offer.guests) === 2;
  //     }
  //   };

  //   //Фильтр по удобству wifi
  //   const onWifiFilter = (point) => {
  //     if (wifiCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('wifi') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //   //Фильтр по удобству dishwaher
  //   const onDishwasherFilter = (point) => {
  //     if (dishwasherCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('dishwasher') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //   // Фильтр по удобству parking
  //   const onParkingFilter = (point) => {
  //     if (parkingCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('parking') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //   // Фильтр по удобстству washer
  //   const onWasherFilter = (point) => {
  //     if (washerCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('washer') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //   // Фильтр по удобстству elevator
  //   const onElevatorFilter = (point) => {
  //     if (elevatorCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('elevator') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //    // Фильтр по удобстству conditioner
  //    const onConditionerFilter = (point) => {
  //     if (conditionerCheckbox.checked) {
  //       return point.offer.features && (point.offer.features).indexOf('conditioner') > -1;
  //     } else {
  //       return point.offer;
  //     }
  //   };

  //   // Функция фильтации
  //   const getFiltration = (point) => {
  //     onTypeFilter(point);
  //     onPriceFilter(point);
  //     onRoomsFilter(point);
  //     onGuestsFilter(point);
  //     onWifiFilter(point);
  //     onDishwasherFilter(point);
  //     onParkingFilter(point);
  //     onWasherFilter(point);
  //     onElevatorFilter(point);
  //     onConditionerFilter(point);

  //     return onTypeFilter(point) && onPriceFilter(point) && onRoomsFilter(point) &&  onGuestsFilter(point) && onWifiFilter(point) && onDishwasherFilter(point) && onParkingFilter(point) && onWasherFilter(point) &&  onElevatorFilter(point) && onConditionerFilter(point)
  //   }

  //   // Фильтрация

  //   filteredServerData = filteredServerData.filter(getFiltration);

  //   // Выводим маркеры
  //   console.log(filteredServerData)
  //   markerGroup.clearLayers();
  //   addMarkers(filteredServerData);
  // });


