define(['dust', '../app/persona'], function(dust, Persona) {
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
});