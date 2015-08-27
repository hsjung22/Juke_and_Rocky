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
		Availability.findOne({_id: req.params.id}).populate('reviews').exec(function (err, results) {
			if(err){
				console.log({err: err});
			} else {
				res.json(results);
			}
		})
	},

	destroy: function(req,res){
		Availability.remove(req.body, function (err, results){
			if (err){
				console.log(err);
			} else {
				console.log('successfully deleted');
				res.end();
			}
		})
	},

	update: function(req,res){
		Availability.update({_id: req.params.id}, req.body, function (err, updates){
			if(err){
				console.log(err);
			} else {
				console.log('successfully updated');
				res.json(updates);
			}
		})
	}
};