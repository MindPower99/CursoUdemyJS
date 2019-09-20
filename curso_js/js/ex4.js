// Folha de Exercicios nº4

// 1)
	document.getElementById("estados").onchange = function () {
		
		if (localStorage.estado) {
			var pre_estado = document.getElementById("estados").value;
			
			var campo_select = localStorage.estado;
			var indice_selecionado = campo_select.options.selectedIndex;
			var estado_selecionado = campo_select.options[indice_selecionado].innerHTML;
			
			window.localStorage.setItem("estado", estado_selecionado);
			
			localStorage.estado = pre_estado;
			
			console.log(pre_estado);
			
			// localStorage.estado
			
			
			
		}
		
		else {
			
			var campo_select = document.getElementById("estados");
			var indice_selecionado = campo_select.options.selectedIndex;
			var estado_selecionado = campo_select.options[indice_selecionado].innerHTML;
			
			window.localStorage.setItem("estado", estado_selecionado);
			
			
			
			console.log(estado_selecionado);
			
		}
	}


	/*
	document.getElementById("mostrar_opcao").onclick = function () {
		
		var campo_select = document.getElementById("options");
		var indice_selecionado = campo_select.options.selectedIndex;
		var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
		
		document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
	}
	
	*/
	
	/*

window.localStorage.setItem("nome","João");

console.log(localStorage['nome']);

*/

/*
console.log(localStorage['nome']);

localStorage.removeItem("nome");

console.log(localStorage['nome']);

*/

/*
document.getElementById("enviar-nome").onclick = function () {

  //guardar o nome digitado em local storage
  var nome = document.getElementById("nome-usuario").value;
  localStorage.setItem("nome", nome);

  //esconder o formulário

  document.getElementById("name-field").style.display = "none";

  //atualizar e mostrar mensagem
  document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + " ,tudo bem ?";
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + " ?"
  document.getElementById("welcome-area").style.display = "initial";


};

if(localStorage.nome) {

  //esconder o formulário
  document.getElementById("name-field").style.display = "none";

  //atualizar e mostrar mensagem
  document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + " ,tudo bem ?";
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + " ?"
  document.getElementById("welcome-area").style.display = "initial";
}

document.getElementById("not-me").onclick = function() {

  // remover chave nome do local storage
  localStorage.removeItem("nome");

  //esconder mensagem de boas vindas
  document.getElementById("welcome-area").style.display = "none";

  // mostrar formulário
  document.getElementById("name-field").style.display = "initial";

}
 */