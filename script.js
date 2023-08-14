// pop up

const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// sticky navbar on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// active nav link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      })
    }
  })
}


// make mobile navbar work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle("nav-open");
})
