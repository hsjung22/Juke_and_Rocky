var express = require('express');
var app = express();
var session = require("express-session");
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(session({secret: 'codingdojorocks'}));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(process.env.PORT || 5000, function(listen) {
	console.log('cool stuff on: 5000');
});