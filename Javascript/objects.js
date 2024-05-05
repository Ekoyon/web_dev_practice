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