//make my own object with a function constructor
function Greeter() {
  this.greeting = 'Hello from a Constructor structure!';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greeter();
