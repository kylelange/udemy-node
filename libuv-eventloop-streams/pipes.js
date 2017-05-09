//an example of using pipes to make the stream run faster by reading/writing each chunck as it happens.

const fs = require('fs');
const zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/stream.txt');

let writable = fs.createWriteStream(__dirname + '/streamCopy.txt');

let gzip = zlib.createGzip();
let compressed = fs.createWriteStream(__dirname + '/stream.txt.gz');

readable.pipe(writable);

//this method chaning below is a common practice for READABLE or dual R/W streams
readable.pipe(gzip).pipe(compressed);

console.log('Info in stream.txt has been piped to streamCopy.txt and stream.text.gz.');

//REMEMBER the pipe will also return a destination.

//the .pipe will essentiall do a more robust version of the code below:


// readable.on('data', function(chunk) {
//   console.log(chunk.length);
//   console.log(chunk);
//   writable.write(chunk)
// });
