(function () {
    "use strict";
	
	var routes = [
		{
			'key': 'app.home',
			'value': {
				'url': '/home',
				'templateUrl': 'modules/home/home.html',
				'controller': 'HomeController',
				'roles': []
			}
		}
	];
	
	function config(routeResolverProvider) {
		routeResolverProvider.register('app.home', routes);
	}
	
    angular.module('app.home').config(config);
})();
