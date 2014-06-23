<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8"/>
		<title>Index</title>
		
		<script type="text/javascript" src="resources/js/jquery.js"></script>
		<script type="text/javascript" src="resources/js/undescore.js"></script>
		<script type="text/javascript" src="resources/js/backbone.js"></script>
		<script type="text/javascript" src="resources/js/dust.js"></script>
		<script type="text/javascript" src="resources/js/persona.js"></script>
		<script type="text/javascript" src="resources/js/main.js"></script>
		
		<link href="resources/css/style.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<section>
			<div>
				<label for="name">Name: </label>
				<input type="text" id="name"/>
				<label for="tlf">Tlf: </label>
				<input type="text" id="tlf"/>
				<input type="button" id="button" value="submit"/>
			</div>
		</section>
		<section>
			<script id="entry-template">
				{title}
	
				<ul>
				    {#names}
				    <li>{name}</li>{~n}
				    {/names}
				</ul>
			</script>
			<div id="output"></div>
		</section>
	</body>
</html>