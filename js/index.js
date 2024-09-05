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
