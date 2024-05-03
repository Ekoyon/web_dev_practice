const password = prompt("please enter your password.");
// //conventional
//
// // length must be >= 6
// if (password.length >= 6) {
//     console.log("right format")
// } else{
//     console.log("Not enough")
// }
//
// //no space
// if (password.indexOf(' ') === -1) {
//     console.log('nice and good')
// } else {
//     console.log('do not add space')
// }
//
// // nesting conditionals
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('nice and good')
//     } else {
//         console.log('do not add space')
//     }
// } else{
//     console.log("Not enough");
// }

// truthiness and falsiness
const input = prompt('Enter Something!')

if (input) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}
// we don't have to compare with anything, if the value is null or undefined, output is falsey.

// logical AND
// There are 3 logical operators: AND, OR, NOT. lets start with AND
// WRITTEN USING '&&'

// Using the above example:
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('NIce and good');
} else {
    console.log('invalid')
}

// exercise
//Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.  Do not change anything other than the value of mystery on line 1!
const mystery = 'Paramed7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE


// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

// Logical OR
// represented with || in code.
//in index.js

// AND will run before OR.

// logical NOT
// represented by '!', it negates an expression. It flips truth to false and vise vera

let firstName = prompt('enter your first name');
if (!firstName) {
    firstName = prompt('enter your first name');
}

// you can also negate an entire expression with it
// for the age example in index.js, if i only wanted to target people not getting in for free:
const age = 45;

if (!((age >= 0 && age < 5) || age >= 65)) {
    console.log('you are not a baby or senior');
}

// SWITCH statement
// how it works: first keyword - switch; second keyword: case; third keyword: break.

const day = 2;
switch (day) {
    case 1 :
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    // if we wanted to match two cases:
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DON'T KNOW THAT")
}

// Arrays!!
// They're data structures that allow us store multiple values under one variable.
// A data structure is basically a collection of data
// Arrays allow us group data together. Eg a pill box for every day of the week. Every day having its on slot.
// Arrays are ordered collection of data. eg in the comment section of a post, some comments have to be at the top depending on some order.
// .length property tells you how many data is collated in the array.
// we can also put any data type in any array eg you could have strings, numbers, boolean in one array.

// Exercise
// Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!
// Define lottoNumbers below:
let lottoNumbers = [5, 55, 54, 4, 6, 65]

// in strings each character has an index while with arrays, it's each element.
// changing elements in an array
// eg given: let fullName = [Avase, Peace]
// having messed up the first element, I can say fullName[0] = 'Avose'

// Adding an extra element to an array
// eg: let beattles = ['paul', 'lazarus', 'kim']
// adding from the console: beattles[3] = 'hosea'

// exercise:
// Without touching line 1, please make the following changes:
//
// Unfortunately, I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)
//
// Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)
// solution:
// const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
//
// // YOUR CODE BELOW HERE:
// leaderboard[1]='Luna';
// leaderboard [3] = 'Draco';

// array methods
// stacks
// Push & Pop
// Push: add to end
let movieLine = ['tom', 'nancy'];
movieLine[2] = 'pablo';
movieLine.push('oliver');
// unlike with string methods, the array method updates the array.
// pop: remove from end
movieLine.pop()
// it doesn't take any arguments
// it just removes the last element.
let person = movieLine.pop();

// Queue
// Shift and unshift
// Shift removes from the beginning of the line
movieLine.shift();
// it also doesn't take arguments
let upwards = movieLine.shift();

// unshift
movieLine.push('olivia', 'samson', 'elena', 'gideon');
movieLine.unshift('VIP');
// it adds vip to the top of the array

// exercise
// Using the array methods we just learned...
//
// Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
//
// Add in "Saturn" at the very end of the planets array
//
// Add "Mercury" as the first element in the planets array.
//
// At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
//
// (This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)

// solution
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift('The Moon');
planets.push('Saturn');
planets.unshift('Mercury');

// concat
// This is basically joining arrays together to form a new third merged array. How does it work?
// You call one array and pass the second as the concat argument
planets.concat(person);

// includes()
// it returns boolean data type. It basically lets you know if the array has a value in it
const monthOfBirth = [May, June, August];
console.log(monthOfBirth.includes(August));
// returns true

// indexOf()
// works how indexof in strings works, gives an index to an element in an array
monthOfBirth.indexOf(May);

// reverse()
// This basically reverses an array's order
monthOfBirth.reduce();
// it's the same array but with a different order.

// slice()
// it gets you the remaining array from the index you selected. eg
planets.slice(1);
// gets you the array from index of 1 down. which is ['Venus', 'Earth', 'Mars', 'Jupiter'];
// you could add a stop index, but it doesn't add the index.
planets.slice(2,4);
// gives ['Earth', 'Mars']

// splice
// similar to slice but changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (according to MDN)
const months = ['Jan', 'March', 'April', 'June', 'July', 'August', 'September', 'Zazu','October', 'November', 'December'];
// you need to specify where to start, how many things to delete, what to insert. It is destructive to the existing array.
months.splice(7, 1);
// to insert
months.splice(1,0, 'February');
// it's best to edit the end of an array.

// sort()
// the default working of this is converting elements to strings and comparing with their utf-16 values, so most likely alphabetical
let scores = [123, 7, 40, 10]
scores.sort();
// it does this numerically according to the first number.

// === and == for arrays
// arrays are not equal at all.

// const and arrays
// with const, you can edit the content of the array in js. All it cares for is that the array isn't reassigned.

// nested arrays
const colors = [
    ['red', 'blue', 'green'],
    ['purple', 'piink', 'indigo']
]

// exercise
// I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.  Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available (it's set to null currently).  Please update the array element that is currently null, to instead be "Hugo". (Please don't directly change the code on line 6 where I'm initially setting it to null.  This is an exercise in accessing data in nested arrays!)

// solution:
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = 'Hugo';
