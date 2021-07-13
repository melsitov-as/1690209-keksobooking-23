
import {enableActive} from './enable-active.js';
import {mapMarkersExe} from './map-markers.js';
import { validation } from './validation.js';
import {showErrorPopup} from './error-popup.js';

// 1. Получить данные с сервера
let serverData;
const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((data) => serverData = data)
    .then(() => enableActive())
    .then(() => mapMarkersExe(serverData))
    .then(() => validation())
    .catch(() => showErrorPopup());
};

getServerData();
