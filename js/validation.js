const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
let minPrice = 0;
let roomsNumber = 1;
let capacityValue = 1;
let checkinTime = '12:00';
let checkoutTime = '12:00';


const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const titleInput = document.querySelector('#title');
const adForm = document.querySelector('.ad-form');
const checkin = document.querySelector('#timein');
const checkout = document.querySelector('#timeout');
const checkinOptionsList = checkin.querySelectorAll('option');
const checkoutOptionsList = checkout.querySelectorAll('option');
const body = document.querySelector('body');
const successPopup = document.querySelector('#success');
const successPopupTemplate = successPopup.content.querySelector('.success');
const errorPopup = document.querySelector('#error');
const errorPopupTemplate = errorPopup.content.querySelector('.error');
const roomsNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');


// Валидация длины заголовка
const getValidation = (onClearForm, mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue) => {
  const onTitleValidation = () => {
    const valueLength = titleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH ) {
      titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH } симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
  };


  titleInput.addEventListener('input', () => {
    onTitleValidation();
    titleInput.reportValidity();
  });
  // Валидация цены за ночь
  const onMinPriceChangeHandle = (evt) => {
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

  typeSelect.addEventListener('change', onMinPriceChangeHandle);

  const onPriceValidation = () => {
    const price = Number(priceInput.value);

    if (price < minPrice) {
      priceInput.setCustomValidity(`Минимальное значение ${minPrice}`);
    } else if (price > MAX_PRICE) {
      priceInput.setCustomValidity(`Максимальное значение ${MAX_PRICE}`);
    } else {
      priceInput.setCustomValidity('');
    }
  };

  priceInput.addEventListener('input', () => {
    onPriceValidation();
    priceInput.reportValidity();});


  //Валидация количества комнат и количества мест
  const onChangeMaxNumberOfGuestsValue = (evt) => {
    roomsNumber = Number(evt.target.value);
    return roomsNumber;
  };


  const onChangeCapacityValue = (evt) => {
    capacityValue = Number(evt.target.value);
    return capacityValue;
  };

  capacitySelect.addEventListener('change', onChangeCapacityValue);

  const onCapacityValidationExecution = () => {
    if (roomsNumber === 100 && capacityValue !== 0) {
      capacitySelect.setCustomValidity('Помещения, в которых 100 комнат не предназначены для размещения гостей');
    } else if (roomsNumber < 100 && capacityValue === 0) {
      capacitySelect.setCustomValidity('В помещениях, в которых меньше 100 комнат обязательно надо указывать количество мест');
    } else if (roomsNumber < 100 && capacityValue > roomsNumber) {
      capacitySelect.setCustomValidity('Количество мест не должно превышать количество комнат');
    } else {
      capacitySelect.setCustomValidity('');
    }
    capacitySelect.reportValidity();
  };

  roomsNumberSelect.addEventListener('change', (evt) => {
    onChangeMaxNumberOfGuestsValue(evt);
    onCapacityValidationExecution();
  });

  capacitySelect.addEventListener('change', (evt) => {
    onChangeCapacityValue(evt);
    onCapacityValidationExecution();
  });

  // Валидация въезд - выезд

  const onCheckinChangeHandle = (evt) => {
    checkinTime = evt.target.value;
    for (let ii = 0; ii < checkoutOptionsList.length; ii++) {
      if (checkoutOptionsList[ii].value === checkinTime) {
        checkoutOptionsList[ii].selected = true;
      }
    }
  };

  const onCheckoutChangeHandle = (evt) => {
    checkoutTime = evt.target.value;
    for (let ii = 0; ii < checkinOptionsList.length; ii++) {
      if (checkinOptionsList[ii].value === checkoutTime) {
        checkinOptionsList[ii].selected = true;
      }
    }
  };

  checkin.addEventListener('change', onCheckinChangeHandle);
  checkout.addEventListener('change', onCheckoutChangeHandle);


  // Показыват попап об успешной отправке сообщения

  const onShowSuccessPopup = () => {
    const clonedSuccessPopupTemplate = successPopupTemplate.cloneNode(true);
    clonedSuccessPopupTemplate.classList.add('cloned-success-popup');
    clonedSuccessPopupTemplate.style.position = 'absolute';
    clonedSuccessPopupTemplate.style.top = '50%';
    clonedSuccessPopupTemplate.style.left = '50%';
    clonedSuccessPopupTemplate.style.transform = 'translate(-50%, -50%)';
    body.appendChild(clonedSuccessPopupTemplate);


    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || evt.key === 'esc') {
        if (document.body.contains(clonedSuccessPopupTemplate)) {
          body.removeChild(clonedSuccessPopupTemplate);
        }
      }
    });

    document.addEventListener('click', () => {
      if (document.body.contains(clonedSuccessPopupTemplate)) {
        body.removeChild(clonedSuccessPopupTemplate);
      }
    });
  };

  // Показывает попап об ошибке в отправке сообщения
  const onShowErrorPopup = () => {
    const clonedErrorPopupTemplate = errorPopupTemplate.cloneNode(true);
    clonedErrorPopupTemplate.classList.add('cloned-error-popup');
    clonedErrorPopupTemplate.style.position = 'absolute';
    clonedErrorPopupTemplate.style.top = '50%';
    clonedErrorPopupTemplate.style.left = '50%';
    clonedErrorPopupTemplate.style.transform = 'translate(-50%, -50%)';
    body.appendChild(clonedErrorPopupTemplate);

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || evt.key === 'esc') {
        if (document.body.contains(clonedErrorPopupTemplate)) {
          body.removeChild(clonedErrorPopupTemplate);
        }
      }
    });

    const errorButton = clonedErrorPopupTemplate.querySelector('.error__button');
    errorButton.addEventListener('click', () => {
      body.removeChild(clonedErrorPopupTemplate);
    });
  };


  // Событие при отправке формы

  const setUserFormSubmit = (onShowSuccessPopupData, onShowErrorPopupData, onClearFormData, mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData) => {
    adForm.addEventListener('submit', (event) => {
      event.preventDefault();
      onTitleValidation;
      onPriceValidation;
      onCapacityValidationExecution;


      const formData = new FormData(event.target);

      fetch(
        'https://23.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      ).then((response) => {
        if (response.ok) {
          onClearFormData(mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData);
          onShowSuccessPopupData(onClearFormData, mainPinMarkerData, mainPinMarkerLayerData, MAIN_PIN_MARKER_DEFAULT_LAT_DATA, MAIN_PIN_MARKER_DEFAULT_LNG_DATA, onChangeAdressInputValueData);
        } else {
          onShowErrorPopupData();
        }
      })
        .catch(() => {
          onShowErrorPopupData();
        });
    });
  };

  setUserFormSubmit(onShowSuccessPopup, onShowErrorPopup, onClearForm, mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG, onChangeAdressInputValue);

};

export {getValidation};
