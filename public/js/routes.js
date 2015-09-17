angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/templates/home.html',
			controller: 'MainController'
		}).
		otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
}]);