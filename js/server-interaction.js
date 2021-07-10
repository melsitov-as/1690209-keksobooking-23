//Получение данных для элементов
import {points, mapCanvas, createCustomPopup, generatePoints} from './generate-elements.js';

// Добавляет маркеры на карту

const createMarkerCoordinates = (point) => {
  const marker = L.marker ({
    lat: point.lat,
    lng: point.lng,
  });
  return marker;
};

const addPoints = () => {
  points.forEach((point) => {
    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    createMarkerCoordinates(point),
    {
      icon,
    },


    createMarkerCoordinates(point)
      .addTo(mapCanvas);
    createMarkerCoordinates(point)
      .addTo(mapCanvas)
      .bindPopup(
        createCustomPopup(point),
      );
  });
};


// Показывает сообщение об ошибке связи с сервером

const showGetErrorPopup = () => {
  const main = document.querySelector('main');
  const errorPopupBox = document.createElement('div');
  errorPopupBox.classList.add('error-box');
  errorPopupBox.textContent = 'Ошибка запроса! Сервер недоступен.';
  errorPopupBox.style.background = 'red';
  errorPopupBox.style.color = 'white';
  errorPopupBox.style.textAlign = 'center';
  errorPopupBox.style.fontFamily = 'Roboto';
  main.prepend(errorPopupBox);
};

fetch ('https://23.javascript.pages.academy/keksobooking/data')
  .then((responce) => responce.json())
  .then((data) => {
    generatePoints(data.slice(0,10));
    addPoints();
  });
// .catch(() => {showGetErrorPopup();
// });

// Фильтр объявлений
const housingTypeFilter = document.querySelector('#housing-type');

const adsTypeFilter = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((adsList) => {
      housingTypeFilter.addEventListener('change', (evt) => {
        const showedAds = adsList.filter((ad) => (ad.offer.type === evt.target.value));
        generatePoints(showedAds.slice(0, 10));
        addPoints();
      });
    });
};

// housingTypeFilter.addEventListener('change', (evt) => {
//   console.log(evt.target.value);
// });

// 1. если в полученных данных тип жилья совпадает, то добавлять элемент массива в генерацию маркеров
// 2. выводить в консоль полученные данные

export {addPoints, showGetErrorPopup, adsTypeFilter};

