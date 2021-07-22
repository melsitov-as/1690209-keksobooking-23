import { mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG} from './map-markers.js';

// Очищает форму
const adResetButton = document.querySelector('.ad-form__reset');
const addressInput = document.querySelector('#address');
const optionValueDefault = document.querySelector('#type').querySelector('option[value="flat"]');
const roomsNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const roomNumberOptionDefault = roomsNumberSelect.querySelector('option[value="1"]');
const capacityOptionDefault = capacitySelect.querySelector('option[value="3"]');
const timeinSelect = document.querySelector('#timein');
const timeinOptionDefault = timeinSelect.querySelector('option[value="12:00"]');
const timeoutSelect = document.querySelector('#timeout');
const timeoutOptionDefault = timeoutSelect.querySelector('option[value="12:00"]');
const featuresInputs = document.querySelectorAll('.features__checkbox');
const descriptionTextarea = document.querySelector('#description');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

const onClearForm = (mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue) => {
  titleInput.value = '';
  mainPinMarkerLayer.clearLayers();
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
    {
      lat: MAIN_PIN_MARKER_DEFAULT_LAT,
      lng: MAIN_PIN_MARKER_DEFAULT_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(mainPinMarkerLayer);

  addressInput.setAttribute('value', `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`);

  onChangeAdressInputValue(mainPinMarker);

  optionValueDefault.selected = true;
  priceInput.value = '';
  timeinOptionDefault.selected = true;
  timeoutOptionDefault.selected = true;
  roomNumberOptionDefault.selected = true;
  capacityOptionDefault.selected = true;
  for (const featureInput of featuresInputs) {
    featureInput.checked = false;
  }

  descriptionTextarea.value = '';

  return mainPinMarker, mainPinMarkerLayer;
};

// Навешивает на кнопку очистки очистку формы
const resetForm = (mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue) => {
  adResetButton.addEventListener('click', () => {
    onClearForm(mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue);
  });
};

export {resetForm, mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onClearForm};
