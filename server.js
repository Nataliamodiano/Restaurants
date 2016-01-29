var express = require('express');
var app = express();
var yelp = require('./yelp-api.js');

app.use(express.static('./'));

app.use('/yelp-api', yelp);

var port = process.env.PORT || 8080;
app.listen(port);