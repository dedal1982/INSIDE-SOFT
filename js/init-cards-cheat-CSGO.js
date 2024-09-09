//=========================================КАТАЛОГ CS GO
const initialCardCSGO = [
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "AIM",
    price: "от 2000 ₽",
    props: "true",
    detect: "UNDETECTED",
    color: "#00ff38",
    id: "id-1",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "WH",
    price: "от 3000 ₽",
    props: "true",
    detect: "DETECTED",
    color: "red",
    id: "id-2",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "AIM",
    price: "от 4000 ₽",
    id: "id-3",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "WH",
    price: "от 5000 ₽",
    id: "id-4",
  },
];

//инициализация карточек CSGO
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("csGoTemplate").content;
const elements = document.querySelector(".cheaths__wrapper");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const idCheat = htmlElement.querySelector("#idCheat");
  const nameCheat = htmlElement.querySelector(".name");
  const gameImage = htmlElement.querySelector(".cheaths__image");
  const gamePrice = htmlElement.querySelector(".price");
  const cheathDetect = htmlElement.querySelector(".detect");

  if (item.id) {
    idCheat.id = item.id;
  }
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
