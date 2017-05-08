const Emitter = require('./emitter.js');
const EmitterDone = require('./emitter-done.js');

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

console.log('Hello');
emtr.emit('greet');
emtr.emit('done');
emtrDone.emit('test');
