

function greet(callback) {
  console.log('Hello from a callback!');
  const data = {
    name: 'Arlo Rune'
  };
  callback(data);
}

//the callback
greet(function(data) {
  console.log('The callback was invoked.');
  console.log(data);
});

//you can even give different callback
greet(function(data) {
  console.log('A different callback was invoked.');
  console.log(data.name);
});

/*REMEMBER: functions are first-class, so when you call greet(); and put another
function in the parenthesis, if runs the second
function where you say to callback(); from the first function.*/
