import {titleValidation, titleInput, minPriceChangeHandler, typeSelect, priceValidation, priceInput, roomsNumberSelect, maxNumberOfGuestsHandler, guestsNumberHandler, capacityValidation, capacitySelect, checkinChangeHandler, checkin, setUserFormSubmit, showSuccessPopup, showErrorPopup, resetForm} from './validation.js';
import {addPoints} from './server-interaction.js';

titleInput.addEventListener('input', titleValidation);

typeSelect.addEventListener('change', minPriceChangeHandler);

priceInput.addEventListener('input', priceValidation);

roomsNumberSelect.addEventListener('change', maxNumberOfGuestsHandler);

capacityValidation();

capacitySelect.addEventListener('change', (evt) => {
  guestsNumberHandler(evt);
  capacityValidation();
});

checkin.addEventListener('change', checkinChangeHandler);


setUserFormSubmit(showSuccessPopup, showErrorPopup);

resetForm();

addPoints();
