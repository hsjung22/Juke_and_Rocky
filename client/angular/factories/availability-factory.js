myAppModule.factory('availabilityFactory', function ($http){
	var factory = {};
	var user;
	var availabilities = [];
	var availability = [];
	var route_id;

	factory.addUser = function(newUser) {
		user = newUser;
	}

	factory.getUser = function(callback){
		callback(user);
	}

	factory.getAvailabilities = function (callback) {
		$http.get('/availabilities').success(function (output) {
			availabilities = output;
			callback(availabilities);
		})
	}

	factory.getAvailability = function (id, callback) {
		route_id = id;
		$http.get('/availability/'+id).success(function (output) {
			availability = output;
			callback(availability);
		})
	}

	factory.addAvailability = function (availability, callback){
		availability.name = user;
		$http.post('/create', availability).success(function (res) {
			availabilities.push(res);
			callback(availabilities);
		})
	}

	factory.updateAvailability = function (update, callback){
		update.name = user;
		$http.put('/update/'+route_id, update).success(function (res) {
			availabilities.splice(availabilities.indexOf(update),1);
			availabilities.push(res);
			callback(availabilities);
		})
	}

	factory.removeAvailability = function (info, callback) {
		$http.post('/destroy', {_id:info._id}).success(function (){
			availabilities.splice(availabilities.indexOf(info),1);
			callback(availabilities);
		})
	}

	factory.addReview = function (review, callback){
		review.name = user;
		review.like = 0;
		$http.post('/create_review/'+route_id, review).success(function (res) {
			availability.reviews.push(res)
		})
	}

	factory.addLike = function(info, callback){
		$http.put('/likes/', {_id:info}).success(function (res) {
			callback(res);
		})
	}

	return factory;

})