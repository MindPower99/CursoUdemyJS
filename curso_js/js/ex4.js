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

function add_zero (number) {
	if (number < 10) {
		return "0" + number.toString();
	}
}
function format_date(timestamp) {
	var dia = new Date(timestamp).getDate();
	var mes = new Date(timestamp).getMonth() + 1;
	var ano = new Date(timestamp).getFullYear();

}

document.getElementById("confirmar_pedido").onclick = function () {
	
	var selection = document.getElementById("envios").value;
	
	if (selection == "escolha") {
		alert("Escolha um modelo de envio");
	}
	
	else {
		if (selection == "normal") {
			var dias_entrega = 18;
			
		} else if (selection == "express") {
			var dias_entrega = 12;
		}
		
		var data_envio = new Date().getTime();
		var data_entrega  = data_envio + (dias_entrega * 86400000);
		
	}
	
}
	/*
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
	
	*/
}

// 3)

	document.getElementById("comecar_parar").onclick = function () {
		
		window.setInterval(function () {
		var zerar = 0;
		while (zerar == 0) {
		var hora_atual = new Date();
		var horas = hora_atual.getHours(0);
		var minutos = hora_atual.getMinutes(0);
		var segundos = 1;
		var milisegundos = hora_atual.getMilliseconds(10);
		document.getElementById("cronometro").innerHTML = horas + ':' + minutos + ':' + segundos + ':' + milisegundos; 
		
		}
	},1000);
	
	}


