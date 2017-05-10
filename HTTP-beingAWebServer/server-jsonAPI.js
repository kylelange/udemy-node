//Goal: returning data as JSON

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  //the head content type must be changed:
  res.writeHead(200, {'Content-Type': 'application/json'});
  let obj = {
    firstname: 'Arlo',
    lastname: 'Lange'
  }

  //JSON needs to be converted.  This funct will do it.
  res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1', () => {
  console.log('The app is listening at port 1337.')
});

//127.0.0.1 is the localhost IP address
