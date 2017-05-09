//utf8 is the default
const buffer = new Buffer('hello','utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
//We can even just get a single letter in unicode:
console.log(buffer[2]);

//you can overwrite letters in the 5 character buffer:
buffer.write('wo');
console.log(buffer.toString());
