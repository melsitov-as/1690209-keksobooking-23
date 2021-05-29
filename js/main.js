function getRandomIntInclusivePositive(min, max) {
  if (min > max) {
    return min, max;
  } else if (min === max) {
    return min, max;
  } else if (min < max) {
    min = Math.abs(Math.ceil(min));
    max = Math.abs(Math.floor(max));
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
}

getRandomIntInclusivePositive(5,10);


function getRandomInclusiveAfterDecimal (min, max, numbersAfterDecimal) {
  if (min > max) {
    return min, max;
  } else if (min === max) {
    return min, max;
  } else if (min < max) {
    min = Math.abs(Math.ceil(min));
    max = Math.abs(Math.floor(max));
    const randomNumber = Math.random() * (max - min + 1) + min; //Максимум и минимум включаются
    return parseFloat(randomNumber.toFixed(numbersAfterDecimal));
  }
}

getRandomInclusiveAfterDecimal(1, 20, 5);
