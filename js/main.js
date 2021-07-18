
import { loadMap, mapCanvas, addMainPinMarker, addressInput, mainPinMarker, changeAdressInputValue, addMarkersLayer, markersGroup, addMarkers  } from './map-markers.js';
import { getServerData, serverData } from './server-interaction.js'

getServerData();
loadMap();
addMainPinMarker(mapCanvas);
changeAdressInputValue(mainPinMarker);
addMarkersLayer(mapCanvas);
console.log(getServerData())
addMarkers(serverData, markersGroup);




