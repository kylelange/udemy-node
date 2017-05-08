//ES6 style inheritance  ** you can also do this in any module!
'use strict';

//I can even pull Greetr in from an export like so from greetr-ES6export.js:
//const Greetr = require('./greetr-ES6export.js');

const EventEmitter = require('events');

class Greetr extends EventEmitter {
  //this takes the place of the Greetr constructor object
  constructor() {
    //super takes the place of util.inherit(1,2);
    super();
    this.greeting = 'This is an inheritance event emit greeteriwth ES6!';
  }
  //this takes the place of Greetr.prototype
  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    //warning, magic string below!!!
    this.emit('greet', data);
  }
 }

let greeter2 = new Greetr();

greeter2.on('greet', function(data) {
  console.log(`A greeting with an inherited event emitter object functionality (.on)!:${data}`);
});

greeter2.greet('**DATA HERE**');
