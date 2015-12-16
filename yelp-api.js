var express = require('express');
var yelpRouter = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
//var Yelp = require('yelp');
 
// var yelp = new Yelp({
//   consumer_key: 'xP7RInW8iBUfnxnKxFc4VQ',
//   consumer_secret: '4SH_FsYWwiEHoCoXWFnEUWwzxvM',
//   token: 'HrCzYsY-No4hXf4yvn2XbdaU0tjK2fpi',
//   token_secret: 'bo8WpWHcGMpB7PZ6zyU4I4wb5Ss',
// });
 
// See http://www.yelp.com/developers/documentation/v2/search_api 
// yelp.search({ term: 'find', location: 'location', limit: '1' })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });

// res.send(function with result)

yelpRouter.use(function(req, res, next) {
  console.log(req.originalUrl);
  next();
});

yelpRouter.post('/:term', function(req, res) {
  console.log(req.params.term);

  request('https://api.yelp.com/v2/search?term='+ req.params.term +'&location=San+Francisco', 
    function (error, response, body) {
  if (!error && response.statusCode == 200) {
      res.send(body);
      console.log(body);
    } else {console.log(error);}
  }); 
});

module.exports = yelpRouter;