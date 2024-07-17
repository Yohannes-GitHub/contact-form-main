# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- Desktop Version Screenshot -

![](./assets/images/Screenshot%20of%20%20Frontend%20Mentor%20Contact%20form%20Desktop.png)

- Mobile Version Screenshot -

![](./assets/images/Screenshot%20of%20%20Frontend%20Mentor%20Contact%20form%20Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Yohannes-GitHub/contact-form-main)
- Live Site URL: [Add live site URL here](https://contact-form-by-yohannes-sintayehu.netlify.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

I've learned how to use forms at a rudimentary level. I've also learned how to select parent element on CSS and how to use
labels interchangeably with radio buttons and checkboxes when selected.

To see how you can add code snippets, see below:

```css
input[type="radio"]:checked,
input[type="radio"]:not(:checked) + label,
#checkbox:checked,
#checkbox:not(:checked) + label {
  display: none;
}

.radio-div:has(input[type="radio"]:checked) {
  border: 1px solid hsl(169, 82%, 27%);
  background-color: hsl(148, 38%, 91%);
}
```

### Continued development

I still need work in writing DRY code specially in CSS.

### Useful resources

- [Example resource 1](https://www.sitepoint.com/community/t/hide-div-after-10-seconds/5910/4) - This helped me for making the toast message div
  by showing me how to combine setTimeout method with the display none styling.
- [Example resource 2](https://jsfiddle.net/yx37af45/9/) - This helped me when I was trying to switch the radio buttons and checkbox with the images provided when checked and to return when unchecked.
- Stack Overflow Website

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Yohannes-GitHub)
- Twitter - [@yourusername](https://x.com/jonsintayehu)
