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
    requirementsPage.classList.remove("active");
    opportunitiesPage.classList.add("active");
  });
}

if (tabRequirements) {
  tabRequirements.addEventListener("click", () => {
    tabOpportunities.classList.remove("active");
    tabRequirements.classList.add("active");
    opportunitiesPage.classList.remove("active");
    requirementsPage.classList.add("active");
  });
}

//чекбокс соглашение
const formAgreement = document.querySelector(".form-agreement span");

if (formAgreement) {
  formAgreement.addEventListener("click", () => {
    formAgreement.classList.toggle("active");
  });
}

//аккордеон
const pageItemBtn = document.querySelectorAll(".page-item");
const pageItemAll = document.querySelectorAll(".page-item-inner");

if (pageItemBtn) {
  pageItemBtn.forEach((item) => {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      const pageItem = item.querySelector(".page-item-inner");

      // Если текущий элемент активен, то удаляем класс active
      if (pageItem.classList.contains("active")) {
        pageItem.classList.remove("active");
      } else {
        // Если не активен, то сначала убираем класс active
        pageItemAll.forEach((elem) => {
          elem.classList.remove("active");
        });
        // Затем добавляем класс active текущему элементу
        pageItem.classList.add("active");
      }
    });
  });
}
