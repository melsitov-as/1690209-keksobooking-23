
import { adFormEnableActive, mapFiltersEnableActive } from './enable-active.js';
import { generateBaloon } from './generate-elements.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;

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

//  Работа с картой и маркерами
const operateMapMarkers = (serverData) => {
  const mapCanvas = L.map('map-canvas')
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

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  // Добавляет основной маркер
  const mainPinMarker = L.marker(
    {
      lat: 35.556161,
      lng: 139.7580223,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(mapCanvas);

  // Добавляет координаты в инпут с адресом

  addressInput.value = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;
  addressInput.placeholder = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;


  mainPinMarker.on('moveend', (evt) => {
    const mainPinMarkerAddress = evt.target.getLatLng();
    addressInput.value = `${parseFloat((mainPinMarkerAddress.lat).toFixed(5))}, ${parseFloat((mainPinMarkerAddress.lng).toFixed(5))}`;
    addressInput.placeholder = `${parseFloat((mainPinMarkerAddress.lat).toFixed(5))}, ${parseFloat((mainPinMarkerAddress.lng).toFixed(5))}`;
  });

  // Добавляет маркеры
  const markerGroup = L.layerGroup().addTo(mapCanvas);

  const addMarkers = (debounce((data) => {
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

  addMarkers(serverData);

  const changeMarkersByFilters = () => {


    mapFilters.addEventListener('change', () => {
      let filteredServerData = serverData;
      // Изменяем данные с сервера по фильтру "Тип жилья"
      housingTypeOptionsList.forEach((typeOption) => {
        if (typeOption.selected === true) {
          if (typeOption.value === 'any') {
            filteredServerData = serverData.filter((point) => point.offer.type);
          } else {
            filteredServerData = serverData.filter((point) => point.offer.type === typeOption.value);
          }
        }
      });

      // Изменяем данные с сервера по фильтру "Стоимость жилья"
      housingPriceOptionsList.forEach((housingPriceOption) => {
        if (housingPriceOption.selected === true) {
          if (housingPriceOption.value === 'any') {
            filteredServerData = filteredServerData.filter((point) => point.offer.price);
          } else if (housingPriceOption.value === 'low') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.price) < 10000);
          } else if (housingPriceOption.value === 'middle') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.price) >= 10000 && Number(point.offer.price) < 50000);
          } else {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.price) >= 50000);
          }
        }
      });

      // Изменяем данные с сервера по фильтру "Количество комнат"
      housingRoomsOptionsList.forEach((roomsOption) => {
        if (roomsOption.selected === true) {
          if (roomsOption.value === 'any') {
            filteredServerData = filteredServerData.filter((point) => point.offer.rooms);
          } else if (roomsOption.value === '1') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.rooms) === 1);
          } else if (roomsOption.value === '2') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.rooms) === 2);
          } else {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.rooms) === 3);
          }
        }
      });


      // Изменяем данные с сервера по фильтру "Количество гостей"
      housingGuestsOptionsList.forEach((guestsOption) => {
        if (guestsOption.selected === true) {
          if (guestsOption.value === 'any') {
            filteredServerData = filteredServerData.filter((point) => point.offer.guests);
          } else if (guestsOption.value === '0') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.guests) === 0);
          } else if (guestsOption.value === '1') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.guests) === 1);
          } else if (guestsOption.value === '2') {
            filteredServerData = filteredServerData.filter((point) => Number(point.offer.guests) === 2);
          }
        }
      });

      // Изменяем данные с сервера по фильтру "Удобства" с выбранными чекбоксами


      // Выбираем чекбокс "wifi" и добавляем фильтрацию убобств по "wifi"
      if (wifiCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('wifi') === -1);
      } else if (!wifiCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      // Выбираем чекбокс "dishwasher" и добавляем фильтрацию удобств по "dishwasher"

      if (dishwasherCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('dishwasher') === -1);
      } if (!dishwasherCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      // Выбираем чекбокс "parking" и добавляем фильтрацию удобств по "parking"
      if (parkingCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('parking') === -1);
      } if (!parkingCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      // Выбираем чекбокс "washer" и добавляем фильтрацию удобств по "washer"

      if (washerCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('washer') === -1);
      } if (!washerCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      // Выбираем чекбокс "elevator" и добавляем фильтрацию удобств по "elevator"
      if (elevatorCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('elevator') === -1);
      } if (!elevatorCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      // Выбираем чекбокс "conditioner" и добавляем фильтрацию удобств по "conditioner"
      if (conditionerCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
        filteredServerData = filteredServerData.filter((point) => (point.offer.features).indexOf('conditioner') === -1);
      } if (!conditionerCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }

      if (!wifiCheckbox.checked && !dishwasherCheckbox.checked && !parkingCheckbox.checked && !washerCheckbox.checked && !elevatorCheckbox.checked && !conditionerCheckbox.checked) {
        filteredServerData = filteredServerData.filter((point) => point.offer.features);
      }
      markerGroup.clearLayers();
      addMarkers(filteredServerData);
      mapFiltersEnableActive();
    });
  };
  changeMarkersByFilters(serverData);
};

export {operateMapMarkers};
