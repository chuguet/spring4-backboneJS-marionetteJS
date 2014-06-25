define(['../app/calculator'], function (calculator){
	describe("CALCULADORA", function() {
		var a;
		var b;

		beforeEach(function() {
			a = 10;
			b = 5;
		});

		it("SUMA", function() {
			expect(calculator.suma(a, b)).toEqual(15);
		});
		it("RESTA", function() {
			expect(calculator.resta(a, b)).toEqual(5);
		});
	});
});
