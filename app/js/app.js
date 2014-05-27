!function() {

	var moudule = angular.module( 'tutorial-contextualhelp', [
		'ngResource'
	] );

	/**
	 * bulles d'aide
	 */
	moudule.directive('tpHelp', function() {
		var directiveConfig = {
			replace: true,
			restrict: 'AE',
			transclude: true,
			templateUrl: 'partials/directives/helpbubble.html',
			scope: {
				src: '@src'
			}
		};
		return directiveConfig;
	});

}();

