
import {operateMapMarkers} from './map-markers.js';
import { validationExecution } from './validation.js';


// 1. Получить данные с сервера

const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((data) => operateMapMarkers(data))
    .then(() => validationExecution());
  // .catch(() => showErrorPopup());
};

getServerData();

