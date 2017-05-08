//ES6 syntax practice

/* NOTE: https:nodejs.org/api/events.html "It is possible to use ES6 Arrow Functions as listeners, however, when doing so, the this keyword will no longer reference the EventEmitter instance:"*/

/*WARNING: Cannot arrow functions when not writing prototypes: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/*/

function EmitterDone() {
  this.events = {};
}

EmitterDone.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

EmitterDone.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach((listener) => {
      listener();
    });
  }
}

module.exports = EmitterDone;
