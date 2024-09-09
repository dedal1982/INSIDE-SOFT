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
    id: "cheathAim",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "WH",
    price: "от 3000 ₽",
    props: "true",
    detect: "DETECTED",
    color: "red",
    id: "cheathWh",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "AIM",
    price: "от 4000 ₽",
    id: "cheathAA",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
    name: "WH",
    price: "от 5000 ₽",
    id: "cheathBB",
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

const AIMCSGO = {
  imgFull:
    "https://avatars.mds.yandex.net/i?id=dc3d95d3be1bc91f25e17c83df292bf3a5deffaf-7753204-images-thumbs&n=13",
  mini1:
    "https://pic.rutubelist.ru/video/8d/39/8d3924788fd8a8a8254a7ef31a2c178e.png",
  mini2:
    "https://pic.rutubelist.ru/video/8c/99/8c99e0dccd0dd45a16bcfffc75e47e73.jpg",
  mini3:
    "https://3dnews.ru/assets/external/illustrations/2023/03/02/1082774/0.jpg",
  mini4:
    "https://pic.rutubelist.ru/video/d8/6e/d86e396e3cbef6f5247fbac3662a61fd.jpg",
  nameGame: "CS-GO",
  nameCheath: "AIM",
};

function cheathAim() {
  const imgFull = document.querySelector(".shop__images-full");
  const mini1 = document.querySelector(".mini-1");
  const mini2 = document.querySelector(".mini-2");
  const mini3 = document.querySelector(".mini-3");
  const mini4 = document.querySelector(".mini-4");
  const name = document.querySelector(".shop__game-name");
  const cheath = document.querySelector(".shop__game-cheat");

  name.textContent = AIMCSGO.nameGame;

  cheath.textContent = AIMCSGO.nameCheath;

  imgFull.src = AIMCSGO.imgFull;
  imgFull.alt = "Full image";

  mini1.src = AIMCSGO.mini1;
  mini1.alt = "Mini image 1";

  mini2.src = AIMCSGO.mini2;
  mini2.alt = "Mini image 2";

  mini3.src = AIMCSGO.mini3;
  mini3.alt = "Mini image 3";

  mini4.src = AIMCSGO.mini4;
  mini4.alt = "Mini image 4";
}

const idCheatFunc = document.querySelectorAll(".cheaths__item");
idCheatFunc.forEach((item) => {
  if (item.id === "cheathAim") {
    item.addEventListener("click", () => {
      window.location.href = "shop.html";
    });
  }
});
