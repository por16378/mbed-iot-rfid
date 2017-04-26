// server.js
// load the things we need
var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
//var server = require('http').Server(app);
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
// cover page
app.get('/', function(req, res) {
    res.render('pages/main');
});
app.use("/",express.static(__dirname + "/"));
app.listen(port, function(){
    console.log('on localhost:8080');
});
//server.listen(8080);
//console.log('on localhost:8080');
