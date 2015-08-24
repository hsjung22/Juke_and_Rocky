var mongoose = require('mongoose');

var AvailabilitySchema = new mongoose.Schema({
	name: String,
	daycare_name: String,
	address: String,
	about: String,
	email: String,
	price: Number
});

mongoose.model("Availability", AvailabilitySchema);