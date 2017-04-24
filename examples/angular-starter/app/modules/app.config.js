(function () {
    "use strict";

	var routes = [
        {
            'key': 'home',
            'value': {
                'url': '/home',
                'templateUrl': 'modules/home/home.html',
                'controller': 'HomeController'
            }
        },
        {
            'key': 'about',
            'value': {
                'url': '/home',
                'templateUrl': 'modules/home/home.html',
                'controller': 'HomeController'
            }
        }
	];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html',
                controller: 'HomeController'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
                // we'll get to this in a bit
            });

        $locationProvider.html5Mode(true);
    }

    angular.module('app').config(config);
})();

