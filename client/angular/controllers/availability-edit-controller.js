myAppModule.controller('editAvailabilityController', function ($scope, $routeParams, $location, availabilityFactory){

	availabilityFactory.getSession(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	availabilityFactory.getAvailability($routeParams.id, function (data) {
		$scope.availability = data;
		$scope.editAvailability = {
			daycare_name: $scope.availability.daycare_name,
			address: $scope.availability.address,
			price: $scope.availability.price,
			email: $scope.availability.email,
			about: $scope.availability.about,
		}
	})

	$scope.removeAvailability = function(availability) {
		availabilityFactory.removeAvailability(availability, function (data) {
			if(data.error){
				$scope.remove_error_message = data.error;
			} else {
				$scope.availabilities = data;
				$location.path('/index');
				$location.replace();
			}
		})
	}

	$scope.updateAvailability = function (){
		availabilityFactory.updateAvailability($scope.editAvailability, function (data) {
			if(data.error){
				$scope.update_error_message = data.error;
			} else {
				$scope.availabilities = data;
				$location.path('/index');
				$location.replace();
			}
		})
	}

})