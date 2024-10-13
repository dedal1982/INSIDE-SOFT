const cheatImageMain = document.querySelector(".cheat-enemy__left-image");
const cheatImageMini = document.querySelectorAll(
  ".cheat-enemy__left-image-mini"
);

if (cheatImageMini) {
  cheatImageMini.forEach((item) => {
    item.addEventListener("click", () => {
      cheatImageMain.src = item.src;
    });
  });
}

//tabs
const tabOpportunities = document.getElementById("opportunities");
const tabRequirements = document.getElementById("requirements");
const opportunitiesPage = document.getElementById("opportunitiesPage");
const requirementsPage = document.getElementById("requirementsPage");

if (tabOpportunities) {
  tabOpportunities.addEventListener("click", () => {
    tabRequirements.classList.remove("active");
    tabOpportunities.classList.add("active");
    opportunitiesPage.classList.remove("active");
    requirementsPage.classList.add("active");
  });
}

if (tabRequirements) {
  tabRequirements.addEventListener("click", () => {
    tabOpportunities.classList.remove("active");
    tabRequirements.classList.add("active");
    requirementsPage.classList.remove("active");
    opportunitiesPage.classList.add("active");
  });
}

//чекбокс соглашение
// const formAgreement = document.querySelector(".cheat-enemy__agreement span");
// const formButton = document.querySelectorAll(".no-link");

// if (formAgreement) {
//   formAgreement.addEventListener("click", () => {
//     formAgreement.classList.toggle("active");
//     formButton.classList.add("active");
//   });
// }

//аккордеон
const pageItemBtn = document.querySelectorAll(".page-item");
const pageItemAll = document.querySelectorAll(".page-item-inner");

if (pageItemBtn) {
  pageItemBtn.forEach((item) => {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      const pageItem = item.querySelector(".page-item-inner");
      const pageItemArrow = item.querySelector(".arrow-img");
      pageItemArrow.classList.toggle("active");
      if (pageItem.classList.contains("active")) {
        pageItem.classList.remove("active");
      } else {
        pageItemAll.forEach((elem) => {
          elem.classList.remove("active");
        });
        pageItem.classList.add("active");
      }
    });
  });
}

//выбор дней
const formPageChecks = document.querySelectorAll(".form-page-check");
const formChecks = document.querySelectorAll(".form-check");
const formAgreement = document.querySelector(".cheat-enemy__agreement span");
const buyArrow = document.querySelectorAll(".buy");

if (formPageChecks) {
  formPageChecks.forEach((item) => {
    item.addEventListener("click", () => {
      formChecks.forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
          formAgreement.classList.remove("active");
          buyArrow.forEach((el) => {
            el.classList.remove("active");
          });
        }
        const formCheck = item.querySelector(".form-check");
        formCheck.classList.add("active");
      });
    });
  });
}
if (formAgreement) {
  formAgreement.addEventListener("click", () => {
    formAgreement.classList.toggle("active");
    formPageChecks.forEach((item) => {
      const itemSpan = item.querySelector(".form-check");
      if (itemSpan.classList.contains("active")) {
        const itemArrow = item.querySelector(".buy");
        itemArrow.classList.toggle("active");
      }
    });
  });
}

//смотреть все карточки игр
const catalogButton = document.querySelector(".catalog__button");
const catalogGalleryHidden = document.querySelector(".catalog__gallery-hidden");
const catalogButtonHidden = document.querySelector(".catalog__button-hidden");

if (catalogButton) {
  catalogButton.addEventListener("click", () => {
    catalogGalleryHidden.classList.add("active");
    catalogButton.classList.add("active");
    catalogButtonHidden.classList.add("active");
  });
}

if (catalogButtonHidden) {
  catalogButtonHidden.addEventListener("click", () => {
    catalogGalleryHidden.classList.remove("active");
    catalogButton.classList.remove("active");
    catalogButtonHidden.classList.remove("active");
    const element = document.getElementById("catalogGallery");
    element.scrollIntoView({ behavior: "smooth" });
  });
}

//проскроливание картинок
const scrollContainer = document.querySelector(".cheat-enemy__scroll");

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  });
}

//кнопка скачивание файла
const btnDownload = document.getElementById("downloadBtn");

if (btnDownload) {
  btnDownload.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "path/to/your/file.ext"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
