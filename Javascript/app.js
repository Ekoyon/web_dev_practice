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

// Logical OR