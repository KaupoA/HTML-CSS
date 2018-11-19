var secretNumber = 15;
var guessNumber = parseInt(prompt("Guess a number."));

if (secretNumber === guessNumber) {
    alert(guessNumber + " is the correct answer!");
}

else if (secretNumber < guessNumber) {
    alert(guessNumber + " is too high. Try again!");
}

else {
    alert(guessNumber + " is too low. Try again!");
}