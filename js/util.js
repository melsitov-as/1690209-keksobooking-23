// Возвращающает случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => {
  if (max - min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return Math.floor(Math.random() * (min - max) + min);
};

// Возвращающает случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomIntlimitDecimalPlaces = (min, max, limitSigns) => {
  if (max - min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(limitSigns);
  }

  return (Math.random() * (min - max) + min).toFixed(limitSigns);
};

document.write(typeof first,  ' ', typeof second);

export {getRandomInteger, getRandomIntlimitDecimalPlaces};
