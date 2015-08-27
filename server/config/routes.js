var availabilities = require('./../controller/availabilities.js');
var reviews = require('./../controller/reviews.js');

module.exports = function(app) {

//user session
	app.post('/session', function (req, res){
		req.session.name = req.body.newUser;
		res.end();
	});

	app.get('/session', function (req,res){
		res.json(req.session.name)
	});

	app.post('/session_destroy', function (req,res){
		req.session.destroy();
		res.end();
	});

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

	app.put('/update/:id', function (req,res){
		availabilities.update(req,res);
	});

//reviews
	app.post('/create_review/:id', function (req,res){
		reviews.save(req,res);
	});

	app.get('/reviews/:id', function (req,res){
		reviews.showOne(req,res);
	});

	app.put('/likes/', function (req,res){
		reviews.updateLike(req,res);;
	})


};
