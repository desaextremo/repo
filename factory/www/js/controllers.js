angular.module('lab61.Controllers', ['lab61.Factories'] )

.controller('lab61.ListController', function($scope,  information) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = information;
})

.controller('lab61.ViewController', function($scope, information) {

    $scope.data_information = information;
});