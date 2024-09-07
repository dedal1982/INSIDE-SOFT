//=========================================КАТАЛОГ CS GO
const initialCardCSGO = [
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "CS GO",
    price: "от 2000 ₽",
    props: "true",
    detect: "UNDETECTED",
    color: "#00ff38",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "CS GO",
    price: "от 3000 ₽",
    props: "true",
    detect: "DETECTED",
    color: "red",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "CS GO",
    price: "от 4000 ₽",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "CS GO",
    price: "от 5000 ₽",
  },
];

//инициализация карточек CSGO
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("csGoTemplate").content;
const elements = document.querySelector(".cheaths__wrapper");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const nameCheat = htmlElement.querySelector(".name");
  const gameImage = htmlElement.querySelector(".cheaths__image");
  const gamePrice = htmlElement.querySelector(".price");
  const cheathDetect = htmlElement.querySelector(".detect");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.name) {
    nameCheat.textContent = item.name;
  }
  if (item.image) {
    gameImage.src = item.image;
  }
  if (item.price) {
    gamePrice.textContent = item.price;
  }
  if (item.props) {
    cheathDetect.classList.add("active");
    cheathDetect.textContent = item.detect;
    cheathDetect.style.background = item.color;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

initialCardCSGO.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
