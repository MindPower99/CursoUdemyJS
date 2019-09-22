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
	else {
		return number.toString();
	}
}
function format_date(timestamp) {
	var dia = add_zero(new Date(timestamp).getDate());
	var mes = add_zero(new Date(timestamp).getMonth() + 1);
	var ano = add_zero(new Date(timestamp).getFullYear());

	return dia + "/" + mes + "/" + ano;

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

		document.getElementById("data_pedido").innerHTML = format_date(data_envio);
		document.getElementById("data_entrega").innerHTML = format_date(data_entrega);

		
	}
	
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


	// 4)

	 var carros = [

        {
            'placa': 'AAA-0198',
            'categoria': '1',
        },

        {
            'placa': 'HBP-2837',
            'categoria': '2',
        },

        {
            'placa': 'PLQ-0928',
            'categoria': '4',
        },

        {
            'placa': 'KQE-2093',
            'categoria': '5',
        },

        {
            'placa': 'AMR-9087',
            'categoria': '5',
        },

        {
            'placa': 'BQE-8111',
            'categoria': '3',
        },

        {
            'placa': 'GXL-9001',
            'categoria': '2',
        },

        {
            'placa': 'KPM-7740',
            'categoria': '1',
        }
	];

	function valor_a_pagar (veiculo) {

		switch(veiculo.categoria) {

			case '1':
				return 11.22;
				break;

			case '2':
				return 22.45;
				break;

			case '3':
				return 16.88;
				break;

			case '4':
				return 33.65;
				break;

			default:
				console.log('veiculo de placa ' + veiculo.placa + ' não fez pagamento por erro de categoria ('+ veiculo.categoria + ')');
				return 0;
		}
	}

	var total_arrecadado = 0;

	for (var a = 0; a < carros.length; a++) {

		total_arrecadado += valor_a_pagar(carros[a]);
	}

	document.getElementById("faturamento_total").innerHTML = total_arrecadado.toFixed(2);


