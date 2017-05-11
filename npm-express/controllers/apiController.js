module.exports = function(app) {

  //a RESTful API example: the /person/ is easy to know what data it is,
  //and the .delete method is easy to understand too

  app.get('/api/person/:id', function(req, res) {
    //get info here from the database
    res.render('person', { ID: req.params.id, querystring: req.query.querystring });
  });

  app.post('/api/person', jsonParser, (req, res) => {
    //save new/edited info to the database, somehow

  });

  app.delete('/api/person:id', (req, res) => {
    //delete from the database
  });
}
