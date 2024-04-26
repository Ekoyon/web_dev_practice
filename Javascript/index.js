console.log("HELLO FROM THE FIRST JS FILE");
let total = 1 + 3;
console.log("GOODBYE!");



// if statement
let ratings = 5;

if (ratings === 5){
    console.log ("wow!");
}

let random = Math.random();
if (random < 0.5) {
    console.log("MATH WORKS")
    console.log(random)
}

// if else statement
if (1 + 2 === 3) {
    console.log("Interesting")
} else {
    console.log("you got it wrong")
}

//exercise
// If num is an even number, print out "even".  Don't do anything if num is an odd number.

function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
    if(num % 2 === 0){
        console.log("even");
    }

    //AND THIS LINE ↑↑↑↑↑
}

// else if
const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {
    console.log("Mondays <<<<<")
} else if (dayOfWeek === 'Saturday') {
    console.log("Hehe, yay Saturday!!!!")
}

// you can have as much else if's as you want

const age = 66;

if (age < 5){
    console.log("A baby, get in for free!")
} else if (age < 10) {
    console.log("You're a child, you pay $10")
} else if (age <= 65) {
    console.log("You're a full grown adult, you pay $20")
} else {
    console.log(" You pay $20 Senior")
}

// exercise
// Your job is to print out a color based upon the following rules:
//
// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'

// solution
function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
    if (phrase === 'stop') {
        console.log('red')
    } else if(phrase === 'slow') {
        console.log('yellow')
    } else if(phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }

    //AND THIS LINE ↑↑↑↑↑
}