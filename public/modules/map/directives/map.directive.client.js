'use strict';

angular.module('map').directive('mapPanelWidget',mapPanelWidget);

function mapPanelWidget(){
    return {
        restrict: 'AC',
        scope: {},
        templateUrl: 'modules/map/views/map.client.view.html',
        controller: mapController,
        controllerAs: 'mapctrl'
    }
};