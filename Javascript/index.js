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
// then: msg.toUpperCase()
