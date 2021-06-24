
const minTitleLength = 30;
const maxTitleLength = 100;
let minPrice = 0;
const maxPrice = 1000000;
let maxNumberOfGuests = 1;
let guestsNumber = 3;
let checkinTime = '12:00';

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const roomsNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const titleInput = document.querySelector('#title');
const adForm = document.querySelector('.ad-form');
const checkin = document.querySelector('#timein');
const checkinOptionsList = checkin.querySelectorAll('option');
const checkout = document.querySelector('#timeout');
const checkoutOptionsList = checkout.querySelectorAll('option');


// Валидация длины заголовка
const titleValidation = () => {
  const valueLength = titleInput.value.length;

  if (valueLength < minTitleLength) {
    titleInput.setCustomValidity(`Ещё ${  minTitleLength - valueLength } симв.`);
  } else if (valueLength > maxTitleLength) {
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - maxTitleLength} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
};

titleInput.addEventListener('input', titleValidation);

// Валидация цены за ночь
const minPriceChangeHandler = (evt) => {
  if (evt.target.value === 'bungalow') {
    minPrice = 0;
    priceInput.placeholder = '0';
    priceInput.min = '0';
  } else if (evt.target.value === 'flat') {
    minPrice = 1000;
    priceInput.placeholder = '1000';
    priceInput.min = '1000';
  } else if (evt.target.value === 'hotel') {
    minPrice = 3000;
    priceInput.placeholder = '3000';
    priceInput.min = '3000';
  } else if (evt.target.value === 'house') {
    minPrice = 5000;
    priceInput.placeholder = '5000';
    priceInput.min = '5000';
  } else if (evt.target.value === 'palace'){
    minPrice = 10000;
    priceInput.placeholder = '10000';
    priceInput.min = '10000';
  }
};

typeSelect.addEventListener('change', minPriceChangeHandler);

const priceValidation = () => {
  const price = Number(priceInput.value);

  if (price < minPrice) {
    priceInput.setCustomValidity(`Минимальное значение ${minPrice}`);
  } else if (price > maxPrice) {
    priceInput.setCustomValidity(`Максимальное значение ${maxPrice}`);
  } else {
    priceInput.setCustomValidity('');
  }
};

priceInput.addEventListener('input', priceValidation);

//Валидация количества комнат и количества мест

const maxNumberOfGuestsHandler = (evt) => {
  if (evt.target.value === '1') {
    maxNumberOfGuests = 1;
  } else if (evt.target.value === '2') {
    maxNumberOfGuests = 2;
  } else if (evt.target.value === '3') {
    maxNumberOfGuests = 3;
  } else if (evt.target.value === '100') {
    maxNumberOfGuests = 0;
  }
  return maxNumberOfGuests;
};

roomsNumberSelect.addEventListener('change', maxNumberOfGuestsHandler);

const guestsNumberHandler = (evt) => {
  guestsNumber = Number(evt.target.value);
  return guestsNumber;
};

const capacityValidation  = () => {
  if (guestsNumber > maxNumberOfGuests) {
    capacitySelect.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат. Если выбрано 100 комнат, то количество гостей должно быть равно 0');
  } else {
    capacitySelect.setCustomValidity('');
  }
};

capacityValidation();

capacitySelect.addEventListener('change', (evt) => {
  guestsNumberHandler(evt);
  capacityValidation();
});

// Валидация въезд - выезд

const checkinChangeHandler = (evt) => {
  checkinTime = evt.target.value;
  for (let ii = 0; ii < checkoutOptionsList.length; ii++) {
    if (checkoutOptionsList[ii].value === checkinTime) {
      checkoutOptionsList[ii].selected = true;
    }
  }
}


checkin.addEventListener('change', checkinChangeHandler);



adForm.addEventListener('submit', () => {
  // event.preventDefault();
  titleValidation;
  priceValidation;
  capacityValidation;
});




export {titleValidation, titleInput, minPriceChangeHandler, typeSelect, priceValidation, priceInput, roomsNumberSelect, maxNumberOfGuestsHandler, guestsNumberHandler, capacityValidation, capacitySelect, checkinChangeHandler, checkin, adForm};

