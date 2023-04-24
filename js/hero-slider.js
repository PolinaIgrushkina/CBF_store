const sliderImages = [
  "images/hero-1x.jpg",
  "images/hero2-1x.jpg",
  "images/hero3-1x.jpg",
];

const slider = document.querySelector(".slider");
const sliderImage = slider.querySelector(".slider-image-desk");
sliderImage.style.display = "block";
const prevBtn = slider.querySelector(".slider-btn-prev");
const nextBtn = slider.querySelector(".slider-btn-next");
const dotsContainer = slider.querySelector(".slider-dots");
dotsContainer.style.display = "block";

let currentImageIndex = 0;

function showCurrentImage() {
  sliderImage.style.backgroundImage = `url(${sliderImages[currentImageIndex]})`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".slider-dot");
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= sliderImages.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = sliderImages.length - 1;
  }
  showCurrentImage();
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

sliderImages.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("slider-dot");
  if (index === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    currentImageIndex = index;
    showCurrentImage();
  });
  dotsContainer.appendChild(dot);
});

showCurrentImage();
