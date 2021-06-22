// import {generateOffer} from './generate-elements.js';
// import {enableInactive} from './form.js';

import {titleValidation, titleInput, minPriceChangeHandler, typeSelect, priceValidation, priceInput, roomsNumberSelect, maxNumberOfGuestsHandler, guestsNumberHandler, capacityValidation, capacitySelect, adForm} from './validation.js';

titleInput.addEventListener('input', titleValidation);

typeSelect.addEventListener('change', minPriceChangeHandler);

priceInput.addEventListener('input', priceValidation);

roomsNumberSelect.addEventListener('change', maxNumberOfGuestsHandler);

capacityValidation();

capacitySelect.addEventListener('change', (evt) => {
  guestsNumberHandler(evt);
  capacityValidation();
});

adForm.addEventListener('submit', () => {
  // event.preventDefault();
  titleValidation;
  priceValidation;
  capacityValidation;
});
