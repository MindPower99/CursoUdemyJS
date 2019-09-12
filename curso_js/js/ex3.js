// Folha de exercícios nº 3

// 1)

function calcular() {
	var temp_c = document.getElementById("temp_celsius").value;
	console.log(temp_c);
	var temp_f = (9 * temp_c / 5) + 32; 
	document.getElementById("temp_fahr").innerHTML = '<p>'+ temp_f + '</p>';

}