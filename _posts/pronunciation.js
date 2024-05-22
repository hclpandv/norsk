function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nb-NO'; // You can change the language here
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Speech synthesis not supported in this browser.');
  }
}
