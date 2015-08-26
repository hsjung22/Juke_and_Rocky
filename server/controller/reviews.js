var mongoose = require('mongoose');
var Availability = mongoose.model('Availability');
var Review  = mongoose.model('Review');

module.exports = {

	save: function(req,res){
		Availability.findOne({_id: req.params.id}, function(err, availability){
			var review = new Review(req.body);
			review._availability = availability._id;
			availability.reviews.push(review);
			review.save(function (err, results){
				availability.save(function (err){
					if (err) {
						console.log(err);
					} else {
						res.json(results);
					}
				})
			})
		})
	},

	updateLike: function(req,res){
		Review.update(req.body, {$inc: {'like': 1}}, function (err, likes) {
			if (err) {
				console.log(err);
			} else {
				res.json(likes);
			}
		})
	}
};