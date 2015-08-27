var myAppModule = angular.module('myApp', ['ngRoute']);


myAppModule.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/session.html'
	})
	.when('/index',{
		templateUrl: 'partials/index.html'
	})
	.when('/create',{
		templateUrl: 'partials/create.html'
	})
	.when('/show/:id',{
		templateUrl: 'partials/show.html'
	})
	.when('/:id/edit',{
		templateUrl: 'partials/edit.html'
	})

	.when('/bookings/:id/create/',{
		templateUrl: 'partials/book/create.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});