/*
 * Starter file 
 */
(function() {
  "use strict";
  
	window.addEventListener("load", init);
	console.log("Window Loaded!");

//Initializes the application by setting up event handlers.
function init() {

// Event listener to the "Encrypt-It!" button
	var encryptButton = document.getElementById("encrypt-it");
	encryptButton.addEventListener("click", handleEncryption);

// Event listener to the "Reset" button
	var resetButton = document.getElementById("reset");
	resetButton.addEventListener("click", handleReset);
}

//Handles the click event for the "Encrypt-It!" button.
function handleEncryption() {
// Retrieve the text from the input textarea
	console.log("Encrypt button clicked!");
	var inputText = document.getElementById("input-text").value;
    
// Encrypt the text using a basic shift cipher
	var encryptedText = shiftCipher(inputText); 
    
// Output the encrypted text into the paragraph element with id "result"
	var resultParagraph = document.getElementById("result");
	resultParagraph.textContent = encryptedText;
}

function handleReset() {
// Clear out the inner HTML of the input-text textarea
	var inputText = document.getElementById("input-text");
	inputText.value = ""; 

// Clear the result paragraph
	var resultParagraph = document.getElementById("result");
	resultParagraph.textContent = "";
}

function shiftCipher(text) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var charCode = text.charCodeAt(i);
		var shiftedCharCode;

// using Character Codes found at "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode" We can make it work easily
// We can even include the Captitol Letters. a is 97, z is 122, A is 65, Z is 90
		// Uppercase letters
		if (charCode >= 65 && charCode <= 90) { 
			shiftedCharCode = ((charCode - 65 + 1) % 26) + 65;
		// Lowercase letters
		} else if (charCode >= 97 && charCode <= 122) { 
			shiftedCharCode = ((charCode - 97 + 1) % 26) + 97;
		//non-alphabet letters (0-9 and symbols)
		} else {
		result += text.charAt(i);
		continue;
		}
	
// Convert shifted character code back to a letter and add to result
		result += String.fromCharCode(shiftedCharCode);
	}
	return result;
}


})();

