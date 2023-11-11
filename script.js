const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  if (guess === secretNumber) {
    displayMessage("Congratulations! You guessed the number.");
    resetGame();
  } else {
    attempts--;
    if (attempts === 0) {
      displayMessage(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
      resetGame();
    } else {
      displayMessage(`Wrong guess. You have ${attempts} attempts left.`);
    }
  }
}

function displayMessage(message) {
  document.getElementById("message").textContent = message;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 3;
  displayMessage("Try to guess the number between 1 and 10");
}
