
let serverData;
const getServerData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((data) => serverData = data)
  // .catch(() => showErrorPopup());

  return serverData
};

getServerData();

export {getServerData, serverData};
