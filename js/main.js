import {titleValidation, titleInput, minPriceChangeHandler, typeSelect, priceValidation, priceInput, roomsNumberSelect, maxNumberOfGuestsHandler, guestsNumberHandler, capacityValidation, capacitySelect, checkinChangeHandler, checkin, setUserFormSubmit, showSuccessPopup, showErrorPopup, resetForm} from './validation.js';
import {addPoints} from './server-interaction.js';


// Валидация инпута с заголовком
titleInput.addEventListener('input', titleValidation);

// Изменение цены
typeSelect.addEventListener('change', minPriceChangeHandler);

// Валидация инпута с ценой

priceInput.addEventListener('input', priceValidation);

// Изменения максимального количества гостей

roomsNumberSelect.addEventListener('change', maxNumberOfGuestsHandler);

// Валидация инпутов с количеством комнат и количеством гостей

capacityValidation();

capacitySelect.addEventListener('change', (evt) => {
  guestsNumberHandler(evt);
  capacityValidation();
});

// Изменения полей въезд - выезд

checkin.addEventListener('change', checkinChangeHandler);

// Показывает попап с сообщением об успешной отправке формы или об ошибке

setUserFormSubmit(showSuccessPopup, showErrorPopup);

// Очистка формы

resetForm();

// Добавление маркеров на карту

addPoints();

