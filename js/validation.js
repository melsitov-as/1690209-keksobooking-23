import { mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG } from "./map-markers.js";


  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  let minPrice = 0;
  const MAX_PRICE = 1000000;
  let roomsNumber = 1;
  let capacityValue = 3;
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
  const adResetButton = document.querySelector('.ad-form__reset');
  const addressInput = document.querySelector('#address');
  const optionValueDefault = document.querySelector('#type').querySelector('option[value="flat"]');
  const roomsNumberSelect = document.querySelector('#room_number');
  const capacitySelect = document.querySelector('#capacity');
  const roomNumberOptionDefault = roomsNumberSelect.querySelector('option[value="1"]')
  const capacityOptionDefault = capacitySelect.querySelector('option[value="3"]')
  const timeinSelect = document.querySelector('#timein');
  const timeinOptionDefault = timeinSelect.querySelector('option[value="12:00"]');
  const timeoutSelect = document.querySelector('#timeout');
  const timeoutOptionDefault = timeoutSelect.querySelector('option[value="12:00"]');
  const featuresInputs = document.querySelectorAll('.features__checkbox');
  const descriptionTextarea = document.querySelector('#description');

  // Валидация длины заголовка
  const getValidation = (mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG) => {



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



  titleInput.addEventListener('input', onTitleValidation);

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

  priceInput.addEventListener('input', onPriceValidation);


  //Валидация количества комнат и количества мест




  const onChangeMaxNumberOfGuestValue = (evt) => {
    roomsNumber = Number(evt.target.value);
    // console.log(roomsNumber);
    return roomsNumber;
  };

  roomsNumberSelect.addEventListener('change', onChangeMaxNumberOfGuestValue );

  const onChangeCapacityValue = (evt) => {
    capacityValue = Number(evt.target.value);
    // console.log(capacityValue);
    return capacityValue;
  };


  capacitySelect.addEventListener('change', onChangeCapacityValue);

  const onCapacityValidationExecution = () => {
    if (roomsNumber === 100 && capacityValue !== 0) {
      capacitySelect.setCustomValidity('Помещения, в которых 100 комнат не предназначены для размещения гостей');
      console.log('Клик');
    } else if (roomsNumber < 100 && capacityValue === 0) {
      capacitySelect.setCustomValidity('В помещениях, в которых меньше 100 комнат обязательно надо указывать количество мест')
    } else if (roomsNumber < 100 && capacityValue > roomsNumber) {
      capacitySelect.setCustomValidity('Количество мест не должно превышать количество комнат')
    } else {
      capacitySelect.setCustomValidity('');
    }
    capacitySelect.reportValidity();
  };

  capacitySelect.addEventListener('change', (evt) => {
    onChangeCapacityValue(evt),
    onCapacityValidationExecution()
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

  // Очищает форму
  console.log('mainPinMarkerLayer', mainPinMarkerLayer);
  const onClearForm = (mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG) => {
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

    addressInput.value = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;

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
  };

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
      if (body.querySelector('.cloned-success-popup')) {
        if (evt.key === 'Escape' || evt.key === 'esc') {
          body.removeChild(clonedSuccessPopupTemplate);
          onClearForm();
        }
      }
    });

    document.addEventListener('click', () => {
      if (body.querySelector('.cloned-success-popup')) {
        body.removeChild(clonedSuccessPopupTemplate);
        onClearForm();
      }

    });
  };



  // Показывает попап об ошибке в отправке сообщения

  const onShowErrorPopup = () => {
    const clonedErrorPopupTemplate = errorPopupTemplate.cloneNode(true);
    clonedErrorPopupTemplate.classList.add('.cloned-error-popup');
    clonedErrorPopupTemplate.style.position = 'absolute';
    clonedErrorPopupTemplate.style.top = '50%';
    clonedErrorPopupTemplate.style.left = '50%';
    clonedErrorPopupTemplate.style.transform = 'translate(-50%, -50%)';
    body.appendChild(clonedErrorPopupTemplate);

    document.addEventListener('keydown', (evt) => {
      if (body.querySelector('.cloned-error-template')) {
        if (evt.key === 'Escape' || evt.key === 'esc') {
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

  const setUserFormSubmit = (onSuccess, onError) => {
    adForm.addEventListener('submit', (event) => {
        event.preventDefault();
        onTitleValidation;
        onPriceValidation;
        onCapacityValidationExecution();


      const formData = new FormData(event.target);

      fetch(
        'https://23.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      ).then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
      })
        .catch(() => {
          console.log('Ошибка в отправке')
      });
    });
  };

  setUserFormSubmit(onShowSuccessPopup, onShowErrorPopup);

  // Навешивает на кнопку очистки очистку формы
  const resetForm = (mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG) => {
    adResetButton.addEventListener('click', () => {
      onClearForm(mainPinMarker, mainPinMarkerLayer, MAIN_PIN_MARKER_DEFAULT_LAT, MAIN_PIN_MARKER_DEFAULT_LNG);
    });
  };

  resetForm();

}


export {getValidation}

// для коммита
