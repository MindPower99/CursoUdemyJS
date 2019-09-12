// Folha de exercícios nº 3

// 1)

function calcular() {
	var temp_c = document.getElementById("temp_celsius").value;
	console.log(temp_c);
	var temp_f = (9 * temp_c / 5) + 32; 
	document.getElementById("temp_fahr").innerHTML = '<p>'+ temp_f + '</p>';

}

// 2)

var ano_copa = 1930;

while (ano_copa < 2019) {
	console.log(ano_copa);
	document.getElementById("anos_copa").innerHTML += '<li>' + ano_copa + '</li>';
	ano_copa += 4;
}	