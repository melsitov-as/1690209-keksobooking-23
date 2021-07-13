// Показывает сообщение об ошибке связи с сервером

const showErrorPopup = () => {
  const main = document.querySelector('main');
  const errorPopupBox = document.createElement('div');
  errorPopupBox.classList.add('error-box');
  errorPopupBox.textContent = 'Ошибка запроса! Сервер недоступен.';
  errorPopupBox.style.background = 'red';
  errorPopupBox.style.color = 'white';
  errorPopupBox.style.textAlign = 'center';
  errorPopupBox.style.fontFamily = 'Roboto';
  main.prepend(errorPopupBox);
};

export {showErrorPopup};
