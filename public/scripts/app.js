var app = angular.module('loginApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/partial-home.html',
      controller: 'mainController'
    })
    //authentication states//
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'authController'
    })

    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'mainController'
    })
    .state('logout', {
      url: '/logout'
    })
    .state('/auth/facebook', {
      url: '/auth/facebook',
      templateUrl: '/templates/facebook.html',
      controller: 'authController'
    })
    .state('success', {
      url: '/success/:user',
      templateUrl: '/templates/success.html',
      //$stateParams is an object that can take both path and query parameters from the URL.
      controller: function($scope, $stateParams){
        $scope.loggedUserName = $stateParams;
      }
    })
    .state('error', {
      url: '/error',
      templateUrl: '/templates/error.html'
    })



});
