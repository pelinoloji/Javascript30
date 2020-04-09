const player = document.querySelector(".player");
const video = document.querySelector("video");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const ranges = document.querySelectorAll(".player__slider");
const toggle = player.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const btnSarma = document.querySelector(".player__button");

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  // console.log(this);
  const icon = this.paused ? "►" : "❙❙";
  toggle.textContent = icon;
}
function skip() {
  // console.log(this.dataset);
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // console.log(this.name);
  video[this.name] = this.value;
}

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  // console.log(percent);
}

function progressMove(e) {
  // console.log(e);
  const progressMoveTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(progressMoveTime);
  video.currentTime = progressMoveTime;
}

video.addEventListener("click", playPause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgressBar);

toggle.addEventListener("click", playPause);
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
let mouseDown = false;
progress.addEventListener("click", progressMove);
progress.addEventListener("mousemove", (e) => mouseDown && progressMove(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
