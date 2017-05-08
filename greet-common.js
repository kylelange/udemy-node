var greeting = 'This is the most common module set-up hello!';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
}

//the second greet in the key/value pair is the function.
