'use strict';

angular.module('mine')
.config(['$stateProvider'], function($stateProvider){
    $stateProvider.state('mine', {
        url: '/mine',
        templateUrl: 'modules/mine/views/mine.client.view.html'
    });
});