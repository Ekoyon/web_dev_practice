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
