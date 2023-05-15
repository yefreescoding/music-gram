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

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "J u a n c h o",
    position: "Youtube comment",
    image: "assets/images/image-thomas.jpg",
    testimonial:
      "Está haciendo su propio camino, por eso llega lejos, duela a quien le duela",
  },
  {
    id: 2,
    name: "Fle",
    position: "Youtube comment",
    image: "assets/images/image-emily.jpg",
    testimonial: `"El amor es odio en verdad. El odio es amor, en vd". Bb tricz acaba de definir perfectamente su propia estrategia de marketing`,
  },
  {
    id: 3,
    name: "valeeeok",
    position: "Youtube comment",
    image: "assets/images/image-jennie.jpg",
    testimonial: "Bb trickz será súper amada, no lo olviden",
  },
  {
    id: 4,
    name: "fulano",
    position: "work in S.A Monster",
    image: "#",
    testimonial: "Cosas se escriben por aqui, cosass mas y mas cosas",
  },
];

const testimonialsContainer = document.querySelector(
  ".testimonials__container"
);

window.addEventListener("DOMContentLoaded", () => {
  let testimonialsDisplay = testimonials.map((item) => {
    return `<div class="grid testimonials__container">
        <div class="flex-col testimonials__reviews">
          <div class="flex testimonials__names">
            <img
              src="${item.image}"
              alt="Profile Image of the user"
              class="testimonials__image"
            />
            <span class="testimonials__name">${item.name}</span
            ><span class="testimonials__position">${item.position}</span>
          </div>
          <p class="testimonials__p">
            ${item.testimonial}
          </p>
          <span class="testimonial__date"> April 24th, 2023. </span>
        </div>
      </div>`;
  });

  testimonialsDisplay = testimonialsDisplay.join("");
  testimonialsContainer.innerHTML = testimonialsDisplay;
});

// Preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
