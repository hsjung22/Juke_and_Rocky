myAppModule.controller('availabilitiesController', function ($scope, $location, availabilityFactory){

	availabilityFactory.getSession(function (data) {
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
		$location.path('/');
		$location.replace();
	}

})