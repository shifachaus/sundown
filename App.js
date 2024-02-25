const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const elementContainer = document.querySelector(".element__container");
const fixed = document.querySelector("#fixed__image");
const nodeEl = document.querySelectorAll(".element");

elementContainer.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

elementContainer.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

nodeEl.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    let image = el.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

// swiper js
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

// menu
function menuAniation() {
  const menu = document.querySelector("nav h3");
  const fullScreen = document.querySelector(".full__screen");
  const navImage = document.querySelector("nav img");

  let flag = 0;
  menu.addEventListener("click", function () {
    if (flag === 0) {
      fullScreen.style.top = 0;
      navImage.style.opacity = 0;
      flag = 1;
    } else {
      fullScreen.style.top = "-100%";
      navImage.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAniation() {
  const loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3000);
}

swiperAnimation();
menuAniation();
loaderAniation();
