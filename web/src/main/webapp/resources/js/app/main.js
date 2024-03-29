define([ 'dust', '../app/persona', '../app/calculator', '../app/canvas' ],
		function(dust, Persona, calculator, canvas) {
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
				$("#r").val(calculator.suma(a, b));
			});
			$("#resta").click(function() {
				var a = parseInt($("#v1").val());
				var b = parseInt($("#v2").val());
				$("#r").val(calculator.resta(a, b));
			});
			$("#multiplica").click(function() {
				var a = parseInt($("#v1").val());
				var b = parseInt($("#v2").val());
				$("#r").val(calculator.multiplica(a, b));
			});
			$("#divide").click(function() {
				var a = parseInt($("#v1").val());
				var b = parseInt($("#v2").val());
				$("#r").val(calculator.divide(a, b));
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

			/** Canvas estatico */
			// canvas.drawLine(0, 0, 200, 200, '#777');
			// canvas.drawLine(200, 0, 0, 200, '#777');
			// canvas.drawLine(200, 0, 200, 200, '#777');
			// canvas.drawLine(200, 0, 400, 200, '#777');
			// canvas.drawLine(200, 200, 400, 0, '#777');
			// canvas.drawCircle(200, 100, 200, 0, 2 * Math.PI, '#666666');
			// canvas.drawRectangle(100, 50, 200, 100, '#666666');

			/** Canvas dinamico */
			canvas.setup();
			(function animloop(){
				requestAnimFrame(animloop);
				color = 'rgb(' + parseInt(Math.random() * 255) + ','
				+ parseInt(Math.random() * 255) + ','
				+ parseInt(Math.random() * 255) + ')';
				canvas.drawFillRectangle(0, 0, canvas.screenSize.width, canvas.screenSize.height, color);
			})();
			
			$("#preventDefault").click(
					function(event) {
						event.preventDefault();
						$("<div>").append(
								"default " + event.type + " prevented")
								.appendTo("#log");
					});
			$(".event").click(function(event) {
				alert("This is : " + $(this).text());
				// Comment the following to see the difference
				event.stopPropagation();
			});
		});