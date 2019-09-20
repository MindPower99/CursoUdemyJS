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

