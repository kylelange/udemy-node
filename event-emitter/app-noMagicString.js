const Emitter = require('events');
const EmitterDone = require('events');
const configNoString = require('./config-noString.js').events;

const emtr = new Emitter();
const emtrDone = new EmitterDone();

emtr.on(configNoString.GREET, function() {
  console.log('This is a greet emitter hello.');
});

emtr.on(configNoString.GREET, function() {
  console.log('Another event emitter greeting!');
});

emtr.on(configNoString.DONE, function() {
  console.log('The Hellos are now done.');
});

emtrDone.on(configNoString.TEST,() => {
  console.log('I lied.  Here is an ES6 hello.');
});

/*this is better b/c now I have a code trail I
 can follow to the opject in the config-noStrong.js file!*/
console.log('Hello');
emtr.emit(configNoString.GREET);
emtr.emit(configNoString.DONE);
emtrDone.emit(configNoString.TEST);
