const divs = document.querySelectorAll("div");
const button = document.querySelector(".btn");
function logText(e) {
  // console.log("haha");
  // console.log(e);
  console.log(this.classList.value);
  e.stopPropagation();
}
function toggleBtn() {
  console.log("hede");
}

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: true })
);
button.addEventListener("click", toggleBtn, { once: true });
