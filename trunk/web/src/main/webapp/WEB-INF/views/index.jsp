<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8"/>
		<title>Index</title>
		<script data-main="resources/js/app/app.js" src="resources/js/lib/require.js"></script>
		<link href="resources/css/style.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<section>
			<fieldset>
					<legend>Form Backbone Server</legend>
				<div>
					<label for="name">Name: </label>
					<input type="text" id="name"/>
					<label for="tlf">Tlf: </label>
					<input type="text" id="tlf"/>
					<input type="button" id="button" value="submit"/>
				</div>
			</fieldset>
		</section>
		<section>
			<fieldset>
				<legend>Succes Server</legend>
				<script id="entry-template">
					{title}
		
					<ul>
					    {#names}
					    <li>{name}</li>{~n}
					    {/names}
					</ul>
				</script>
				<div id="output"></div>
			</fieldset>
		</section>
		<section>
			<fieldset>
			<legend>Calculadora</legend>
				<div> 
					<p>Se guarda el Valor 1 y se recupera en el Valor 2</p>
					<label for="v1">Valor 1</label>
					<input id="v1" type="text"/>
					<label for="v2">Valor 2</label>
					<input id="v2" type="text"/>
					<label for="r">Resultado</label>
					<input id="r" readonly type="text"/>
				</div>
				<div>
					<input id="suma" type="button" value="SUMA"/>
					<input id="resta" type="button" value="RESTA"/>
					<input id="multiplica" type="button" value="MULTIPLICA"/>
					<input id="divide" type="button" value="DIVIDE"/>
					<input id="guarda" type="button" value="GUARDA"/>
					<input id="borra" type="button" value="BORRA"/>
					<input id="recupera" type="button" value="RECUPERA"/>
				</div>
			</fieldset>
		</section>
		<section>
			<fieldset>
				<legend>Canvas</legend>
				<canvas id="canvas" width="400" height="200" style="border:1px solid #d3d3d3;">
					Este texto se muestra para los navegadores no compatibles con canvas. Por favor, utiliza Firefox, Chrome, Safari u Opera.
				</canvas>
			</fieldset>
		</section>
		<section>
			<fieldset>
				<legend>Test</legend>
				<form action="test"><input type="submit" value="HACER TESTS"></form>
			</fieldset>
		</section>
	</body>
</html>