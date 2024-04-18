function biggering() {
  var textarea = document.querySelector('textarea');
  textarea.style.fontSize = '24pt'; // Set font size to 24pt
}
function applyStyles() {
  var textarea = document.querySelector('textarea');
  var fancyRadio = document.getElementById('fancy');
  var boringRadio = document.getElementById('boring');

  if (fancyRadio.checked) {
    textarea.style.fontWeight = 'bold';
    textarea.style.color = 'blue';
    textarea.style.textDecoration = 'underline wavy blue 2px'; 
  } else if (boringRadio.checked) {
    textarea.style.fontWeight = 'normal';
    textarea.style.color = 'black'; // Reset color to default
    textarea.style.textDecoration = 'none'; // Reset text decoration to none
  }
}

function mooifyText() {
  var textarea = document.querySelector('textarea');
  var text = textarea.value.toUpperCase(); // Uppercase the entire text
  var sentences = text.split(/[.!?]/); // Split text into sentences using punctuation marks
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(' '); // Split each sentence into words
    if (words.length > 0 && words[words.length - 1] !== "") { // check if the last word exists
      // Add "-Moo" suffix to the last word of the sentence
      words[words.length - 1] += "-Moo";
    }
    sentences[i] = words.join(' '); // Join the words back into a sentence
  }
  textarea.value = sentences.join('. '); // Join the sentences back into text
}
function underscoreForSpaces() {
  var textarea = document.querySelector('textarea');
  var text = textarea.value;
  var sentences = text.split(/[.!?]/); // Split text into sentences using punctuation marks
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(' '); // Split each sentence into words
    sentences[i] = words.join('_'); // Join the words back into a sentence
  }
  textarea.value = sentences.join('. '); // Join the sentences back into text
}
function mooifyUnderscoreText() {
  var textarea = document.querySelector('textarea');
  var text = textarea.value.toUpperCase(); // Uppercase the entire text
  var sentences = text.split(/[.!?]/); // Split text into sentences using punctuation marks
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(' '); // Split each sentence into words
    if (words.length > 0 && words[words.length - 1] !== "") { // check if the last word exists
      // Add "-Moo" suffix to the last word of the sentence
      words[words.length - 1] += "-Moo";
    }
    sentences[i] = words.join('_'); // Join the words back into a sentence
  }
  textarea.value = sentences.join('. '); // Join the sentences back into text
}

function showAlert() {
  alert("Radio button changed!");
}