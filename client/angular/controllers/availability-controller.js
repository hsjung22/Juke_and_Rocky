myAppModule.controller('availabilitiesController', function ($scope, availabilityFactory){




	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
	});

	availabilityFactory.getAvailabilities(function (data) {
		$scope.availabilities = data;
	});



	$scope.addAvailability = function (){
		availabilityFactory.addAvailability($scope.newAvailability, function (data) {
			$scope.availabilities = data;
		})
		$scope.newAvailability = {};
	};



})