function CambiarTextos()
{
	var nombre = document.getElementById('NombreTienda');

	if (nombre.style.backgroundColor == "red")
			nombre.style.backgroundColor = "green";
		else
			nombre.style.backgroundColor = "red";

	}

	function CambiarTexto(idTexto)
	{
		var texto = document.getElementeById(idTexto);
		texto.style.backgroundColor = "blue";
	}