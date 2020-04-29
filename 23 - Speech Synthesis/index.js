const msg = new SpeechSynthesisUtterance(); //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector("[name='text']").value;

function populateVoices() {
  voices = this.getVoices();
  // console.log(voices);
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.name.includes('Google'))
    .map(voice => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    })
    .join("");
}


function setVoice() {
  console.log(this.value);
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle();
}


function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this);
  console.log(options);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false))
// stopButton.addEventListener('click', () => {
//   toggle(false)
// })

speechSynthesis.speak(msg);