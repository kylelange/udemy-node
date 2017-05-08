const person = {
  firstname: '',
  lastname: '',
  //cannot use arrow function here b/c of the use of an object literal: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/
  greet: function() {
    return `${this.firstname} ${this.lastname}`;
  }
}

//creates a new object
let kyle = Object.create(person);

//now I can write in values:
kyle.firstname = 'Kyle';
kyle.lastname = 'Lange';
console.log(kyle.greet());


let arlo = Object.create(person);
arlo.firstname = 'Arlo';
arlo.lastname = 'Lange';
console.log(arlo.greet());
