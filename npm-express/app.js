const moment = require('moment');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiController = require('./controllers/apiController.js')

//environment variables
let port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

//middleware example for file downloads:
//this will place all static files in a link tag you write in the .get('/') call
app.use('/assets', express.static(__dirname + '/public'));

//here is a template example using an ejs template
app.set('view engine', 'ejs');

//you can also write your own middleware: this one logs every url change!
//a very popular middleware is Passport(user authentication).
app.use('/', (req, res, next) => {
  console.log(`Request Url: ${req.url}`);
  //next() means run the next middleware
  next();
});

app.get('/', function(req, res) {
  //this uses the .set and ejs from express
  res.render('index', { ID: req.params.id });
});

//pre-express ejs way:
// app.get('/', function(req, res) {
//   res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /><body><h1>Hello from express.js!</h1></body></head></html>')
// });



//this example is very common in e-commerce/blogs.
//the :id means you can put anything after person/ and this route will get you there.
//this is pattern matching and there can be multiple values: /person/:id/:shoes

//express way with an added querystring to display/move around the url
app.get('/person/:id', function(req, res) {
  res.render('person', { ID: req.params.id, querystring: req.query.querystring });
});

app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank You for your information!');
  console.log(`${req.body.firstname} ${req.body.lastname}`);
});

app.post('/personjson', jsonParser, (req, res) => {
  res.send('Thank you for the JSON data.');
  console.log(`${req.body.firstname} ${req.body.lastname}`);
});

//RESTful Api example in the apiController.js file

//pre-express way
// app.get('/person/:id', function(req, res) {
//   res.send(`<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`)
// });

app.get('/api', function(req, res) {
  res.json({
    firstname: 'Arlo',
    lastname: 'Lange',
    faveteam: 'Arsenal'});
})

//apiController(app);

app.listen(port);

console.log(moment().format('ddd, hA'));
