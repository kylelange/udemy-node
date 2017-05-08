/*Node.js's emitter is a robust version of the same thing!
In fact: Look!  I can even use the same code exactly.*/

const Emitter = require('events');
const EmitterDone = require('events');

const emtr = new Emitter();
const emtrDone = new EmitterDone();

emtr.on('greet', function() {
  console.log('This is a greet emitter hello.');
});

emtr.on('greet', function() {
  console.log('Another event emitter greeting!');
});

emtr.on('done', function() {
  console.log('The Hellos are now done.');
});

emtrDone.on('test',() => {
  console.log('I lied.  Here is an ES6 hello.');
});

//CAUTION!  Magic strings (below) are not the best code option - hard to debug
console.log('Hello');
emtr.emit('greet');
emtr.emit('done');
emtrDone.emit('test');
