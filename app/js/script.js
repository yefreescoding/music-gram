// ======== Set Date Dynamically ==========
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// mobile toggle
const linksToggle = document.querySelector(".header__toggle");
const linksContainerNav = document.querySelector(".header__nav");
const links = document.querySelector(".header__links");
const header = document.getElementById("home");

linksToggle.addEventListener("click", () => {
  linksContainerNav.classList.toggle("show");
  // const containerHeight = linksContainerNav.getBoundingClientRect();
  // console.log(containerHeight);
});

// Fixed nav bar

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const videoHero = document.querySelector("main__video");

  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > 50) {
    header.classList.add("fixed-nav");
    videoHero.pause();
  } else {
    header.classList.remove("fixed-nav");
  }
});

// YouTube video toggle

const showVideotoggle = document.getElementById("video-show");
const videoYoutube = document.getElementById("video-youtube");
const musicSectionContainer = document.querySelector(".about__info");

musicSectionContainer.addEventListener("click", () => {
  videoYoutube.classList.toggle("show-me-video");
});
