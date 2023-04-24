const images = [
  "./images/hero-mob-1x.jpg",
  "./images/hero2-mob-1x.jpg",
  "./images/hero-mob-1x.jpg",
  "./images/hero2-mob-1x.jpg",
];

let currentImageIdx = 0;
const sliderImageMob = document.querySelector(".slider-image-mob");
const dotsMob = document.querySelectorAll(".dot-mob");

let sliderIntervalId = null;
let isSliderActive = false;

function changeImage() {
  if (!isSliderActive) {
    return;
  }

  currentImageIdx = (currentImageIdx + 1) % images.length;
  sliderImageMob.style.backgroundImage = `url('${images[currentImageIdx]}')`;

  // Выделение активной точки
  dotsMob.forEach((dot, idx) => {
    if (idx === currentImageIdx) {
      dot.classList.add("active-dot-mob");
    } else {
      dot.classList.remove("active-dot-mob");
    }
  });
}

function startSlider() {
  isSliderActive = true;
  sliderImageMob.style.display = "block";
  sliderIntervalId = setInterval(changeImage, 30000);
}

function stopSlider() {
  isSliderActive = false;
  sliderImageMob.style.display = "none";
  clearInterval(sliderIntervalId);
  sliderIntervalId = null;
}

function handleResize() {
  if (window.innerWidth < 1920) {
    startSlider();
  } else {
    stopSlider();
  }
}

if (window.innerWidth < 1920) {
  startSlider();
}

window.addEventListener("resize", handleResize);
