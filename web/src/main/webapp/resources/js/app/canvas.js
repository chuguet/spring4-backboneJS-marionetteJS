define(['jquery'], function($) {
	var canvas = {
		'getCanvas' : function(){
			return $("#canvas")[0];
		},	
		'getWidth' : function(){
			return this.getCanvas().width;
		},	
		'getHeight' : function(){
			return this.getCanvas().height;
		},
		'clean' : function(){
			ctx = this.draw2D();
			ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
		},
		'draw2D' : function(){
			return this.getCanvas().getContext("2d");
		},
		'drawLine' : function(ox, oy, dx, dy, color){
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(ox,oy);
			ctx.lineTo(dx,dy);
			ctx.stroke();
		},
		'drawRectangle' : function(ox, oy, widht, height, color){
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.rect(ox, oy, widht, height);
			ctx.stroke();
		},
		'drawCircle' : function(ox, oy, r, startGrad, endGrad, color){
			ctx = this.draw2D();
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(ox, oy, r, startGrad, endGrad);
			ctx.stroke();
		}
	}
	return canvas;
});