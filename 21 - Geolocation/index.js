const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  // speed.textContent = data.coords.latitude;
  // speed.textContent = data.coords.longitude;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.log(err);
  alert("DOH!")
}); //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition