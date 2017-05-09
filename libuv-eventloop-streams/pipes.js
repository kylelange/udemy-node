//an example of using pipes to make the stream run faster by reading/writing each chunck as it happens.

const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/stream.txt');

let writable = fs.createWriteStream(__dirname + '/streamCopy.txt');

readable.pipe(writable);
console.log('Info in stream.txt has been piped to streamCopy.txt.');
//the .pipe will essentiall do a more robust version of the code below:


// readable.on('data', function(chunk) {
//   console.log(chunk.length);
//   console.log(chunk);
//   writable.write(chunk)
// });
