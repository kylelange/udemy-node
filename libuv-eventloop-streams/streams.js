//how to use a stream in node.js

/* Why do you need this?  This is how async works - you only get chuncks of info at a time.
That is why you can WATCH the movie as you download it!*/

const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/stream.txt', {encoding: 'utf8', highWaterMark: 1024});

let writable = fs.createWriteStream(__dirname + '/streamCopy.txt');

//I can use the event emitter .on becasue of prototypal inheritance: Stream constr. includes Event constr.
//REMEMBER: 'data' is the magicword the event emitter is listening for in node code, somewhere.
readable.on('data', function(chunk) {
  console.log(chunk.length);
  /*when you put in the highWaterMark, you can see your text + spots where you hit agins the top end of your buffer.  Esentially, you see your CHUNKS!*/
  console.log(chunk);
  writable.write(chunk)
});

//I wonder what the default size of the buffer is?  Default: 64kb
/*want to reduce the memory it takes to run your app/use your app:
adjust the chunk/buffer size with highWaterMark.*/
