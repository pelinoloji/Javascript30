const timeNodes = [...document.querySelectorAll("[data-time]")];
const totalTime = document.querySelector(".totalTime");

const seconds = timeNodes
  .map((nodes) => nodes.dataset.time)
  .map((timeCode) => {
    const [min, secs] = timeCode.split(":").map(parseFloat);
    return min * 60 + secs;
    // console.log(min, secs);
  })
  .reduce((total, vidSecs) => total + vidSecs, 0);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
totalTime.innerHTML = `<span>Total Video Time <b>${hours}</b>:<b>${mins}</b>:<b>${secondsLeft}</span>`;

// console.log(hours);
// console.log(secondsLeft);
// console.log(hours, mins, secondsLeft);
