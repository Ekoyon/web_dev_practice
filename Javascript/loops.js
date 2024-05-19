// LOOPS
// Whole point of them is to have a repeat on code written, so instead of typing out the code over and over again, you can just do this more seamlessly

// For loops
// eg
// for ( let i = 1; i <= 10; i++){
//     console.log(i);
// }

// the logic of this code: i as a variable only in loop so it's pretty common to use i. The syntax, you create the variable i, the second part is a boolean expression and the third is an increment operation.
// so as long as i is true, it increases the value of i until the boolean operation is false.

// exercise
// Print out "Da ba dee da ba daa" 6 times, using a for loop
//  for (let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba Daa");
// }

// more examples
// printing out even numbers
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// counting in tens from 100 to 10
// for (let i = 100; i >= 10; i -= 10) {
//     console.log(i);
// }
// more practice
// // Write a loop that prints:
// // 25
// // 20
// // 15
// // 10
// // 5
// // 0
//
// for ( let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// infinite loops
// make sure at some point your loop stops

// looping over arrays
// remembering how each element has an index and so on.

// exercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
//
// // WRITE YOUR LOOP BELOW THIS LINE
// for (let i = 0; i < people.length; i++ ) {
//     console.log(people[i].toUpperCase());
// }
// While loops
// For and Of loop
// Break keyword
// Iterating objects
// Nesting
// for (let i=0; i <= 5; i--) {
//     console.log(`i is ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`j is ${j}`)
//     }
// }
// results
// i is 1
// j is    1
// j is    2
// j is    3
// i is 2
// j is    1
// j is    2
// j is     3
// i is 3
// j is    1
// j is    2
// j is    3
// i is 4
// j is    1
// j is    2
// j is    3
// i is 5
// j is    1
// j is    2
// j is    3
// i is 6
// j is    1
// j is    2
// j is    3
// i is 7
// j is    1
// j is    2
// j is    3
// i is 8
// j is    1
// j is    2
// j is    3
// i is 9
// j is    1
// j is    2
// j is    3
// i is 10
// j is    1
// j is    2
// j is    3

// another example, you'll use a nested for loop for nested arrays also.
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Yuto', 'Sakute', 'Jack', 'Kim']
// ]
// if I wanted to print names according to seating arrangement, one after another:
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW ${i + 1}`)
//     for (let j =0; j < row.length; j++){
//         console.log(j);
//     }
// }

// while loop
// you state a condition and while it is true, the loops
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }
// // it's easier to do an infinite loop with while loop so be careful.
// // the example above is not where people use a while loop, we'd use it in an edxple, a chessgame that iterates
//
// const secret = "Hippopotemus";
//
// let guess = prompt("enter your secret code");
// while (guess !== secret) {
//     guess = prompt("enter a valid secret code");
// }
// console.log("Congrats, you're in");
// // this part only runs after the condition passes.
// // these are instances for which the while loop would be useful: in times where we have no idea how lon the iteration would go on for and all.
//
//
// // break keyword
// let input = prompt('say something!')
// while (true){
//     input = prompt(input);
//     if (input === "please quit copying me") break;
// }
// console.log("Okay you win")
//
// // the break keyword basically lets you escape the loop.
// // it isn't streamlined to only while loops but runs on other loops also.
//
// let's write a guessing game.

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number "))
}

const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt("Enter a guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess.");
    } else {
        guess = prompt("Too low! Enter a new guess.");
    }
}
if (guess === 'q') {
    console.log("OK, quit.")
} else {
    console.log('oh wow, you got it.')
    console.log(`You got it! it only took ${attempts} guesses`)
}