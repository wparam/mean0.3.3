'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', 'uiGmapGoogleMapApiProvider',
	function($locationProvider, uiGmapGoogleMapApiProvider) {
		$locationProvider.hashPrefix('!');
		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyA5TCEClKP8HHdWf3njtnZAMWGD6pOB3Gw',
			v: '3.20', //defaults to latest 3.X anyhow
			libraries: 'weather,geometry,visualization'
		});
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	// Fixing google bug with redirect
	if (window.location.href[window.location.href.length - 1] === '#' &&
			// for just the error url (origin + /#)
			(window.location.href.length - window.location.origin.length) === 2) {
			window.location.href = window.location.origin + '/#!';
	}

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
