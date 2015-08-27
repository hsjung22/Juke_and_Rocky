myAppModule.controller('editAvailabilityController', function ($scope, $routeParams, $location, availabilityFactory){

	availabilityFactory.getUser(function (data) {
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
			about: $scope.availability.about
		}
	})

	$scope.removeAvailability = function(availability) {
		availabilityFactory.removeAvailability(availability, function(data) {
			$scope.availabilities = data;
			$location.path('/index');
			$location.replace();
		})
	}

	$scope.updateAvailability = function (){
		availabilityFactory.updateAvailability($scope.editAvailability, function (data) {
			$scope.availabilities = data;
		})
	}

})