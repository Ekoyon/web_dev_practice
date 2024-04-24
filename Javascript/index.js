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
    if(num % 2 == 0){
        console.log("even");
    }

    //AND THIS LINE ↑↑↑↑↑
}