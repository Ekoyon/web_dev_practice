// Object Literal
// Our second data structure
// you can store anything on there, having a key and value (excited about this one)
// lets make our first

const Ise = {
    firstName: 'Iseoluwa',
    lastName: 'Onadipe'
}

// You can store anything as a value

// exercise
// Please define a new variable called product.  It should be an object literal with the following properties:
//
// name - set to the string "Gummy Bears"
//
// inStock - set to the boolean true
//
// price  - set to the number 1.99
//
// flavors - set to an array of at least three strings like ["grape", "apple", "cherry"]

// solution:
// Your code goes in here:
const product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
}

// accessing data out of objects. eg
Ise["firstName"]
// this is how we access values of keys.
// second way:
Ise.firstName

// what happens when we make an object?
const years = {1999: 'Meh',
    2020: 'Iconic'
}
// every key is turned into a string and that's why we can do Ise["firstName"]; without the quotes, it won't work cause it expects a variable name when declared with quotes

// exercise
// Your task to is to create a variable named fullAddress that points to a string using the information from restaurant.
//
// fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object. Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.
//
// To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
//
// "64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string (keep an eye on the commas and/or spaces between the values and match that too!)

// solution
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
restaurant[fullAddress];

// Modifying objects
const midterms = {danielle: 96, thomas: 56}
// iff i wanted to change Thomas' grade
midterms.thomas = 65;

// shikina.

// nesting arrays and objects
// let's say we wanted to make a range of values and keys but with more properties.
const comments = [
    {username: 'Tammy', text: 'this is soo funny', likes: 6},
    {username: 'Ken', text: 'you all do the wildest shit', likes: 9}
]
// how would I access Ken's comment? by comments[1].text
// LOOPS
// Whole point of them is to have a repeat on code written, so instead of typing out the code over and over again, you can just do this more seamlessly

// For loops
// eg
for ( let i = 1; i <= 10; i++){
    console.log(i);
}

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
for (let i = 100; i >= 10; i -= 10) {
    console.log(i);
}
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
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Yuto', 'Sakute', 'Jack', 'Kim']
]
// if I wanted to print names according to seating arrangement, one after another:
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`)
    for (let j =0; j < row.length; j++){
        console.log(j);
    }
}
