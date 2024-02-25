// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[#main]"),
//   smooth: true,
// });

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
