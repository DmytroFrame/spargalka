const AVAILBLE_KEYS = ["f", "F", "ф", "Ф"];
const MODAL_WINDOW = document.getElementById("myModal");
const IFRAME = document.getElementById('iframe')

const url = "https://docs.google.com/document/d/1qHk8uW5toQm1usNI9lzjGoUpwZ4qATsUkXTQGDvoeLY/edit?usp=sharing"

document.addEventListener("keydown", function (event) {
  if (AVAILBLE_KEYS.includes(event.key)) {
    showModal();
  }
});

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    closeModal();
  }
});

function showModal() {
  MODAL_WINDOW.style.display = "block";
}

function closeModal() {
  MODAL_WINDOW.style.display = "none";
}

async function setIframeSrc() {
  
}


IFRAME.src = url