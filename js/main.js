import {mapCanvas, loadMap, addMainPinMarker, addressInput, mainPinMarker, changeMainPinMarkerCoordinates, addMarkersLayer, addMarkers, markerGroup } from './map-markers.js';

const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then(() => loadMap())
    .then(() => addMainPinMarker(mapCanvas))
    .then(() => changeMainPinMarkerCoordinates(mainPinMarker))
    .then(() => addMarkersLayer(mapCanvas))
    .then((data) => addMarkers(data, markerGroup))
  // .catch(() => showErrorPopup());
};

getServerData();
