define([ 'dust', '../app/persona', '../app/calculator' ], function(dust,
		Persona, Calculator) {
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
		$("#r").val(Calculator.suma(a,b));
	});
	$("#resta").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(Calculator.resta(a,b));
	});
	$("#multiplica").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(Calculator.multiplica(a,b));
	});
	$("#divide").click(function() {
		var a = parseInt($("#v1").val());
		var b = parseInt($("#v2").val());
		$("#r").val(Calculator.divide(a,b));
	});
	$("#guarda").click(function() {
		var a = parseInt($("#v1").val());
		Calculator.guarda(a);
	});
	$("#borra").click(function() {
		Calculator.borra();
	});
	$("#recupera").click(function() {
		$("#v2").val(Calculator.recupera());
	});
});