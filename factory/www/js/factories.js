angular.module('lab61.Factories', [] )

.factory('information', function() {

        var data = {};

        data.first_name = '';

        data.last_name = '';

        data.email = '';

        return data;
});