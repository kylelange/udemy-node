const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  //to have your OS translate the attached html file in to machine code, you need to do the following...
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  let message = 'Hello World from some HTML attached to some serve-side node.js!';
  //here is how you change {message} with .replace(); below:  This is called 'templating'
  html = html.replace('{message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1', () => {
  console.log('The app is listening at port 1337.')
});

//127.0.0.1 is the localhost IP address
