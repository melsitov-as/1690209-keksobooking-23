
const validationExecution = () => {
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  let minPrice = 0;
  const MAX_PRICE = 1000000;
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
  const timeinSelect = document.querySelector('#timein');
  const timeinOptionDefault = timeinSelect.querySelector('option[value="12:00"]');
  const timeoutSelect = document.querySelector('#timeout');
  const timeoutOptionDefault = timeoutSelect.querySelector('option[value="12:00"]');
  // const roomNumberSelect = document.querySelector('#room_number');
  const featuresInputs = document.querySelectorAll('.features__checkbox');
  const descriptionTextarea = document.querySelector('#description');

  // Валидация длины заголовка
  const titleValidation = () => {
    const valueLength = titleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH ) {
      titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH } симв.`);
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
    } else if (price > MAX_PRICE) {
      priceInput.setCustomValidity(`Максимальное значение ${MAX_PRICE}`);
    } else {
      priceInput.setCustomValidity('');
    }
  };

  priceInput.addEventListener('input', priceValidation);


  //Валидация количества комнат и количества мест
  let roomsNumber = 1;
  let capacityValue = 3;
  const roomsNumberSelect = document.querySelector('#room_number');
  const capacitySelect = document.querySelector('#capacity');


  const changeMaxNumberOfGuestValue = (evt) => {
    roomsNumber = Number(evt.target.value);
    // console.log(roomsNumber);
    return roomsNumber;
  };

  roomsNumberSelect.addEventListener('change', changeMaxNumberOfGuestValue );

  const changeCapacityValue = (evt) => {
    capacityValue = Number(evt.target.value);
    // console.log(capacityValue);
    return capacityValue;
  };

  capacitySelect.addEventListener('change', changeCapacityValue);

  const capacityValidationExecution = () => {
    if (roomsNumber === 100 && capacityValue !== 0) {
    // console.log('Клик')
      capacitySelect.setCustomValidity('Помещения, в которых 100 комнат не предназначены для размещения гостей');
    }
  };
  capacityValidationExecution();

  // Валидация въезд - выезд

  const checkinChangeHandler = (evt) => {
    checkinTime = evt.target.value;
    for (let ii = 0; ii < checkoutOptionsList.length; ii++) {
      if (checkoutOptionsList[ii].value === checkinTime) {
        checkoutOptionsList[ii].selected = true;
      }
    }
  };

  const checkoutChangeHandler = (evt) => {
    checkoutTime = evt.target.value;
    for (let ii = 0; ii < checkinOptionsList.length; ii++) {
      if (checkinOptionsList[ii].value === checkoutTime) {
        checkinOptionsList[ii].selected = true;
      }
    }
  };

  checkin.addEventListener('change', checkinChangeHandler);
  checkout.addEventListener('change', checkoutChangeHandler);

  // Очищает форму

  const clearForm = () => {
    titleInput.value = '';
    addressInput.value = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;
    addressInput.placeholder = `${parseFloat((35.556161).toFixed(5))}, ${parseFloat((139.7580223).toFixed(5))}`;
    optionValueDefault.selected = true;
    priceInput.value = '';
    timeinOptionDefault.selected = true;
    timeoutOptionDefault.selected = true;
    // roomNumberOptionDefault.selected = true;
    // capacityOptionDefault.selected = true;
    for (const featureInput of featuresInputs) {
      featureInput.checked = false;
    }

    descriptionTextarea.value = '';
  };

  // Показыват попап об успешной отправке сообщения

  const showSuccessPopup = () => {
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
          clearForm();
        }
      }
    });

    document.addEventListener('click', () => {
      if (body.querySelector('.cloned-success-popup')) {
        body.removeChild(clonedSuccessPopupTemplate);
        clearForm();
      }

    });
  };

  // Показывает попап об ошибке в отправке сообщения

  const showErrorPopup = () => {
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

  const setUserFormSubmit = () => {
    adForm.addEventListener('submit', (event) => {
      event.preventDefault();
      titleValidation;
      priceValidation;
      capacityValidationExecution();

      // const formData = new FormData(event.target);

      // fetch(
      //   'https://23.javascript.pages.academy/keksobooking',
      //   {
      //     method: 'POST',
      //     body: formData,
      //   },
      // ).then((response) => {
      //   if (response.ok) {
      //     onSuccess();
      //   } else {
      //     onError();
      //   }
      // })
      //   .catch(() => {
      //     console.log('Ошибка в отправке')
      // });
    });
  };

  setUserFormSubmit(showSuccessPopup, showErrorPopup);

  // Навешивает на кнопку очистки очистку формы
  const resetForm = () => {
    adResetButton.addEventListener('click', () => {
      clearForm();
    });
  };

  resetForm();
};

export {validationExecution};
