/*Note: usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support. Also note that the two styles are semantically incompatible.*/


const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  this.greeting = 'This is an inheritance event emit greeter!';
}

/*this is what connect the Greetr object to the EventEmitter object with .inherits(1,super1)
NOTE: it MUST be a Constructor.  Now Greeter can have all the functionality
of the Event Emitter js in node*/

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  //warning, magic string below!!!
  this.emit('greet');
}

let greeter1 = new Greetr();

greeter1.on('greet', function() {
  console.log('A greeting with an inherited event emitter object functionality (.on)!');
});

greeter1.greet();

/*NOTE 2: you can pass parameters into event functions too!*/

Greetr.prototype.greet = function(data) {
  console.log(`${this.greeting} and ${data}`);
  //warning, magic string below!!!
  this.emit('greet', data);
}

let greeter2 = new Greetr();

greeter2.on('greet', function(data) {
  console.log(`A greeting with an inherited event emitter object functionality (.on)! and ${data}`);
});

greeter2.greet('**DATA HERE**');

// ES6 example using class and extends
//
// const EventEmitter = require('events');
//
// class MyStream extends EventEmitter {
//   constructor() {
//     super();
//   }
//   write(data) {
//     this.emit('data', data);
//   }
// }
//
// const stream = new MyStream();
//
// stream.on('data', (data) => {
//   console.log(`Received data: "${data}"`);
// });
// stream.write('With ES6');
