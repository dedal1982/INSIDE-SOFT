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
