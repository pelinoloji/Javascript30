const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  console.log("highlight");
  const linkCoords = this.getBoundingClientRect(); //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  console.log(linkCoords);

  //1st Alternative
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.top = `${linkCoords.top}px`;
  highlight.style.bottom = `${linkCoords.bottom}px`;
  highlight.style.left = `${linkCoords.left}px`;
  highlight.style.right = `${linkCoords.right}px`;

  //2.Alternative(Wes Bos)
  // const coords = {
  //   width: linkCoords.width,
  //   height: linkCoords.height,
  //   top: linkCoords.top + window.scrollY,
  //   left: linkCoords.left + window.scrollX,
  // };

  // highlight.style.width = `${coords.width}px`;
  // highlight.style.height = `${coords.height}px`;
  // highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", highlightLink)
); //https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
