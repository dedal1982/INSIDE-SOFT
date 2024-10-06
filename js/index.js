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

if (tabOpportunities) {
  tabOpportunities.addEventListener("click", () => {
    tabRequirements.classList.remove("active");
    tabOpportunities.classList.add("active");
  });
}

if (tabRequirements) {
  tabRequirements.addEventListener("click", () => {
    tabOpportunities.classList.remove("active");
    tabRequirements.classList.add("active");
  });
}
