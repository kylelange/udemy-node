const moment = require('moment');
const express = require('express');
const app = express();

//environment variables
let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('<html><head><body><h1>Hello from express.js!</h1></body></head></html>')
});

app.get('/api', function(req, res) {
  res.json({
    firstname: 'Arlo',
    lastname: 'Lange',
    faveteam: 'Arsenal'});
})

app.listen(port);

console.log(moment().format('ddd, hA'));
