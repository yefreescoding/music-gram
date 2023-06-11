// ======== Set Date Dynamically ==========
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// mobile toggle
const linksToggle = document.querySelector('.header__toggle');
const linksContainerNav = document.querySelector('.header__nav');
const links = document.querySelector('.header__links');
const header = document.getElementById('home');

linksToggle.addEventListener('click', () => {
  linksContainerNav.classList.toggle('show');
  linksToggle.classList.toggle('close-btn');
});

// Fixed nav bar

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 50) {
    header.classList.add('fixed-nav');
  } else {
    header.classList.remove('fixed-nav');
  }
});

// YouTube video toggle

const showVideotoggle = document.getElementById('video-show');
const videoYoutube = document.getElementById('video-youtube');
const musicSectionContainer = document.querySelector('.about__info');

musicSectionContainer.addEventListener('click', () => {
  videoYoutube.classList.toggle('show-me-video');
});

// Testimonials
const testimonials = [
  {
    id: 1,
    name: 'J u a n c h o',
    position: 'Youtube comment',
    image: 'assets/images/image-thomas.jpg',
    testimonial:
      'Está haciendo su propio camino, por eso llega lejos, duela a quien le duela',
  },
  {
    id: 2,
    name: 'Fle',
    position: 'Youtube comment',
    image: 'assets/images/image-emily.jpg',
    testimonial: `"El amor es odio en verdad. El odio es amor, en vd". Bb tricz acaba de definir perfectamente su propia estrategia de marketing`,
  },
  {
    id: 3,
    name: 'valeeeok',
    position: 'Youtube comment',
    image: 'assets/images/image-jennie.jpg',
    testimonial: 'Bb trickz será súper amada, no lo olviden',
  },
  {
    id: 4,
    name: 'fulano',
    position: 'Twitter',
    image: 'assets/images/image-jennie.jpg',
    testimonial: 'Cosas se escriben por aqui, cosass mas y mas cosas',
  },
];

const testimonialsContainer = document.querySelector(
  '.testimonials__container'
);

// Gallery
const gallery = [
  {
    id: 1,
    src: 'assets/images/desktop/hero/hero-3.png',
  },
  {
    id: 2,
    src: 'assets/images/desktop/hero/hero-2.png',
  },
  {
    id: 3,
    src: 'assets/images/desktop/hero/hero-portrait2.png',
  },
  {
    id: 4,
    src: 'assets/images/desktop/hero/hero4.png',
  },
];

const galleryContainer = document.querySelector('.gallery');
// Social Media Icons

// Gallery
const socials = [
  {
    id: 1,
    src: 'assets/icons/icon-facebook.svg',
    alt: 'Facebook logo icon',
    link: '#',
  },
  {
    id: 2,
    src: 'assets/icons/icon-instagram.svg',
    alt: 'instagram logo icon',
    link: '#',
  },
  {
    id: 3,
    src: 'assets/icons/icon-pinterest.svg',
    alt: 'pinterest logo icon',
    link: '#',
  },
  {
    id: 4,
    src: 'assets/icons/icon-twitter.svg',
    alt: 'Twitter logo icon',
    link: '#',
  },
];

const socialMediaContainer = document.querySelector('.footer__bottom');

window.addEventListener('DOMContentLoaded', () => {
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

  testimonialsDisplay = testimonialsDisplay.join('');
  testimonialsContainer.innerHTML = testimonialsDisplay;

  let galleryDisplay = gallery.map((item) => {
    return `<img
              src="${item.src}"
              alt="Portrait image of BB Trickz"
              class="gallery__image"
            />`;
  });

  galleryDisplay = galleryDisplay.join('');
  galleryContainer.innerHTML = galleryDisplay;

  let socialsDisplay = socials.map((item) => {
    return `<a href="${item.link}" class="footer__socials">
              <img
                src="${item.src}"
                alt="${item.alt}"
                class="footer__icons"
              />
            </a>`;
  });

  socialsDisplay = socialsDisplay.join('');
  socialMediaContainer.innerHTML = socialsDisplay;
});

// Preloader
