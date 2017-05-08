//this 'on' prototype pushes event listener functions into the this.events object
//this is an emitter template you can put any event emitter into so that it will run the instuctions
//that are pushed into the array from the on prototype (I think...)

function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
