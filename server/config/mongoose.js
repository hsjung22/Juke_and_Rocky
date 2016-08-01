var http = require ('http');
var mongoose = require('mongoose');
var fs = require('fs');


//connect to the database
// var uri = "mongodb://heroku_wb5n0r89:gb7jqin91jg4ctkeliaqlu2qru@ds139715.mlab.com:39715/heroku_wb5n0r89"
var uri = process.env.MONGOLAB_URI || 
		  process.env.MONGOHQ_URL ||
		  "mongodb://heroku_wb5n0r89:gb7jqin91jg4ctkeliaqlu2qru@ds139715.mlab.com:39715/heroku_wb5n0r89" ||
		  'mongodb://localhost/jukeandrocky';


mongoose.connect(uri, function (err, res) {
  if (err) {
  	console.log ('ERROR connecting to: ' + uri + '. ' + err);
  } else {
  	console.log ('Succeeded connected to: ' + uri);
  }
});


//loads all of the model files
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function (file) {
	if(file.indexOf('.js') > 0) {
		//load each model file //require run the code/file
		require(models_path + '/' + file);
	}
})