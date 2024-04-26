const password = prompt("please enter your password.");
// length must be >= 6
if (password.length >= 6) {
    console.log("right format")
} else{
    console.log("Not enough")
}

//no space
if (password.indexOf(' ') === -1) {
    console.log('nice and good')
} else {
    console.log('do not add space')
}