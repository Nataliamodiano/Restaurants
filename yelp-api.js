var express = require('express');
var yelpRouter = express.Router();
var request = require('request');
var Promise = require('bluebird');
var yelp = require('node-yelp');
yelpRouter.use(function(req, res, next) {
  console.log(req.originalUrl);
  next();
});
yelpRouter.get('/:term/:location/:radius/:sort', function(req, res) {
  var myYelp = yelp.createClient({
    oauth: {
      consumer_key: 'xP7RInW8iBUfnxnKxFc4VQ',
      consumer_secret: '4SH_FsYWwiEHoCoXWFnEUWwzxvM',
      token: 'HrCzYsY-No4hXf4yvn2XbdaU0tjK2fpi',
      token_secret: 'bo8WpWHcGMpB7PZ6zyU4I4wb5Ss'
    }
  });   
  myYelp.search(
    {
      term: req.params.term,
      location: req.params.location,
      limit: '10',
      sort: req.params.sort
  }).then(function (data) {
    res.send(data);
  }); 
});
module.exports = yelpRouter;