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