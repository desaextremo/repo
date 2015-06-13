// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lab58', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('first', {
          url: '/first',
          templateUrl: 'views/first.html'
      })
      .state('second', {
        url: '/second',
        templateUrl: 'views/second.html'
      })
      .state('third', {
        url: '/third',
        templateUrl: 'views/third.html'
      });
  $urlRouterProvider.otherwise('/');
})

.controller('lab58.Controller', ['$scope', function($scope){
    $scope.third = "inicie el modelo";  
    
}]);
