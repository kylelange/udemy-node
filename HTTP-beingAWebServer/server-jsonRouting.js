//Goal: connect a URL to different sets of content (with an error for all other cases).

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  //with these conditional statements, I can sent the user to diff areas of my site
  if(req.url === '/') {
    fs.createReadStream(__dirname + '/index-route1.html').pipe(res);
  }

 else if(req.url === '/api') {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let obj = {
    firstname: 'Arlo',
    lastname: 'Lange'
  };
  res.end(JSON.stringify(obj));
  }

  else {
  res.writeHead(404);
  res.end('404:Page not found.');
  }

}).listen(1337, '127.0.0.1', () => {
  console.log('The app is listening at port 1337.')
});

//127.0.0.1 is the localhost IP address
