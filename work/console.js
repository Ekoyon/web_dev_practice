const randomClickFunction = function () {
    const colors = ["green", "lemon", "blue", "purple", "red", "orange", "yellow", "black", "grey", "white"];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  const randomColor = colors[randomIndex];
  
  htmlBody.style.backgroundColor = randomColor;
  
  console.log("The user clicked and set the colort to" + randomColor);
  }

  randomClickFunction();
  htmlBody.onClick = randomClickFunction();

  const myDate = new Date();
  myDate.toISOString()

  const anObject = {prep1: 20, prop2:50}
  // ways to grap an value from a declared object:
  anObject.prep1
  //or
  anObject['prep1'];

  //challenge1
  const myBoolean = true;
const myString = 'hello world';
let firstNumber = 20;
let secondNumber = 40;
let myArray = [myBoolean, myString];
let myObject = {firstProperty: myArray, sumProperty: firstNumber+secondNumber};


let x = 10
// if we wanted to add 5 to x:
x =x + 5;
// shorter way to do this:
x += 5;

//comparason operators
// ===, ==, !==, !=, >, <, =>, =<
// using collonary operators
const result = 20 === 20 ? 'values match' : 'values do not match';
// this (above) is equal to:
let resultVar;
if (20 === 20) {
  resultVar = 'values match';
} else {
  resultVar = "values don't match"
}

// logical operators: &&, ||, !
20 === 20 && 10 === 10;
// true
// it handles both expressions so
20 === 20 && 10 === 12;
// false

20 === 20 || 10 === 12
// true
// it requires only one statement to be true

// conditionals
if ('some string' === "another string") {
  console.log("equal strings");
} else {
  console.log("they're not requal");
}
// switch case
// assuming we have an if-else statement like so:

if (randomColor === "orange") {
  console.log ("the color's orange"); 
  } else if (randomColor === 'green') {
    console.log("the color's green");
  } else if (randomColor === "red") {
    console.log ("the color's red")
  } else {
    console.log ("it's some color");
  }

  // the same code in switch case
  switch (randomColor) {
    case 'orange':
      console.log ("the color's orange");
      break;
    case 'green':
      console.log ("the color's green");
      break;
    case 'red':
      console.log ("the color's red");
      break;
    default:
      console.log ("it's some color");
  }

  //loops
  const blog = [
    {
      title: "what is javascript?",
      author: "Avose Peace",
      publishDate: "May 15, 2019",
      content: "lots of words"
    },
    {
      title: "Loops",
      author: "Avose Peace",
      publishDate: "September 3, 2024",
      content: "words and codes"
    }
  ];

  // for loops
  for (let i = 0 < blog.length; i++) {
    const postTitle = blog[i].title;
    const postAuthor = blog[i].author;
    const postContent = blog[i].content;

    // print the variables
    console.log(postTitle);
    console.log(postAuthor);
    console.log(postContent);
  }

// functions
function myFunction (){
  console.log("Hello world, my first function!!!!");
}
myFunction();

// you could rewrite this a bit simpler:
(function anotherFunction (){
  console.log ("hola");
}) ();

// parameters and arguments
function mySecondFunction (someNumber, someString) {
  console.log(someNumber);
  console.log(someString);
}
mySecondFunction(30, "hey hey hey");

// scope
// basically the range that a line of code or a variable has in the grand scheme of things
// ways to write a function:
// obviously the ones listed up above, and
const trialFunction = justTrial () {
  console.log("trying out stuff");
}

// arror functions
const arrorFunction = () => {
  console.log("an arrow function, wow");
}

arrorFunction();
// it improves readability

// return values
const myArrorFunction = () => {
  const i = 20;
  return i;
}
const resultS = myArrorFunction();

resultS;

//objects and functions
function jsFunction() {
  return 20;
}
jsFunction();

const myObj = {
  prop1: 50,
	prop2: jsFunction
}

// methods
// string
const aString = "Back"

aString.replace('k', 'h');
// to actually alter the stored string:
const newString = aString.replace('k', 'h');

//toUpperCase
aString.toUpperCase();

// switching a string to an array
const str = "hello world";
str.toUpperCase().split(" ")
// the result is: Array [ "HELLO", "WORLD" ]

// array methods
const strringToArray = str.toUpperCase().split(" ");
result.indexOf("WORLD")
// the result is 1

// coding challenges using code wars
// reversing a string
// we first convert to an array before we do the reverse and then back
function solution(str){
  str.split("").reverse().join()
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if(number % 2 === 0){
    return "Even";
  } else {
    return "Odd";
  }
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep) {
  let count = 0;
  for(let i = 0; i < sheep.length; i++) {
    if(sheep[i] === true) {
      count += 1;
    }
  }
  return count;
  // TODO
}

// Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowelCount = 0
   const arr = str.split("");
  
  for(let i = 0; i< arr.length; i++){
    switch (arr[i]){
        case 'a':
        vowelCount++;
        break;
        case 'e':
        vowelCount++;
        break;
        case 'i':
        vowelCount++;
        break;
        case 'o':
        vowelCount++;
        break;
        case 'u':
        vowelCount++;
      
        
       
    }
  }
  return vowelCount;
}

// Jenny's secret message
// mine:
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0){
    return true;
  } else {
    return false;
  }
}

//  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if(num < 0){
    return num;
  } else {
    return num * -1;
  }
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests
var summation = function (num) {
  let sum = 0
for (let i = 1; i <= num; i++){
  sum += i ;
} return sum;
}