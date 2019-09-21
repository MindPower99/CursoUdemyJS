// Folha de Exercicios nº4

// 1)

window.onload = function() {
	if (localStorage.estado) {
		var local_estado = localStorage.estado;
		console.log(local_estado);
		document.getElementById("estados").value = local_estado;
		
	}
}

	document.getElementById("estados").onchange = function () {
			
			var campo_select = document.getElementById("estados");
			var indice_selecionado = campo_select.options.selectedIndex;
			var estado_selecionado = campo_select.options[indice_selecionado].innerHTML;
			
			window.localStorage.setItem("estado", estado_selecionado);
			
			console.log(estado_selecionado);
	}

// 2)

document.getElementById("confirmar_pedido").onclick = function () {
	
	var data = new Date();
	var tipo_envio = document.getElementById("envios");
	var envio_selecionado = tipo_envio.options.selectedIndex;
	var envio = tipo_envio.options[envio_selecionado].value;
	
	window.localStorage.setItem("tipo_envio", envio);
	//toString(estado_selecionado);
	
	if(envio == "normal") {
		console.log(data);
		var dias_normal = new Date(19)
		var dia_mes = new Date().getDate();
		console.log(dia_mes);
		var prazo_entrega = dia_mes + 12;
		console.log(prazo_entrega);
		
		

	}
	
	document.getElementById("data_pedido").innerHTML = getDate() + '/' + getMouth() + '/' + getFullYear();
	
	
}

/*
var data_hoje = new Date();
console.log(data_hoje.getDate());

var data_nascimento = "1980-03-01";

var ano_nascimento = new Date("1980-03-01").getFullYear();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_nascimento;
console.log(idade);


var data = new Date();

console.log(data.getTime() / 31536000000);


var envio = new Date("2018-03-20");
envio = envio.getTime();

var entrega = new Date("2018-04-06");
entrega = entrega.getTime();

var dias = (entrega - envio) / 86400000;

document.getElementById("dias_entrega").innerHTML = dias;
*/