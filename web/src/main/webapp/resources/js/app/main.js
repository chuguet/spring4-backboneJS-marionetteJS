define([ 'dust', '../app/persona', '../app/calculator' ], function(dust,
		Persona, calculator) {
	$("#button").click(function() {
		var name = $("#name").val();
		var tlf = $("#tlf").val();
		var persona = new Persona();
		persona.set('name', name);
		persona.set('tlf', tlf);
		persona.save(null, {
			success : function(model, response) {
				var data = {
					"title" : response.mensaje,
					"names" : [ {
						"name" : "Larry"
					}, {
						"name" : "Curly"
					}, {
						"name" : "Moe"
					} ]
				};

				var source = $("#entry-template").html();
				var compiled = dust.compile(source, "intro");
				dust.loadSource(compiled);

				dust.render("intro", data, function(err, out) {
					$("#output").html(out);
				});
			}
		});
	});

	$("#suma").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(calculator.suma(a,b));
	});
	$("#resta").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(calculator.resta(a,b));
	});
	$("#multiplica").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(calculator.multiplica(a,b));
	});
	$("#divide").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(calculator.divide(a,b));
	});
	$("#guarda").click(function() {
		var a = parseInt($("#v1").val());
		calculator.guarda(a);
	});
	$("#borra").click(function() {
		calculator.borra();
	});
	$("#recupera").click(function() {
		$("#v2").val(calculator.recupera());
	});
});