const msg = new SpeechSynthesisUtterance(); //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");