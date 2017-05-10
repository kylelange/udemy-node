const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  let html = fs.readFileSync(__dirname + '/index-stream.html', 'utf8');
  res.end(html);

}).listen(1337, '127.0.0.1', () => {
  console.log('The app is listening at port 1337.');
});

//127.0.0.1 is the localhost IP address
