myAppModule.controller('showController', function ($scope, $sce, $routeParams, availabilityFactory){

	availabilityFactory.addUser(user);

	availabilityFactory.getAvailability($routeParams.id, function (data) {
		$scope.availability = data;
		$scope.sendEmail = $sce.trustAsResourceUrl($scope.availability.email);
		$scope.someUrl = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyCK0Z2kaf_gVZnvpfByc5h-lfQCgp5tTg0&q=" + $scope.availability.address);
		$scope.editAvailability = {
			daycare_name: $scope.availability.daycare_name,
			address: $scope.availability.address,
			price: $scope.availability.price,
			email: $scope.availability.email,
			about: $scope.availability.about
		}
	});

	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
	});

	$scope.updateAvailability = function (){
		availabilityFactory.updateAvailability($scope.editAvailability, function (data) {
			$scope.availabilities = data;
		})
	}

	$scope.addReview = function (){
		availabilityFactory.addReview($scope.newReview, function (data) {
		})
		$scope.newReview = {};
	}

	$scope.removeAvailability = function(availability) {
		availabilityFactory.removeAvailability(availability, function(data) {
			$scope.availabilities = data;
		})
	}

	$scope.addLike = function (_id){
		availabilityFactory.addLike(_id, function() {
			availabilityFactory.getAvailability($routeParams.id, function(data) {
				$scope.availability = data;
			})
		})
	}

})