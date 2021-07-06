//Получение данных для элементов
import {points, mapCanvas, createCustomPopup, generatePoints} from './generate-elements.js';

const addPoints = () => {
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
      .addTo(mapCanvas);
    marker
      .addTo(mapCanvas)
      .bindPopup(
        createCustomPopup(point),
      );
  });
};

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
    generatePoints(data);
    addPoints();
  })
  .catch(() => {showGetErrorPopup();
  });


export {addPoints, showGetErrorPopup};

