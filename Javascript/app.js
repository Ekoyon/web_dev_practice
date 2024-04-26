// const password = prompt("please enter your password.");
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