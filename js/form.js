// const enableInactive = () => {
//   const adForm = document.querySelector('.ad-form');
//   const adFormHeaderInput = adForm.querySelector('.ad-form-header__input');
//   adFormHeaderInput.disabled = true;
//   const titleInput = adForm.querySelector('#title');
//   titleInput.disabled = true;
//   const addressInput = adForm.querySelector('#address');
//   addressInput.disabled = true;
//   const typeSelect = adForm.querySelector('#type');
//   typeSelect.disables = true;
//   const priceInput = adForm.querySelector('#price');
//   priceInput.disabled = true;
//   const checkinSelect = adForm.querySelector('#timein');
//   checkinSelect.disabled = true;
//   const checkoutSelect = adForm.querySelector('#timeout');
//   checkoutSelect.disabled = true;
//   const roomsNumberSelect = adForm.querySelector('#room_number');
//   roomsNumberSelect.disabled = true;
//   const capacitySelect = adForm.querySelector('#capacity');
//   capacitySelect.disabled = true;
//   const featureCheckboxesList = adForm.querySelectorAll('.features__checkbox');
//   featureCheckboxesList.forEach((element) => {
//     element.disabled = true;
//   });
//   const description = adForm.querySelector('#description');
//   description.disabled = true;
//   const lodgingPhoto = adForm.querySelector('#images');
//   lodgingPhoto.disabled = true;
//   const adFormSubmit = adForm.querySelector('.ad-form__submit');
//   adFormSubmit.disabled = true;
//   const adFormReset = adForm.querySelector('.ad-form__reset');
//   adFormReset.disabled = true;
//   adForm.classList.add('ad-form--disabled');

//   const mapFiltersForm = document.querySelector('.map__filters');
//   mapFiltersForm.classList.add('map__filters--disabled');
//   const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
//   mapFiltersList.forEach((element) => {
//     element.disabled = true;
//   });
//   const mapCheckboxesList = mapFiltersForm.querySelectorAll('.map__checkbox');
//   mapCheckboxesList.forEach((element)=>{
//     element.disabled = true;
//   });
// };

const enableActive = () => {
  const adForm = document.querySelector('.ad-form');
  const adFormHeaderInput = adForm.querySelector('.ad-form-header__input');
  adFormHeaderInput.disabled = false;
  const titleInput = adForm.querySelector('#title');
  titleInput.disabled = false;
  const addressInput = adForm.querySelector('#address');
  addressInput.disabled = false;
  const typeSelect = adForm.querySelector('#type');
  typeSelect.disables = false;
  const priceInput = adForm.querySelector('#price');
  priceInput.disabled = false;
  const checkinSelect = adForm.querySelector('#timein');
  checkinSelect.disabled = false;
  const checkoutSelect = adForm.querySelector('#timeout');
  checkoutSelect.disabled = false;
  const roomsNumberSelect = adForm.querySelector('#room_number');
  roomsNumberSelect.disabled = false;
  const capacitySelect = adForm.querySelector('#capacity');
  capacitySelect.disabled = false;
  const featureCheckboxesList = adForm.querySelectorAll('.features__checkbox');
  featureCheckboxesList.forEach((element) => {
    element.disabled = false;
  });
  const description = adForm.querySelector('#description');
  description.disabled = false;
  const lodgingPhoto = adForm.querySelector('#images');
  lodgingPhoto.disabled = false;
  const adFormSubmit = adForm.querySelector('.ad-form__submit');
  adFormSubmit.disabled = false;
  const adFormReset = adForm.querySelector('.ad-form__reset');
  adFormReset.disabled = false;
  adForm.classList.remove('ad-form--disabled');

  const mapFiltersForm = document.querySelector('.map__filters');
  mapFiltersForm.classList.remove('map__filters--disabled');
  const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
  mapFiltersList.forEach((element) => {
    element.disabled = false;
  });
  const mapCheckboxesList = mapFiltersForm.querySelectorAll('.map__checkbox');
  mapCheckboxesList.forEach((element)=>{
    element.disabled = false;
  });
};

export {enableActive};
