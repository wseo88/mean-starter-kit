// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// configuration files
//var db = require('./config/database');

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database (commented out after you enter in your own credentials)
// mongoose.connect(database.url) 

// get all data/stuff of the body (POST parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use('/static', express.static(__dirname + '/public'));

// routes ==================================================
var routerMain = require('./routers/index.js')(express);
var routerAPI = require('./routers/api.js')(express);
app.use('/api', routerAPI);
app.use('/', routerMain);

// start app ===============================================
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('magic is happening at http://%s:%s', host, port);
});