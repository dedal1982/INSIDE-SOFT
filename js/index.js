const priceElements = document.querySelectorAll(".shop__price");

priceElements.forEach((element) => {
  element.addEventListener("click", () => {
    priceElements.forEach((elem) => elem.classList.remove("active"));
    element.classList.add("active");
  });
});

// JavaScript
const fullImage = document.querySelector(".shop__images-full");
const miniImages = document.querySelectorAll(".shop__images-mini ");

miniImages.forEach((image) => {
  image.addEventListener("click", () => {
    fullImage.src = image.src;
  });
});

const languageBtn = document.querySelector(".header__language");
const languageItem = document.querySelector(".header__language_item");

languageBtn.addEventListener("click", () => {
  languageItem.classList.toggle("active");

  const languageEn = document.querySelector(".header__language-en");
  const languageRu = document.querySelector(".header__language-ru");

  if (languageEn) {
    languageEn.addEventListener("click", () => {
      languageBtn.textContent = languageEn.textContent;
    });
    // languageBtn.textContent = languageItem.textContent;
  }
});
