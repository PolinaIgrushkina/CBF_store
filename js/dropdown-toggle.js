const categoriesList = document.querySelector(".categories-list");
const dropdownMenu = document.querySelector(".dropdown-menu");
let selectedLi = null;

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("categories-item")) {
    if (event.target === selectedLi) {
      dropdownMenu.style.display = "none";
      selectedLi = null;
    } else {
      dropdownMenu.style.display = "flex";
      selectedLi = event.target;
    }
  } else {
    dropdownMenu.style.display = "none";
    selectedLi = null;
  }

  if (
    dropdownMenu.style.display === "flex" &&
    !event.target.classList.contains("categories-item")
  ) {
    dropdownMenu.style.display = "none";
    setTimeout(function () {
      dropdownMenu.style.display = "flex";
    }, 0);
  }
});
