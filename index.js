function validateMaidenName() {
  var enteredMaidenName = prompt("Enter your maiden name:");

  if (enteredMaidenName === null) {
    // User clicked cancel, do not display the card
    return;
  }

  if (enteredMaidenName.toLowerCase() === "peju") {
    // Correct maiden name, proceed to the card
    alert("Validation successful! Access granted.");
    showBirthdayCard();
  } else {
    // Incorrect maiden name, show error message and hide the card
    alert("Incorrect maiden name. No be You de Do birthday.");
    hideBirthdayCard();
  }
}

function showBirthdayCard() {
  // Code to display the birthday card
  document.querySelector(".birthdayCard").style.display = "block";
}

function hideBirthdayCard() {
  // Code to hide the birthday card
  document.querySelector(".birthdayCard").style.display = "none";
}

// Call the validation function when the page loads
validateMaidenName();
