myAppModule.controller('availabilitiesController', function ($scope, $location, availabilityFactory){

	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	availabilityFactory.getAvailabilities(function (data) {
		$scope.availabilities = data;
	});

	$scope.removeSession = function() {
		availabilityFactory.removeSession();
	}

})