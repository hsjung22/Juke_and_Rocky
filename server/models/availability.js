var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AvailabilitySchema = new mongoose.Schema({
	name: String,
	daycare_name: String,
	address: String,
	about: String,
	email: String,
	price: String,
	date: {type: Date, default: new Date},
	reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

mongoose.model("Availability", AvailabilitySchema);