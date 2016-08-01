'use strict';

angular.module('map').controller('mapController', ['$scope', mapController]);

function mapController($scope){
    $scope.map = {
        center: {
            latitude: 51.219053,
            longitude: 4.404418 
        },
        zoom: 14,
        options:{
            scrollwheel: false
        }
    };

    $scope.Message = "This should be map";
};