var mongoose = require('mongoose');
var Availability = mongoose.model('Availability');

module.exports = {
	save: function(req,res) {
		var availability = new Availability(req.body);
		availability.save(function (err, results) {
			if (err) {
				console.log(err)
			} else {
				res.json(results)
			}
		})
	},

	show: function(req,res){
		Availability.find({}, function (err,results) {
			if(err){
				console.log(err);
			} else {
				res.json(results);
			}
		})
	},

	showOne: function(req,res){
		Availability.findOne({_id: req.params.id}, function (err,results) {
			if(err){
				console.log(err);
			} else {
				res.json(results);
			}
		})
	},

	destroy: function(req,res){
		Availability.remove(req.body, function (err, customers){
			if (err){
				console.log(err);
			} else {
				console.log('successfully deleted');
				res.end();
			}
		})
	}
};