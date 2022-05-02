const flipBtn = document.querySelector(".toggle-btn");
const btn = document.querySelector(".btn");
flipBtn.addEventListener("click", () => {
  btn.classList.toggle("move");
});