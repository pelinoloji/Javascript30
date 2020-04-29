const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  // console.log(topOfNav, scrollY);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    // console.log(nav.offsetHeight);

    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
