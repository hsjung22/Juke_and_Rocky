myAppModule.factory('availabilityFactory', function ($http){
	var factory = {};
	var user;
	var availabilities = [];
	var availability = [];

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

	factory.removeAvailability = function (info, callback) {
		$http.post('/destroy', {_id:info._id}).success(function (){
			availabilities.splice(availabilities.indexOf(info),1);
			callback(availabilities);
		})
	}


	return factory;

})