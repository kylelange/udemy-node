/*Note: usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support. Also note that the two styles are semantically incompatible.*/

const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  /*to fix the data below being available to all objects that might inherit this one, you need to add the following: - it basically make it a super constructor that is pass by reference. I'm still hazy on this...*/
  EventEmitter.call(this);
  this.greeting = 'This is an inheritance event emit greeter!';
}

util.inherits(Greetr, EventEmitter);

/* NOTE: you can pass parameters into event functions too!*/

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
