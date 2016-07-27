'use strict';

angular.module('map').controller('mapController', ['$scope', mapController]);

function mapController($scope){
    $scope.map = {
        center: {
            latitude: 45, longtitude: -73
        },
        zoom: 8
    };
};