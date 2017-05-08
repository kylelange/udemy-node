const EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
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
