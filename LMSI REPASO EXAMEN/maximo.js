function Calcularmaximo()
{
	var n1 = parseInt(document.getElementById('num1').value),
		n2 = parseInt(document.getElementById('num2').value),
		n3 = parseint(document.getElementById('num3').value),
		n4 = parseint(document.getElementById('num4').value),
		n5 = parseint(document.getElementById('num5').value),
		max,
		res = document.getElementById('resultado');
	max = n1;
	if(n2 > max)
		max = n2;
	if(n3 > max)
		max = n3;
	if (n4 > max)
		max = n4;
	if (n5 > max)
		max = n4;


	res.innerHTML = "El maximo es " + max;
}