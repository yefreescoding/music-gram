# Landing Page - BB Trickz

This is a little project for a upcoming artist that to me she looks very

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](screenshots/desktop.png)
![](screenshots/mobile.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/yefreescoding/bb-trickz-landing-page.git)
- Live Site URL: [Vercel Live Site](https://bb-trickz-landing-page.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- FlexBox
- CSS Grid
- Mobile-first workflow
- [Gulp](https://gulpjs.com/) - Gulp Workflow

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
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

  let galleryDisplay = gallery.map((item) => {
    return `<img
              src="${item.src}"
              alt="Portrait image of BB Trickz"
              class="gallery__image"
            />`;
  });

  galleryDisplay = galleryDisplay.join("");
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

  socialsDisplay = socialsDisplay.join("");
  socialMediaContainer.innerHTML = socialsDisplay;
});
```

### Useful resources

- [Build a Simple Website with HTML](https://youtu.be/krfUjg0S2uI) - Really useful video, TOTALLY FREE, it taught me about the process of building a website, how to organize de folder and he research we should do before starting to write any code.
- [Kevin Powell - Youtube Channel](https://www.example.com) - This awesome human being will teach in the most amazing way how to love CSS. Go check it out.

## Author

- Website - [Yefree De Los Santos](https://github.com/yefreescoding)
- Twitter - [@YefreeCodes](https://twitter.com/YefreeCodes)
