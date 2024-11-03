let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid   number!"));

}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!"));
let attempts = 1;
while (parseInt(guess) != targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = (prompt("Too high! Guess again:"))
        attempts++
    } else if (guess < targetNum) {
        guess = prompt("Too low! Guess again:")
        attempts++
    } else {
        guess = prompt("Invalid Guess, Enter a number or 'q' to quit")
    }
}

if (guess === 'q') {
    console.log("You Quit.")
} else {
    console.log(`That is correct! You got it after ${attempts} guesses`)
}