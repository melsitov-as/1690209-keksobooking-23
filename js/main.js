
import { loadMap, mapCanvas, addMainPinMarker, mainPinMarker, mainPinMarkerLayer, onChangeAdressInputValue, addMarkersLayer, markersGroup, addMarkers, changeMarkersByFilters, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG } from './map-markers.js';
import { onClearForm, resetForm} from './reset-form.js';
import {getValidation} from './validation.js';

let serverData;
const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((data) => serverData = data)
    .then(() => loadMap())
    .then(() => addMainPinMarker(mapCanvas))
    .then(() => onChangeAdressInputValue(mainPinMarker))
    .then(() => addMarkersLayer(mapCanvas))
    .then(() => addMarkers(serverData, markersGroup))
    .then(() => changeMarkersByFilters(serverData, markersGroup))
  // .catch(() => showErrorPopup());
};

getServerData();
resetForm(mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue)
getValidation(mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue)


