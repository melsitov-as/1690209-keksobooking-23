// import {generateOffer} from './generate-elements.js';
import {enableActive} from './form.js';

import {titleValidation, titleInput, minPriceChangeHandler, typeSelect, priceValidation, priceInput, roomsNumberSelect, maxNumberOfGuestsHandler, guestsNumberHandler, capacityValidation, capacitySelect, checkinChangeHandler, checkin, adForm} from './validation.js';

import {mapCanvas, tokyoCenterAddress, mainPinIcon, mainPinMarker, points, generatePoints, createCustomPopup} from './generate-elements.js';




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

adForm.addEventListener('submit', () => {
  // event.preventDefault();
  titleValidation;
  priceValidation;
  capacityValidation;
});











