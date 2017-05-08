
const extraGreet = require('./greet.js');
const greet = require('./greet/index.js');
const greetOver = require('./greet-override.js');
const greetConst = require('./greet3.js');

//Revealing Module Pattern : VERY common
const greetCommon = require('./greet-common.js').greet;
greetCommon();

//two variations of the same structure
const greet2 = require('./greet2.js');
const greetTwo = require('./greet2.js').greet;
greet2.greet();
greetTwo();

//can't copy objects, so the information will change both calls as they cascade
greetConst.greet();
greetConst.greeting = 'Changed constructor Hello'
const greetConst2 = require('./greet3.js');
greetConst2.greet();
//below module will now have the new information.
greetConst.greet();

//this greet4 calls the new Constructor in this file, here.
// const Greet4 = require('./greet4.js');
// const grtr = new Greet4();
// grtr.greet();


greetOver();
greet.english();
greet.spanish();

const person = {
  firstname: 'Arlo',
  greet: function() {
    console.log(`Hello, ${this.firstname}, I am a friend.`)
  }
};

person.greet();

//export.module example
extraGreet();

function Pers(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Pers.prototype.greet = function() {
  console.log(`${arlo.firstname} ${arlo.lastname} is a cool kid.`);
}

let arlo = new Pers('Arlo','Lange');

arlo.greet();

//pass by value
function change(b) {
  b = 2;
}

let a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(c) {
  c.prop1 = function () {};
  c.prop2 = {};
}

let d = {};
d.prop1 = {};
changeObj(d);
console.log(d);
//changeObj changes d to fit the values of c

//immediatly invoked function example - scope protects the info INSIDE the func.
let firstname = 'Karen';

(function(lastname) {

  let firstname = 'Kyle';
  console.log(`${firstname} ${lastname}`);

}('Lange'));

console.log(firstname);

//require with multiple functions
