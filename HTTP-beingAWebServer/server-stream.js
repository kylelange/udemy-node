//since this html is run syncronously, if this site were popular, it would be slow - so a stream will allow us to chunk and make it async for faster performance.  Here, ther is no chuck modification, so it uses the default.

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  //we need a READABLE stream here:
  fs.createReadStream(__dirname + '/index-stream.html', 'utf8').pipe(res);

}).listen(1337, '127.0.0.1', () => {
  console.log('The app is listening at port 1337.');
});

//127.0.0.1 is the localhost IP address

//old way BEFORE the pipe:
// res.writeHead(200, {'Content-Type': 'text/html'});
// //we need a READABLe stream here:
// let html = fs.createReadStream (__dirname + '/index-stream.html', 'utf8');
// res.end(html);
