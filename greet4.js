function Greet4() {
  this.greeting = 'this export sends the Constructer itself to be called new Greetr in the app.js file';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.export = Greet4;
