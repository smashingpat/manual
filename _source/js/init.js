(function() {

	angular
	    .module('myApp', ['ui.router','ngSanitize'])

	    .config(config)

	    .controller('mainCtrl', mainCtrl)
	    .controller('pagesCtrl', pagesCtrl)
	    .controller('articleCtrl', articleCtrl)

	    .directive('ngPrism', prismDir)
	    .directive('incHeader', headerDir)
	    .directive('incSidebar', sidebarDir);

	// Load Angular after retrieving data
	fetchData().then(bootstrapApp);

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get('settings.yml').success(function(data) {
			var YML = jsyaml.load(data);
			return $articles = YML.articles;
		});
	}

	function bootstrapApp() {
		return angular.element(document).ready(function() {
		    angular.bootstrap(document, ['myApp']);
		});
	}

}());