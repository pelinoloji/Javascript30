function playSound(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // console.log(key);
  if (!audio) return "no audio";
  audio.currentTime = 0;
  // audio.volume = 1;
  key.classList.add("playing");
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return "no transform";
  // console.log(e.propertyName);
  // console.log(this);

  this.classList.remove("playing");
  // e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
