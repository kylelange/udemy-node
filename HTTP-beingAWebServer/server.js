const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('An .end hello world! /n');
}).listen(1337, '127.0.0.1');

//127.0.0.1 is the localhost IP address
