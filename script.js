const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}


window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
