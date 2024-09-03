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

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let sum = 0;

  for (let i = 0; i < marks.length; i++){
    sum = sum + marks[i]
  }
  return Math.floor(sum/marks.length);

}

//  Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (player1, player2) => {
  if (player1 === 'rock'){
    if (player2 === 'rock'){
      return "Draw!"
    } 
    if (player2 === 'paper') {
      return "Player 2 won!"
    } else if (player2 === 'scissors') {
      return "Player 1 won!"
    }
  }
  
  if (player1 === 'paper'){
    if (player2 === 'rock'){
      return "Player 1 won!"
    } 
    if (player2 === 'paper') {
      return "Draw!"
    } else if (player2 === 'scissors') {
      return "Player 2 won!"
    }
  }
  
  if (player1 === 'scissors'){
    if (player2 === 'rock'){
      return "Player 2 won!"
    } 
    if (player2 === 'paper') {
      return "Player 1 won!"
    } else if (player2 === 'scissors') {
      return "Draw!";
    }
  }
};

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
function removeChar(str){
  return str.substr(1, str.length -2)
 
 };

 // You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let positiveSum = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positiveSum = positiveSum + arr[i];
    }
  } return positiveSum;
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){
  let results;
  switch(operation){
      case '+':
      results = value1 + value2;
      break;
      case '-':
      results = value1 - value2;
      break;
      case '/':
      results = value1 / value2;
      break;
      case '*':
      results = value1 * value2;
      break;
  }
  return results;
}

// Write a function to split a string and convert it into an array of words.
function stringToArray(string){
  return string.split(" ");
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  return s.repeat(n);
}

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
function maps(x){
  const modified = x.map(function(element){
    return element * 2;
  });
    return modified;
  }

  // remove string spaces
  function noSpace(x){
    const arr = x.split(" ");
    let newArr = [];

    for(let i = 0; i < x.length; i++){
        const trimmedStr = arr[i].trim();
        newArr.push(trimmedStr);
    }
    const finalStri = newArr.join("");
    return finalStri;
  }

//   A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
  
  if (bullets >= dragons * 2){
    return true;
  } else {
    return false;
  }
  }

  // I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

  // P.S. Each array includes only integer numbers. Output is a number too.  
function arrayPlusArray(arr1, arr2) {
  let add = 0
  for (let i =0; i < arr1.length; i++){
    const arr1Value = arr1[i];
    const arr2Value = arr2[i];
    
    const addition = arr1Value + arr2Value;
     add = add + addition;
  }
  return add
}
