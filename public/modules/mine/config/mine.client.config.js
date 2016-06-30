'use strict';

angular.module('mine')
.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('mine', {
        url: '/mine',
        templateUrl: 'modules/mine/views/mine.client.view.html'
    })
	.state('mine-sub1',{
		url: '/mine/sub1',
        templateUrl: 'modules/mine/views/mine-sub1.client.view.html'
	})
	.state('mine-sub2',{
		url: '/mine/sub2',
        templateUrl: 'modules/mine/views/mine-sub2.client.view.html'
	})
	.state('minenew',{
		url:'/mine/create',
		templateUrl: 'modules/mine/views/minecreate.client.view.html'
	});
}]).run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mine', 'mine', 'dropdown', '/mine(/create)?');
		Menus.addSubMenuItem('topbar', 'mine', 'List mine', 'mine');
		Menus.addSubMenuItem('topbar', 'mine', 'New mine', 'mine/create');
	}
]);