myAppModule.factory('availabilityFactory', function ($http){
	var factory = {};
	var availabilities = [];
	var availability = [];
	var route_id;
	var user;

//Session
	factory.addSession = function(newUser, callback) {
		$http.post('/session', {newUser: newUser}).success(function (res) {
			callback(res);
		})
	}
	
	factory.getSession = function(callback){
		$http.get('/session').success(function (output) {
			user = output;
			callback(user);
		})
	}

	factory.removeSession = function () {
		$http.post('/session_destroy').success(function (){
			user = '';
		})
	}


//Availability
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
		if(!availability){
			availability = {};
		}
		availability.name = user;
		$http.post('/create', availability).success(function (res) {
			if(res.error){
				callback(res);
			}
			else{
				availabilities.push(res);
				callback(availabilities);
			}
		})
	}

	factory.updateAvailability = function (update, callback){
		if(!update){
			update = {};
		}
		update.name = user;
		$http.put('/update/'+route_id, update).success(function (res) {
			if(res.error){
				callback(res);
			} else {
				availabilities.splice(availabilities.indexOf(update),1);
				availabilities.push(res);
				callback(availabilities);
			}
		})
	}

	factory.removeAvailability = function (info, callback) {
		$http.post('/destroy', info).success(function (res){
			if(res){
				callback(res);
			} else {
				availabilities.splice(availabilities.indexOf(info),1);
				callback(availabilities);
			}
		})
	}


//review + like
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