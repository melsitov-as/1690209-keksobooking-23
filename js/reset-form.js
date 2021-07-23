import { mainPinMarker, mainPinMarkerLayer} from './map-markers.js';

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

const onClearForm = (mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData) => {
  titleInput.value = '';
  mainPinMarkerLayerData.clearLayers();
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarkerData = L.marker(
    {
      lat: MAIN_PIN_MARKER_DEFAULT_LAT_DATA,
      lng: MAIN_PIN_MARKER_DEFAULT_LNG_DATA,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarkerData.addTo(mainPinMarkerLayer);

  addressInput.setAttribute('value', `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`);

  onChangeAdressInputValueData(mainPinMarkerData);

  optionValueDefault.selected = true;
  priceInput.value = '';
  timeinOptionDefault.selected = true;
  timeoutOptionDefault.selected = true;
  roomNumberOptionDefault.selected = true;
  capacityOptionDefault.selected = true;
  featuresInputs.forEach(featureInput => featureInput.checked = false)

  descriptionTextarea.value = '';

  return mainPinMarker, mainPinMarkerLayer;
};

// Навешивает на кнопку очистки очистку формы
const resetForm = (mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData) => {
  adResetButton.addEventListener('click', () => {
    onClearForm(mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData);
  });
};

export {resetForm, onClearForm};
