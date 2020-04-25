window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults

let p = document.createElement('p');
let words = document.querySelector('.words');
words.appendChild(p); //https://www.geeksforgeeks.org/html-dom-appendchild-method/

recognition.addEventListener('result', e => { //https: //developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event
  // console.log(e);
  const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join(' ')

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  console.log(transcript);
})

recognition.addEventListener('end', recognition.start)

recognition.start();