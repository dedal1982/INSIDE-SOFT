const priceElements = document.querySelectorAll(".shop__price");

priceElements.forEach((element) => {
  element.addEventListener("click", () => {
    priceElements.forEach((elem) => elem.classList.remove("active"));
    element.classList.add("active");
  });
});

const fullImage = document.querySelector(".shop__images-full");
const miniImages = document.querySelectorAll(".shop__images-mini ");

miniImages.forEach((image) => {
  image.addEventListener("click", () => {
    fullImage.src = image.src;
  });
});

const languageBtn = document.querySelector(".header__language");
const language = languageBtn.querySelector(".language");
const languageItem = document.querySelector(".header__language_item");

languageBtn.addEventListener("click", () => {
  languageItem.classList.toggle("active");

  const languageEnItem = document.querySelector(".header__language-en");
  const languageEn = languageEnItem.querySelector(".language-en");
  const languageRuItem = document.querySelector(".header__language-ru");
  const languageRu = languageRuItem.querySelector(".language-ru");

  if (languageEnItem) {
    languageEnItem.addEventListener("click", () => {
      language.textContent = languageEn.textContent;
    });
  }
  if (languageRuItem) {
    languageRuItem.addEventListener("click", () => {
      language.textContent = languageRu.textContent;
    });
  }
});
