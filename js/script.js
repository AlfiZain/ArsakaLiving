// Navbar
const navbar = document.getElementsByTagName("nav")[0];
const navbarCollapse = document.querySelector(".navbar-collapse");

// Fungsi untuk menambahkan atau menghapus background navbar
const addNavbarBackground = () => {
  navbar.classList.replace("bg-transparent", "nav-bg");
};

const removeNavbarBackground = () => {
  if (window.scrollY <= 0) {
    navbar.classList.replace("nav-bg", "bg-transparent");
  }
};

// Event listener untuk scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 1 || navbarCollapse.classList.contains("show")) {
    addNavbarBackground();
  } else {
    removeNavbarBackground();
  }
});

// Event listener untuk transisi Bootstrap
navbarCollapse.addEventListener("shown.bs.collapse", addNavbarBackground);
navbarCollapse.addEventListener("hidden.bs.collapse", removeNavbarBackground);

// Carousel
const carouselRow = document.getElementById("carousel-row");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let scrollPosition = 0; // Posisi scroll saat ini
const cardWidth = document.querySelector(".card-fitur").offsetWidth + 14; // Lebar card + gap
const totalCards = document.querySelectorAll(".card-fitur").length;
const visibleCards = Math.floor(document.querySelector(".carousel-wrapper").offsetWidth / cardWidth);
const maxScroll = (totalCards - visibleCards) * cardWidth;

// Fungsi untuk geser ke kiri
btnLeft.addEventListener("click", () => {
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) scrollPosition = 0;
  updateCarousel();
});

// Fungsi untuk geser ke kanan
btnRight.addEventListener("click", () => {
  scrollPosition += cardWidth;
  if (scrollPosition > maxScroll) scrollPosition = maxScroll;
  updateCarousel();
});

// Fungsi untuk memperbarui posisi carousel
function updateCarousel() {
  carouselRow.style.transform = `translateX(-${scrollPosition}px)`;
}
