(function(){
	angular.classmap = curry$(function(module, map){
		var clas, list;
		for (clas in map) {
			list = map[clas];
			(fn$.call(this, clas, list));
		}
		function fn$(clas, list){
			var directive;
			directive = function(){
				return {
					restrict: 'C',
					link: function(scope, $el){
						$el.addClass(list);
					}
				};
			};
			angular.module(module).directive(clas, directive);
		}
	});

	angular.classes = angular.classmap('ng');

	angular.module('ng').run(function($rootScope){
		return $rootScope.$sapply = function(){
			if (!this.$$phase) {
				return this.$apply();
			}
		}, $rootScope;
	});

	jQuery.template = function(tplSel){
		return jQuery("#templates " + tplSel).html();
	};

	angular.module('uo', ["JEFRi", "jQuery", "ui"]).
		config(['$routeProvider', function($routeProvider, $) {
		$routeProvider.
			when('/map', {template: jQuery.template("#gMap")}).
			otherwise({redirectTo: '/map'});
	}]);

	angular.classes({
		navDrop: "btn btn-navbar",
		menu: "navbar navbar-inverse navbar-fixed-top",
		content: "container",
		table: "table-striped"
	});

	function curry$(f, args){
		return f.length > 1 ? function(){
			var params = args ? args.concat() : [];
			return params.push.apply(params, arguments) < f.length && arguments.length ?
				curry$.call(this, f, params) : f.apply(this, params);
		} : f;
	}
 
}).call(this);
