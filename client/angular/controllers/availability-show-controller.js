myAppModule.controller('showAvailabilityController', function ($scope, $sce, $location, $routeParams, availabilityFactory){

	availabilityFactory.getUser(function (data) {
		$scope.currentUser = data;
		if($scope.currentUser == ''){
			$location.path('/');
			$location.replace();
		}
	});

	availabilityFactory.getAvailability($routeParams.id, function (data) {
		$scope.availability = data;
		$scope.someUrl = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyCK0Z2kaf_gVZnvpfByc5h-lfQCgp5tTg0&q=" + $scope.availability.address);
	});

	$scope.addReview = function (){
		availabilityFactory.addReview($scope.newReview, function (data) {
		})
		$scope.newReview = {};
	}

	$scope.addLike = function (_id){
		availabilityFactory.addLike(_id, function() {
			availabilityFactory.getAvailability($routeParams.id, function(data) {
				$scope.availability = data;
			})
		})
	}

})