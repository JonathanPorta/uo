//
(function(){
	angular.module('uo').factory('uo', function(JEFRi, herald){
		var uo = function(){
			var self = this;

			JEFRi.ready.then(function(){
				self.load();
			});
		};

		uo.prototype.locations = [];
		uo.prototype.exceptions = [];

		uo.prototype.load = function(){
			//Dummy Data!
			this.create("Location", {name : "1215 Harney"});
			this.create("Location", {name : "3528 Carmel"});
			this.create("Location", {name : "233 Ashley Ct N"});
			this.create("Location", {name : "1213 Concord"});

			console.log("uo load");
			herald.trigger("load");
		};

		uo.prototype.getLocations = function(){
			return this.locations;
		};

		uo.prototype.lookup = function(type, id){
			return JEFRi.find({"_type" : type, "location_id" : id});
		};

		uo.prototype.create = function(type, spec){
			var spec = spec || {};
			if(type == "Location")
			{
				var l = JEFRi.build("Location", spec);
				this.locations.push(l);
				return l;
			}
//			else if(type == "Exception")
//			{
//				var e = JEFRi.build("Exception", spec);
//				this.exceptions.push(e);
//				return e;
//			}
		};

		uo.prototype.save = function(){

		};

		return new uo();
	});
}).call(this);
