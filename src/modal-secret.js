const MODAL_WINDOW = document.getElementById("modal");
const MODAL_RANGE = document.getElementById("modal-range");
const IFRAME = document.getElementById("iframe");
const AVAILBLE_KEYS = ["f", "F", "а", "А"];

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

MODAL_RANGE.addEventListener("input", (event) => {
  MODAL_WINDOW.style.opacity = event.target.value;
});

function showModal() {
  IFRAME.contentWindow.focus();
  MODAL_WINDOW.style.display = "block";
}

function closeModal() {
  MODAL_WINDOW.style.display = "none";
}
