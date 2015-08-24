var availabilities = require('./../controller/availabilities.js');


module.exports = function(app) {

// availabilities
	app.post('/create', function (req, res) {
		availabilities.save(req,res);
	});

	app.get('/availabilities', function (req,res) {
		availabilities.show(req,res);
	});

	app.get('/availability/:id', function (req,res) {
		availabilities.showOne(req,res);
	});

	app.post('/destroy', function (req,res) {
		availabilities.destroy(req,res);
	});



};
