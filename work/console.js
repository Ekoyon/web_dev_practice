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

