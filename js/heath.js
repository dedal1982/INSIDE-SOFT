const WHCSGO = {
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
  nameCheath: "WH",
};

function displayImages(item) {
  const imgFull = document.querySelector(".shop__images-full");
  const mini1 = document.querySelector(".mini-1");
  const mini2 = document.querySelector(".mini-2");
  const mini3 = document.querySelector(".mini-3");
  const mini4 = document.querySelector(".mini-4");
  const name = document.querySelector(".shop__game-name");
  const cheath = document.querySelector(".shop__game-cheat");

  name.textContent = WHCSGO.nameGame;

  cheath.textContent = WHCSGO.nameCheath;

  imgFull.src = WHCSGO.imgFull;
  imgFull.alt = "Full image";

  mini1.src = WHCSGO.mini1;
  mini1.alt = "Mini image 1";

  mini2.src = WHCSGO.mini2;
  mini2.alt = "Mini image 2";

  mini3.src = WHCSGO.mini3;
  mini3.alt = "Mini image 3";

  mini4.src = WHCSGO.mini4;
  mini4.alt = "Mini image 4";
}

displayImages();
