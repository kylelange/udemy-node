const obj = {
  name: 'Arlo Rune',
  //REMEMBER, no arrow functions in object literals...
  greet: function() {
    console.log(`Hey, ${this.name}!`);
  }
}

obj.greet();

//.call can change elements in the object literal above
obj.greet.call({name: 'Karen Lynn'});

//.apply works similarly - except if you have other parrameters, you need to pass them as an array: [params]
obj.greet.apply({name: 'Kyle Aaron'});

//this way you can borrow object literals and methods from other places in your code!
