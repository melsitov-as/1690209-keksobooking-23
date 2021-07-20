
import { loadMap, mapCanvas, addMainPinMarker, addressInput, mainPinMarker, changeAdressInputValue, addMarkersLayer, markersGroup, addMarkers, changeMarkersByFilters } from './map-markers.js';
import './validation.js'

let serverData;
const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((data) => serverData = data)
    .then(() => loadMap())
    .then(() => addMainPinMarker(mapCanvas))
    .then(() => changeAdressInputValue(mainPinMarker))
    .then(() => addMarkersLayer(mapCanvas))
    .then(() => addMarkers(serverData, markersGroup))
    .then(() => changeMarkersByFilters(serverData, markersGroup))
  // .catch(() => showErrorPopup());

};

getServerData();

