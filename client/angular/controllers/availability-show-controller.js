myAppModule.controller('showController', function ($scope, $sce, $routeParams, availabilityFactory){

	$scope.editAvailability = {
		daycare_name: "hi"
	}

	availabilityFactory.getAvailability($routeParams.id, function (data) {
		$scope.availability = data;
		$scope.someUrl = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyCK0Z2kaf_gVZnvpfByc5h-lfQCgp5tTg0&q=" + $scope.availability.address);

	});







	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
	});




	$scope.removeAvailability = function(availability) {
		availabilityFactory.removeAvailability(availability, function(data) {
			$scope.availabilities = data;
		})
	}



})