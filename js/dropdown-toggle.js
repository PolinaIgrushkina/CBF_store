const categoriesList = document.querySelector(".categories-list");
const dropdownMenu = document.querySelector(".dropdown-menu");

categoriesList.addEventListener("click", function () {
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
});
