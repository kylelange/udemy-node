//update this commented out 'old' code below to ES6 classes:

//OLD CODE:

// function Person(first, last) {
//   this.first = first;
//   this.last = last;
// }
//
// Person.prototype.greet = function() {
//   console.log(`Hello, ${this.first} ${this.last}. You rock those ES6 classes!`)
// }
//
// let arlo = new Person('Arlo', 'Rune');
// arlo.greet();
//
// let karen = new Person('Karen', 'Lynn');
// karen.greet();
//
// console.log(arlo.__proto__);
// console.log(karen.__proto__);
// console.log(arlo.__proto__ ===  karen.__proto__);



//ES6classes-style:

/*makes your JS follow more syntax rules. Good for deployed code. sometimes browsers are picker with new code and will only run in if you do things like: 'use strict'.*/
'use strict';


class Person {
  //the new way to write Person constructors value this.placeholders
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  //the new way to Person.prototype:
  greet() {
    console.log(`Hello, ${this.first} ${this.last}. You rock those ES6 classes!`);
  }
}

let arlo = new Person('Arlo', 'Rune');
arlo.greet();

let karen = new Person('Karen', 'Lynn');
karen.greet();

console.log(arlo.__proto__);
console.log(karen.__proto__);
console.log(arlo.__proto__ ===  karen.__proto__);
