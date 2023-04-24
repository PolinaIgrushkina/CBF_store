const dots = document.querySelectorAll(".dot-mob");
const cards = document.querySelectorAll(".brand-card-mob");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.classList.remove("active-dot-mob"));
    dot.classList.add("active-dot-mob");
    cards.forEach((card) => card.classList.remove("active-card"));

    if (index === 0) {
      cards[0].classList.add("active-card");
      cards[1].classList.add("active-card");
    } else if (index === 1) {
      cards[1].classList.add("active-card");
      cards[2].classList.add("active-card");
    } else if (index === 2) {
      cards[2].classList.add("active-card");
      cards[3].classList.add("active-card");
    } else if (index === 3) {
      cards[3].classList.add("active-card");
      cards[4].classList.add("active-card");
    }
  });
});
