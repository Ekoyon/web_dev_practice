//Primitive types in js: Numbers, string, boolean, null and undefined

//things to note for numbers:
//we've got operators: +,-,*,%
//There's also NaN that stands for not a number. JS registers as a number, used for impossible operations like 0/0 and all
// so a number in JS but not a number.
// using the keyword 'typeof (value)' would give you the data type eg typeof 5 would output number on the console.

// variables are a way of assigning values in JS to come back and update it or use it in a couple of different ways.
// how to create variables: 'let (variable) = (value);
// Define a variable called myLuckyNumber and set it equal to 37.
// let myLuckyNumber = 37;
// Define a variable called octopusLimbs and set it equal to 8.
// let octopusLimbs = 8;

// updating a variable:
// given a variable 'let score = 5;' we could update by 'let score = score +5;' but a shorter syntax would be
// 'score += 5;'

//sidebar: difference between writing 'i++' and '++i' in code:
// the first (i++) increases, returns the value stored prior to the increment and then stores the increment
// the second (++i) increases, stores and returns the incremented value
// I'll be using ++i sha

// in JS, you can have a variable that changes type, some programming languages don't accept that ie if you saved a value as boolean, it must always be boolean eg typescript.

// we use const to create a constant variable. A variable that cannot the changed.
// we use var also, it's an old way of making variables and still works.
//
// Define a constant called boilingPointC and set it to 100.
// const boilingPointC = 100;
// Define a second constant called boilingPointF and set it to 212.
// const boilingPointC = 212;

// Boolean: true or false, using in logic and decisions

// RULES FOR SETTING IDENTIFIERS (variables etc) IN JS:
// - no spaces between said identifies
// - numbers cannot start an identifier
// - they're case-sensitive also

// Developers conventionally use camelcase method of stating identifiers, ie start with a small letter, begin a different word with a cap eg newWord.
// It is also very important to have good naming techniques so years later, you can understand what you did, or someone else can use your code.

// STRINGS!
// they're textual representation. They basically contain text wrapped in quotes to put them together.
// single or double quotes work, being consistent matters so use single quotes.
// you can't use them together though, like so: 'hello world", you'd get an error
// Every character in a string is indexed, ie associated with a number. The first number starting with 0.
// Why's it important? So we can access a particular number and work with it.
// Every string has a property '.length' to check how many characters are contained.
// You can add two strings together, this is called cancatination. You get a new string containing both values of strings. Eg 'lol' + 'lol' = 'lollol'
// You can't update one character at a time in a string variable, you can only overwrite that string.
// If you wanted to add a space, you can do "lol" + " " + "lol"
// String Methods.
// These are built in actions we can perform with individual strings
// they look like: string.method();
// eg: let msg = "you just disgust me";
// then: msg.toUpperCase(). This leaves the original message unchanged and makes a copy that it prints out which is uppercased.
// another is .trim()
// eg let userInput = "    hello my name is Lara Jameson"
// then: userInput.trim() eats up the space at the beginning or end of a string and not in the middle. ALso, it won't trim non-space characters

// chaining methods together
// you can do: userInput.trim().toUppercase(); and you'd get the result.
// eg: Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!
// // DON'T TOUCH THIS LINE!
// const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
//
// // YOUR CODE BELOW THIS LINE:
// let whisper = message.toLowerCase().trim();

// Methods with attributes
// eg .indexOf()
// if we wanted to check the index of a character, we use this and it gives the index of the first character that appears. if i had 'hahaha' as a string and wanted to search indexOf('h'), I'd get 0
// .slice()
// it cuts off a portion of the string, you parse in the indices of the point it should cut fom, and where to stop. The last bit is optional though, you can parse in only the beginning index.
// eg let humor = "hahahaha that is sooo funny"
// humor.slice(9);
// result is "that is sooo funny"
// to add endIndex, the parenthesis contains two arguments (0, 5)
// using negative numbers, starts from the end of the string eg -1 would give the last character in the string
// .replace()
// as the name implies, replaces something with something
// as in the earlier example, I could do humor.replace('hahahaha', 'lmao'), and it'll replace the former with the later. It'll only do it for the first instance of the set of characters or character.
// eg repeat(), for argument it takes the number of times you'd like to repeat the string

// eg:Use a string method to extract the "board" part of "skateboard"  (using the slice method)
//
// Replace the "o" in board with an "e" (using the replace method)
//
// Save the result in a variable called facialHair

// solution: let facialHair = word.slice(5).replace('o', 'e');

// Template literals
// in cases where cancatination should happen, it makes it seemless
// Relatively new (compared to js), they'resuper useful, allowing us create strings and inbed expressions in said strings, and that expression will be turned into a string.
// for it to work, use back-tick key (`...`)
// example: `hello ${2+6} equals a number`, it's not treated as a string but js evaluates the expression and prints result as a string.
// Instead cancatination, you just imbed variables directly into the expression to create the desired string.

//Now unto Null and Undefined type
// null represents intentional lack of value, that is creating eg a variable and setting it to nothing.
// undefined may be looked at as JSs way of saying 'I don't know'

//math object.
//contains properties and Methods for mathematical constants and functions.
// properties like mathematical constants: Math.PI Math.E
// methods like Math.round(), to round off numbers, Math.sin() to get the sin of a number, Math.floor() takes decimal and chop off the decimal, doesn't round it off o, just chop
// Math.ceil() rounds off decimal no matter what, qualified for rounding off or not. Math.random() generates random numbers between 0 and 1 but not including 1; but we can floor those randoms to get an integer that's random. eg Math.floor(Math.random() * 5)
// so you get randoms between 0 and 5, not including 5. To get from like 1, we add 1: Math.floor(Math.random() * 5) + 1
// we can also do Math.pwr(2,3) instead of 2 ** 3

//Exercises
// Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:
//
// die1: 3
//
// die2: 5
//
// roll: "You rolled a 3 and a 5. They sum to 8"
//// NO TOUCHING! (please)
// const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
// const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
//
// // YOUR CODE BELOW THIS LINE:
// let roll = `You rolled a ${die1} and ${die2}. They sum to ${die1 + die2}`

// Decision making in JS
// This basically means having different outcomes based off of various criterion.

//comparison operators.
// these aren't necessarily mathematical, they just compare a left side to a right side. They returns boolean value. They are:
// > greater than
// < less than
// <= less than or equal to
// >= greater than or equal to
// == equal to
// != not equal to
// === strictly equal to
// !== strictly not equal

// to know:
// console.log prints on the console
// alert
// prompt does a pop-up
// working in a file!!!
// console.log is used in a file that is disconnected from the console to print on the console.

// to add number to a integer in a variable: parseInt(variable) + 1

// running code in a file: index.js