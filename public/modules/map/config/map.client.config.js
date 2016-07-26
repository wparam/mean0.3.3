'use strict';

angular.module('map').config(['$stateProvider', function($stateProvider){
    $stateProvider.state('map', {
        url: '/map',
        templateUrl: 'modules/map/views/map.client.view.html'
    });
}]);