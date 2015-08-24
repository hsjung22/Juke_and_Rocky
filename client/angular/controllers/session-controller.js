myAppModule.controller('sessionsController', function ($scope, availabilityFactory){
	$scope.addUser = function (){
		availabilityFactory.addUser($scope.newUser);
	}
})