var mongoose = require('mongoose');
var fs = require('fs');


//connect to the database
mongoose.connect('mongodb://localhost/jukeandrocky');


//loads all of the model files
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function (file) {
	if(file.indexOf('.js') > 0) {
		//load each model file //require run the code/file
		require(models_path + '/' + file);
	}
})