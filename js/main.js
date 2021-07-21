
import { loadMap, mapCanvas, addMainPinMarker, addressInput, mainPinMarker, mainPinMarkerLayer, changeAdressInputValue, addMarkersLayer, markersGroup, addMarkers, changeMarkersByFilters, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG } from './map-markers.js';
import { onClearForm, resetForm } from './reset-form.js';
import {getValidation} from './validation.js'

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
    .then(() => getValidation(onClearForm, mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG))
    .then(() => resetForm(mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG))
  // .catch(() => showErrorPopup());

};

getServerData();


