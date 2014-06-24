define(function() {
	var calculator = {
			'memoria' : 0,
			'suma' : function (a, b){
				return a+b;
			},
			'resta' : function (a, b){
				return a-b;
			},
			'multiplica' : function (a, b){
				return a*b;
			},
			'divide' : function (a, b){
				return a/b;
			},
			'guarda' : function(a){
				calculator.memoria = a;
			},
			'borra' : function(){
				calculator.memoria = 0;
			},
			'recupera' : function(){
				return calculator.memoria;
			}
	}
	return calculator;
});