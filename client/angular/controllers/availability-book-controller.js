myAppModule.controller('bookAvailabilityController', function ($scope, $sce, $location, $routeParams, availabilityFactory){

	availabilityFactory.getSession(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	availabilityFactory.getAvailability($routeParams.id, function (data) {
		$scope.availability = data;
		$scope.sendEmail = $sce.trustAsResourceUrl($scope.availability.email);
	});

})