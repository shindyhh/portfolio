// pop up

const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// sticky navbar on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// active nav link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });
};

// make mobile navbar work

const mobileNavLinks = document.querySelectorAll(".navbar a");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    headerEl.classList.remove("nav-open");
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const targetOffset = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffset - 50,
      behavior: "smooth",
    });

    headerEl.classList.remove("nav-open");
  });
});

// Smooth scrolling for "home" and "portfolio" links
const homeLink = document.querySelector("#home-link");
const portfolioLink = document.querySelector("#portfolio-link");

homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

portfolioLink.addEventListener("click", function (event) {
  event.preventDefault();
  const targetSection = document.querySelector("#portfolio");
  const targetOffset = targetSection.offsetTop;

  window.scrollTo({
    top: targetOffset - 50,
    behavior: "smooth",
  });
});
