myAppModule.controller('createAvailabilityController', function ($scope, $location, availabilityFactory){

	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	$scope.addAvailability = function (){
		availabilityFactory.addAvailability($scope.newAvailability, function (data) {
			$scope.availabilities = data;
			$location.path('/index');
			$location.replace();
		})
		$scope.newAvailability = {};
	};

})