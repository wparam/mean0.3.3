'use strict';

angular.module('mine')
.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('mine', {
        url: '/mine',
        templateUrl: 'modules/mine/views/mine.client.view.html'
    });
}]).run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mine', 'mine', 'dropdown', '/mine(/create)?');
		Menus.addSubMenuItem('topbar', 'mine', 'List mine', 'mine');
		Menus.addSubMenuItem('topbar', 'mine', 'New mine', 'mine/create');
	}
]);