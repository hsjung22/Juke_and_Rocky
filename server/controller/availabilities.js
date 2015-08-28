var mongoose = require('mongoose');
var Availability = mongoose.model('Availability');

module.exports = {
	save: function(req,res) {

		if(!req.body.daycare_name ||
			!req.body.address ||
			!req.body.price ||
			!req.body.email ||
			!req.body.about)
		{
			res.json({error: "Fields cannot be empty!"});
		}
		else {
			var availability = new Availability(req.body);
			availability.save(function (err, results) {
				if (err) {
					res.end();
				} else {
					res.json(results)
				}
			})
		}
	},

	show: function(req,res){
		Availability.find({}, function (err,results) {
			if(err){
				res.end();
			} else {
				res.json(results);
			}
		})
	},

	showOne: function(req,res){
		Availability.findOne({_id: req.params.id}).populate('reviews').exec(function (err, results) {
			if(err){
				res.end();
			} else {
				res.json(results);
			}
		})
	},

	destroy: function(req,res){
		Availability.remove({_id:req.body._id}, function (err, results){
			if (err){
				res.end();
			} else {
				console.log('successfully deleted');
				res.end();
			}
		})
	},

	update: function(req,res){

		if(!req.body.daycare_name ||
			!req.body.address ||
			!req.body.price ||
			!req.body.email ||
			!req.body.about)
		{
			res.json({error: "Fields cannot be empty!"});
		} else {
			Availability.update({_id: req.params.id}, req.body, function (err, updates){
				if(err){
					res.end();
				} else {
					console.log('successfully updated');
					res.json(updates);
				}
			})
		}
	}
};