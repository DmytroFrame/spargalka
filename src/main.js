const MODAL_WINDOW = document.getElementById("myModal");
const IFRAME = document.getElementById("iframe");
const AVAILBLE_KEYS = ["f", "F", "ф", "Ф"];

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
  const req = await fetch(
    "https://raw.githubusercontent.com/DmytroFrame/spargalka/master/iframe-url.txt"
  );
  IFRAME.src = await req.text();
}

setIframeSrc();
