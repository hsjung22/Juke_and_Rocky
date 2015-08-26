var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
	_availability: {type: Schema.ObjectId, ref: 'Availability'},
	name: String,
	review: String,
	like: Number,
	date: {type: Date, default: new Date }
});

mongoose.model('Review', ReviewSchema);