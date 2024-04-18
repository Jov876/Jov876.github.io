// Function to save favorite number to local storage
function saveFavoriteNumber() {
	var favoriteNumber = document.getElementById("favoriteNumber").value;
	localStorage.setItem("favoriteNumber", favoriteNumber);
	alert("Favorite number saved successfully!");
	displayFavoriteNumber();
        }

// Function to load favorite number from local storage
function loadFavoriteNumber() {
	var favoriteNumber = localStorage.getItem("favoriteNumber");
	displayFavoriteNumber();
	}

// Function to display favorite number
function displayFavoriteNumber() {
	var favoriteNumber = localStorage.getItem("favoriteNumber");
	var displayElement = document.getElementById("favoriteNumberDisplay");
	if (favoriteNumber) {
		displayElement.innerHTML = "Your favorite number is: " + favoriteNumber;
                document.getElementById("forgetButton").style.display = "inline";
	} else {
                displayElement.innerHTML = "Your favorite number is not set.";
                document.getElementById("forgetButton").style.display = "none";
		}
	}

// Function to forget favorite number
function forgetFavoriteNumber() {
	localStorage.removeItem("favoriteNumber");
	displayFavoriteNumber();
	alert("Your favorite number has been forgotten.");
        }