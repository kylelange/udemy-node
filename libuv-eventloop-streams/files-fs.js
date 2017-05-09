//a good example to look at how libuv works with node and V8
//uses greet.txt file

const fs = require('fs');

/*we are going to use a method on the fs object to handle files on our OS
SOOOO, we will be working with binary data.*/
//readFileSync takes 3 params: path, filename, encoding type.  It is sync.
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
//not sure why I can't interpolate above...
console.log(greet);

//HOWEVER, you often want Asychronous readFile becasue of all the requests users will give

//this example is async and REQUIRES a callback to be added to the params below
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(error, data) {
  console.log(data);
  //w.out 'utf8', I can use data.toString(); b/c I will get a buffer string.
});

//PRO TIP: It is a standard to do error-first callbacks in node

console.log('Done.');
