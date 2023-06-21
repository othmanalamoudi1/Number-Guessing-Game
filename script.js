

// Generate a random number between 1 and 100

let targetNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const counter = document.getElementById('counter');
let guessCount = 0;

guessButton.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  if (userGuess === targetNumber) {
    guessCount++; // Increment the guess count only for correct guesses
    message.textContent = 'Congratulations! You guessed the correct number!';
    displayGuessCount();
    resetGame();
  } else if (userGuess < targetNumber) {
    message.textContent = 'Too low! Try a higher number.';
  } else {
    message.textContent = 'Too high! Try a lower number.';
  }
 
}

function displayGuessCount() {
  counter.textContent = `Number of guesses: ${guessCount}`;
}

function resetGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = '';
}

displayGuessCount();
