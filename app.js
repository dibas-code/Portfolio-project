let bars = document.querySelector(".bars");
let slideBar = document.querySelector("nav ul");
let closeSlide = document.querySelector(".fa-close");

bars.addEventListener("click", () => {
    slideBar.style.right = "0px"
})

closeSlide.addEventListener("click", () => {
    slideBar.style.right = "-100%";
})