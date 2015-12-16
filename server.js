var express = require('express');
var app = express();
var yelp = require('./yelp-api.js');

app.use(express.static('./'));

app.use('/yelp-api', yelp);

app.listen(8080);
console.log('server');