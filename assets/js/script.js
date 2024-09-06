$(".toggleNav").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $("body").toggleClass("nav-expanded");
});

function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}

document
  .querySelector("input[type='checkbox']#dark-toggle")
  .addEventListener("click", darkModeListener);

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
