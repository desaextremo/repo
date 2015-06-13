angular.module('lab60.Controllers', [])

.controller('lab60.HomeController', function($scope){

	$scope.home = 'Hello World';
})

.controller('lab60.AboutController', function($scope, $ionicModal){

	$ionicModal.fromTemplateUrl('templates/about-modal.html', {

        scope: $scope,
        animation: 'slide-in-right'

    }).then(function(modal) {

        $scope.modal = modal;

    });

    $scope.openModal = function() {

        console.log( 'Modal OK' );

        $scope.modal.show();

    };


    $scope.closeModal = function() {

        console.log( 'Modal OK' );

        $scope.modal.hide();

    };
})

