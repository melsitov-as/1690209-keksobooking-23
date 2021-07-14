const adForm = document.querySelector('.ad-form');
const adFormHeaderInput = adForm.querySelector('.ad-form-header__input');
const titleInput = adForm.querySelector('#title');
const addressInput = adForm.querySelector('#address');
const typeSelect = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const checkinSelect = adForm.querySelector('#timein');
const checkoutSelect = adForm.querySelector('#timeout');
const roomsNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
const featureCheckboxesList = adForm.querySelectorAll('.features__checkbox');
const description = adForm.querySelector('#description');
const lodgingPhoto = adForm.querySelector('#images');
const adFormSubmit = adForm.querySelector('.ad-form__submit');
const adFormReset = adForm.querySelector('.ad-form__reset');

const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
const mapCheckboxesList = mapFiltersForm.querySelectorAll('.map__checkbox');

const adFormEnableActive = () => {
  adFormHeaderInput.disabled = false;
  titleInput.disabled = false;
  addressInput.disabled = false;
  typeSelect.disables = false;
  priceInput.disabled = false;
  checkinSelect.disabled = false;
  checkoutSelect.disabled = false;
  roomsNumberSelect.disabled = false;
  capacitySelect.disabled = false;
  featureCheckboxesList.forEach((element) => {
    element.disabled = false;
  });
  description.disabled = false;
  lodgingPhoto.disabled = false;
  adFormSubmit.disabled = false;
  adFormReset.disabled = false;
  adForm.classList.remove('ad-form--disabled');
};

const mapFiltersEnableActive = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersList.forEach((element) => {
    element.disabled = false;
  });
  mapCheckboxesList.forEach((element)=>{
    element.disabled = false;
  });
};

export {adFormEnableActive, mapFiltersEnableActive};
