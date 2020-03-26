secondsHands = document.querySelector(".second-hand");
minutesHands = document.querySelector(".min-hand");
hoursHands = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHands.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  // console.log(minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHands.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  // console.log(hours);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHands.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds === 59) {
    return (secondsHands.style.transform = `none`);
  } else {
    return (secondsHands.style.transform = `rotate(${secondsDegrees}deg)`);
  }
}

setInterval(setDate, 1000);
