define(function(require) {
	var Backbone = require('backbone');
	var Persona = Backbone.Model.extend({
		url : 'post'
	});
	return Persona;
});