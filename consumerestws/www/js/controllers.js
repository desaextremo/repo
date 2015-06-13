angular.module('lab62.Controllers',
    [
        'ionic',
        'lab62.Services'
    ]
)

.controller('lab62.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };

        $scope.getListproduct = function() {

            $state.transitionTo('productList');

        };
})

.controller('lab62.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})

.controller('lab62.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        });

})
.controller('lab62.ListProductController', function($scope,listsproducts) {
        /*
          el nombre products_list debe coincidir con el especificado en el service 
          this.products_list = $resource('http://127.0.0.1:7070/api/v1/product/list');
        */
        $scope.listsProduct = listsproducts.products_list.query(function(data){

            console.log(data);
        });

});
