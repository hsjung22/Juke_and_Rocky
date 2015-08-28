myAppModule.controller('sessionsController', function ($scope, $location, availabilityFactory){

	$scope.addSession = function (){
		availabilityFactory.addSession($scope.newSession, function (data) {
			if(data.error){
				$scope.error_message = data.error;
			} else {
				$location.path('/index');
				$location.replace();
			}
		});
	}
})