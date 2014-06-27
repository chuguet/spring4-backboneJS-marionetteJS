define([ 'jquery' ], function($) {
	var canvas = {
		'screenSize' : {
			width : 0,
			height : 0
		},
		'setup' : function() {
			this.screenSize = {
				width : this.getCanvas().width,
				height : this.getCanvas().height
			};
			window.requestAnimFrame = (function() {
				return window.requestAnimationFrame
						|| window.webkitRequestAnimationFrame
						|| window.mozRequestAnimationFrame
						|| function(callback) {
							window.setTimeout(callback, 1000 / 60);
						};
			})();
		},
		'getCanvas' : function() {
			return $("#canvas")[0];
		},
		'getWidth' : function() {
			return this.getCanvas().width;
		},
		'getHeight' : function() {
			return this.getCanvas().height;
		},
		'clean' : function() {
			ctx = this.draw2D();
			ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
		},
		'draw2D' : function() {
			return this.getCanvas().getContext("2d");
		},
		'drawLine' : function(ox, oy, dx, dy, color) {
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(ox, oy);
			ctx.lineTo(dx, dy);
			ctx.stroke();
		},
		'drawRectangle' : function(ox, oy, width, height, color) {
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.rect(ox, oy, widht, height);
			ctx.stroke();
		},
		'drawFillRectangle' : function(ox, oy, width, height, color) {
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.fillRect(ox, oy, width, height);
		},
		'drawCircle' : function(ox, oy, r, startGrad, endGrad, color) {
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(ox, oy, r, startGrad, endGrad);
			ctx.stroke();
		}
	}
	return canvas;
});