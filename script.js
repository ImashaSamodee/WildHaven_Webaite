'use strict';

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");

// Open & Close Menu
[navOpenBtn, navCloseBtn].forEach(btn => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

// Close menu when clicking a link
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// Header background on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 50);
});



