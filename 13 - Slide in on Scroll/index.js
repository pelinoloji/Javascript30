function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll("img");

function checkSlide(e) {
  // console.count(e);
  images.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    // console.log(slideInAt, "slideInAt");

    const imageBottom = image.offsetTop + image.height;
    // console.log(imageBottom, "imageBottom");

    const isHalfShown = slideInAt > image.offsetTop;
    // console.log(isHalfShown, "isHalfShown");

    const isNotScrolledPast = window.scrollY < imageBottom;
    // console.log(isNotScrolledPast, "isNotScrolledPast");

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
