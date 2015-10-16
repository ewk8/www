var app = angular.module('superapp', ['ngRoute']);
			app.config(function($routeProvider) {
        		$routeProvider
            		.when('/too', {
                		templateUrl : 'pages/too.html',
                		controller  : 'mainController'
            	});
			});
			app.controller('mainController', function($scope) {
        		$scope.message = 'Everyone come and see how good I look!';
				$scope.kuku = 'I\'m coolllll!';
    		});