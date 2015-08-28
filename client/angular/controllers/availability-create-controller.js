myAppModule.controller('createAvailabilityController', function ($scope, $location, availabilityFactory){

	availabilityFactory.getSession(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	$scope.addAvailability = function (){
		availabilityFactory.addAvailability($scope.newAvailability, function (data) {
			if(data.error){
				$scope.error_message = data.error;
			} else {
				$scope.availabilities = data;
				$location.path('/index');
				$location.replace();
			}
		})
		$scope.newAvailability = {};
	};

})