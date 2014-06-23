requirejs.config({
	baseUrl: 'resources/js/lib',
	paths: {
	    app: '../app'
	},
	shim: {
	    backbone: {
	        deps: ['jquery', 'underscore'],
	        exports: 'Backbone'
	    },
		underscore: {
			exports: '_'
	    },
	    dust: {
	    	exports: 'dust'
	    },
	    jquery: {
	    	exports: '$'
	    }
	}
});

requirejs(['app/main']);
