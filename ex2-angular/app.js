
    var gallery = angular.module('gallery', ['ngRoute']);

    // configure our routes
    gallery.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the thialand page
            .when('/thialand', {
                templateUrl : 'thailand.html',
                controller  : 'thaiController'
            })

            // route for the mexico page
            .when('/mexico', {
                templateUrl : 'mexico.html',
                controller  : 'mexicoController'
            })
        
            // route for the israel page
            .when('/israel', {
                templateUrl : 'israel.html',
                controller  : 'israelController'
            });
        
    });

    // create the controller and inject Angular's $scope
    gallery.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome to the (3) flags website!';
            $scope.image ='world.png';

    });

    gallery.controller('thaiController', function($scope) {
        $scope.image ='thai.png';
;
    });

    gallery.controller('mexicoController', function($scope) {
         $scope.image ='mex.png';
;
    });

    gallery.controller('israelController', function($scope) {
         $scope.image ='israel.png';
;
    });

             
    
    
    
    

