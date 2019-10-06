$(document).ready(function() {

//Aula 3 - variaveis
//var latitude = 40.87663;
// var longitude = -8.08373;
// console.log(latitude);
// console.log(longitude);

//Aula 4 - String

// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

// console.log('Nome completo:' + nome + ' ' + sobrenome);

// console.log(ddd + '-' + telefone);

// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('Primeira letra do nome: ' + nome[3]);

// console.log('Número de caracteress do telefone ' + telefone.length);

 // Aula 5 - Números

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A média é:' + ' ' + media);

// console.log(Math.pow(num1,4));

// // =================================================== //

//  var increment = 20;
// increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
// console.log(increment); // O console mostrará 25

// // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

// increment = 1;
// increment += 5;
// console.log(increment); // O console mostrará 6

// increment = 10;
// increment++;
// console.log(increment);

// var ddd = 21;
// var telefone = 9898989898;

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log(ddd_string+tel_string);

// var idade = '17';

// idade = parseInt(idade);
// idade++;
// console.log(idade);

// Aula 6 - Tipos de dados Booleans

// var idade = "65";
// var teste = idade == 65;

// console.log(teste);     

//var vtype = 65;
//console.log(typeof vtype == "number");

//Aula 10 - Trabalhando com DOOM

//passando conteudo de uma caixa pra outra:

/* var conteudo_caixa = document.getElementById('caixa_azul').innerHTML;

document.getElementById('caixa_amarela').innerHTML = conteudo_caixa; */

//colocando tag h1 dentro da caixa usando javascript

/* var conteudo_caixa2 = document.getElementById('caixa_azul').innerHTML;

document.getElementById('caixa_azul').innerHTML = "<h1>" + conteudo_caixa2 + "</h1>"; */

// Aula 11 - Funções

// Função sem argumentos:
/*
function soma_numeros() {
	var x = 5;
	var y = 2;
	var soma = x + y;
	console.log(soma);
}

soma_numeros();

// Função com argumentos:

function soma_args(num1,num2) {
	var soma = num1 + num2;
	console.log(soma);
}

soma_args(10,25);

var n1 = 50;
var n2 = 30;

soma_args(n1,n2);

//função com argumentos e exibida com texto:

function soma_args2(num1,num2) {
	var soma = num1 + num2;
	return(soma);
}

console.log("Resultado da soma: " + soma_args2(10,25)); */

//Desafio: pegar peso e altura do html, passar pela função e apresentar o imc:
/*
function imc (peso,altura) {
	var alt = document.getElementById('altura').innerHTML;
	var p = document.getElementById('peso').innerHTML;
	var imc_peso = p / (alt * alt);
	document.getElementById('imc').innerHTML = "<p>" + imc_peso.toFixed(2) + "</p>";
}

imc(); */

// Aula 12 - Arrays

//Declaração de arrays

/* var alunos = ["João","Maria","José"];
var num_primos = [2,3,5,7,11,13];

// Listagem de arrays e seus conteudos

console.log(alunos.length);
console.log(num_primos[2]);

//Declaração de grupo de array

var grupos = [
	["João", "Maria"],
	["Pedro", "Joana", "André", "Júlio"],
	["Carolina", "Helena", "Marcelo"]
];

//Declaração de elementos de um grupo de array

console.log(grupos.length);
console.log(grupos[1]);
console.log (grupos[2][2]); */

// Operações com arrays

/*var cursos = [ "HTML", "Python", "PHP" ];

    cursos.push("Javascript");

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    cursos.unshift("Bootstrap");

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    cursos.pop();

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    cursos.shift();

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]*/

 //Definindo elementos de um array manualmente

    /*var ingredientes = [ "pão branco", "queijo", "presunto" ];

    ingredientes[0] = "pão integral";

    console.log(ingredientes);  */

    // extraindo parte de um array com o método slice

    /*var alunos = ["João", "Maria", "José","Fernanda", "Pedro", "Elisa"];
    console.log(alunos.slice(0,3)); */

    // Aula 13 - objetos


    // Exemplo de objetos

    /*var funcionario = {
    	'nome': 'Pedro Souza Gomes',
    	'ano_nasc': 1972,
    	'cpf': '111.111.111.111',
    	'cargo': 'Analista de Sistemas'
    };

    // Exibição de propriedades de um objeto

    console.log(funcionario['nome']);
    console.log(funcionario.ano_nasc);

    // Mudança e inserção de objetos
    funcionario.cargo = "Gerente de TI";
    funcionario.cnh = "51613213";

    console.log(funcionario);*/

    // objetos dentro de arrays

    /* var cursos = [
    	{
    		'titulo' : 'Aprenda programação em Python 3 com facilidade do zero',
    		'avaliacoes' : 680,
    		'alunos' : 2300,
    		'categorias' : ['programação', 'tecnologia']
    	},

    	{
    		'titulo' : 'Aprenda PHP e faça sites dinâmicos',
    		'avaliacoes' : 180,
    		'alunos' : 350,
    		'categorias' : ['desenvolvimento web', 'programação']
    	},

    	{
    		'titulo': 'Excel do zero ao avançado',
    		'avaliacoes' : 420,
    		'alunos' : 1800,
    		'categorias' : ['produtividade', 'gestão']
    	}
    ];

    // desafio: fazer o console mostrar a categoria "desenvolvimento web"
    console.log(cursos[1].categorias[0]);

    //desafio: trocar a categoria gestão po administração de empresas
   cursos[2].categorias[1] = "administração de empresas";

   console.log(cursos); */

   // Aula 14 - Métodos dos objetos

   // Objeto com funções
   /* var aluno = {
   		'nome': 'Maria',
   		'sobrenome': 'Pereira',
   		'ano_nasc': 1992,
   		'nome_completo' : function () {
   			var n_completo = this.nome + " " + this.sobrenome;
   			return n_completo;
   		   	},
   		   	'ver_idade': function () {
   		   		var idade = 2019 - this.ano_nasc;
   		   		return idade;
   		   	}
   };

   		} 

   console.log(aluno.nome_completo());
   console.log(aluno.idade()); */

   // vendo todas as funções do console

	//console.log( console );

   // como saber o tipo de um elemento

   //console.log(typeof document.getElementById("tudo_obj"));
   
  // Aula 19 - Eventos

  /* document.getElementById("click-me").onclick = function () {
    alert("Você clicou no botão");
  };

    document.getElementById("hover-me").onmouseover = function () {
    alert("Você passou com o cursor no botão");
  };

     document.getElementById("leave-me").onmouseout = function () {
    alert("Você saiu com o cursor no botão");
  };

  document.onkeydown = function () {
    alert('Você apertou alguma tecla');
  };
  
  document.onkeydown = function () {
    alert('Você apertou a tecla' + event.keyCode);
  }; */

  /* function button_clicked() {
    alert("Você clicou no botão");
  }; */

  //Aula 20 - Manipulação do CSS

  /* document.getElementById("botao_cor").onclick = function() {
      document.getElementById("botao_cor").style.height = "100px";
  }; */

 /* document.getElementById("botao_cor").onclick = function() {
      document.getElementById("botao_cor").style['background-color'] = "purple";
      document.getElementById("botao_cor").style.transform = "translateX(100px)";
  }; */

 /*  document.getElementById("botao_cor").onclick = function() {
      this.style['background-color'] = "purple";
      this.style.transform = "translateX(100px)";
  };*/

 /* var botao = document.getElementById("botao_cor");

  botao.onclick = function() {
      botao.style['background-color'] = "purple";
      botao.style.transform = "translateX(100px)";
  };*/

  //Aula 21 - outros métodos getElement

 /* var exemplo = document.getElementsByClassName("exemplo");

  exemplo[0].innerHTML = "teste1";

  console.log(exemplo); */

  /*var exemplo = document.getElementsByTagName("p");

  console.log(exemplo); */

  // Aula 22 - Loops For e For/In

  /* for (var a = 1; a <= 5; a++) {
      console.log(a);
  };
  var aluno = ['Pedro', 'Maria', 'José', 'Joao', 'Carlos'];

  for (var b = 0; b < aluno.length; b++) {
    console.log(aluno[b]);
  };

   var carro = {
        'Ano': 2018,
        'Modelo': 'Fox',
        'Cilindradas': '1.8',
        'Combustível': 'Gasolina'

    }

    for (var prop in carro) {
      console.log(prop + ': ' + carro[prop]);
    }

var elementos = document.getElementsByClassName("exemplo");

console.log(elementos);

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange";
    elementos[c].style['font-weight'] = "orange";
} */

// Aula 23 - Loops While e Do/While

/*var count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

var count2 = 10;

do  {
  console.log(count2);
  count2++;
}while (count2 < 5); */

// Aula 24 - Condicionais

/*var idade = 18;

if(idade < 18) {
	console.log("Menor de idade");
} else if (idade == 18) {
	console.log("Tem 18 anos");
}
else {
	console.log("Maior de idade");
}
*/

/*var nota = 8;
var faltas = 5;

if (nota >= 7 && faltas <= 4) {
	console.log("aprovado");
} else {
	console.log("Reprovado");
}*/

/*var faltas = 5;
var nota = 8;

if (nota < 7 || faltas > 4) {
	console.log("Reprovado");
} else {
	console.log("Aprovado");
} */

 /*var nome = "";
if(nome) {
	console.log("Nome: "+ nome);
}
else {
	console.log("Nome não informado");
} */

/* var socio = true;
var idade = 25;

if(socio || idade >= 65) {
	console.log("Ingresso grátis");
}
else {
	if(idade < 18) {
		console.log("Preço a pagar: R$ 6,00");
	}
	else {
		console.log("Preço a pagar: R$ 12,00");
	}
}
*/
/*
 var funcionarios = [
        
        {
            'nome': 'Carlos Henrique da Silva',
            'idade': 45,
            'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
            
        },

        {
            'nome': 'Maria Helena Pereira',
            'idade': 32,
            'filhos': undefined
            
        },

        {
            'nome': 'José Feliciano Maia',
            'idade': 39,
            'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
        }
    
    ];
	
	var list_elements = document.getElementById("filhos");
	list_elements.innerHTML = "";
	
	for (var a = 0; a < funcionarios.length; a++) {
		
		if (funcionarios[a].filhos) {
			var lista_filhos = funcionarios[a].filhos;
			
			for (var b = 0; b < lista_filhos.length; b++) {
				list_elements.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome; 
			}
		}
	}


*/

// Aula 25 - BOM(Browser Object Model)
/*
window.onmousemove = function(e) {

  console.log('eixo y' + e.pageY);;
  console.log('eixo x' + e.pageX);

} */
/*
window.onmousemove = function(e) {

 if (e.pageY < 5) {
  alert('Não perca os descontos exclusivos');
}
}
*/

// Aula 26 - Local Storage

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

// Aula 27 - data e hora

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

// Aula 28 - métodos de tempo

/*
console.log('mensagem 1');

window.setTimeout(function () {
  console.log('mensagem 2');
}, 3000)

  document.getElementById('mostrar-loader').onclick = function() {

      document.getElementById('spinner-loader').style.display = "initial";

      window.setTimeout(function() {

        document.getElementById("spinner-loader").style.display = "none";
      }, 5000);

  }

   

  var count = 0;

  var inter = window.setInterval(function () {
    console.log(count);
    count++;
    if (count >= 10) {
      window.clearInterval(inter);
    }
  },1000);



  // Aula 29 - desafio do relógio

  window.setInterval(function() {

    var hora_atual = new Date();
    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();

    function format_time (time) {

      if (time >= 0 && time <= 9) {
        var formatted_time = time.toString();
        formatted_time = "0" + formatted_time;
      }

      else {
        var formatted_time = time.toString();
      }

      return formatted_time;
    }

    document.getElementById('relogio').innerHTML = format_time(horas) + ':'+ format_time(minutos) + ':' + format_time(segundos);



  }, 1000);

    */
	
	// Aula 30 - Switch
	/*
	function valor_pedagio (categoria) {
		switch(categoria) {
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
				return 'categoria não encontrada';
		}
	}
	
	var categoria_veiculo = "3";
	
	console.log(valor_pedagio(categoria_veiculo));
	
	categoria_veiculo = "2";
	
	console.log(valor_pedagio(categoria_veiculo));
	
	categoria_veiculo = "5";
	
	console.log(valor_pedagio(categoria_veiculo));
	*/
	
	// Aula 31 - Break e continue
	
	/*
	var x = 0;
	
	while (x < 10) {
		console.log(x);
		x++;
		
		if (x == 5) {
			break;
		}
	}
	
	
	var lista = [1,5,9,33,56,89,100,25,145,15,48,157,56];
	
	for (a = 0; a < lista.length ; a++) {
		if (lista[a] == 33) {
			console.log('Valor encontrado');
			break;
		}
		
		console.log('tentativa: '+a);
	}
	
	
	
	var num = 0;
	
	while (num < 20) {
		
		if (num == 3) {
			num++;
			continue;
		}
		
		console.log(num);
		num++;
	}
	
	
	
	var num = 0;
	
	while (num <= 20) {
		num++;
		
		if(num % 2 == 0) {
			continue;
		}
		
		console.log(num);
	}
	*/
	
	// Aula 32 - Formulários
	
	/*
	// Select Box
	
	document.getElementById("mostrar_opcao").onclick = function () {
		
		var campo_select = document.getElementById("options");
		var indice_selecionado = campo_select.options.selectedIndex;
		var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
		
		document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
	}
	
	*/
	
	/* 
	
	document.getElementById("mostrar_opcao").onclick = function () {
		
		var valor_selecionado = document.getElementById("options").value;
		document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
	}
	
	// Radio Buttons
	
	document.getElementById("mostrar_radio").onclick = function () {
		
		var radio = document.getElementsByName("genero");
		
		var radio_selected;
		
		for (var a = 0; a < radio.length; a++) {
			if (radio[a].checked) {
				radio_selected = radio[a].value;
				break;
			}
		}
		
		document.getElementById("radio_selecionado").innerHTML = radio_selected;
	}
	
	// Checkboxes
	
	document.getElementById("mostrar_check").onclick = function () {
		
		document.getElementById("check_selecionado").innerHTML = "";
		var check = document.getElementsByName("interesse");
		
		for (var b = 0; b < check.length; b++) {
			if (check[b].checked) {
				document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
			}
		}
	}
	
	*/
	
	// Date
	
	/*
	document.getElementById("mostrar_data").onclick = function () {
		var data_select = document.getElementById("data_evento").value;
		
		var data_completa = new Date(data_select);
		
		document.getElementById("data_selecionada").innerHTML = data_completa;
	}
	
	
	
	// Aula 33 - evento onchange
	
	document.getElementById("escolaridade").onchange = function () {
		
		var campo_select = document.getElementById("escolaridade");
		var indice_selecionado = campo_select.options.selectedIndex;
		var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
		document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
		
	}
	*/
	
  /*

	var check = document.getElementsByName("lanche");

    for (var a = 0;  a < check.length; a++) {

        check[a].onchange = function () {

            document.getElementById("check_selecionado").innerHTML = "";
            
            for (var b = 0;  b < check.length; b++) {
                
                if (check[b].checked) {
                    document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
                }
            }
        }  
    }

  */

  // Aula 34 - JQuery

  // Vanilla Javascript (javascript puro)

/*
  var elementos = document.getElementsByClassName("exemplo");

  for (var a = 0; a < elementos.length; a++) {

    elementos[a].style['background-color'] = 'black';
  }

  // JQuery

  $(".exemplo").css("background-color", "black");

*/

// Mudando o inner html de um elemento com id

// Vanilla javascript

/*
document.getElementById("exemplo").innerHTML = "Olá";
*/
// JQuery 
/*
$("#elemento").html("Olá");
*/

// esconder elementos com método css
/*
$("#esconder").click(function () {
  $('.exemplo').css("display", "none");
});
*/
// esconder elementos com método hide
/*
$("#esconder").click(function () {
  $('.exemplo').hide();
});
*/

/*
$("*")  Todos os elementos
$("div.exemplo")  Todos os elementos div que tenham a classe exemplo
$("p:first")  O primeiro elemento p
$("ul li:first-child")  O primeiro elemento li de todos os elementos ul
$("[href]") Todos os elementos que tenham o atributo href
$("a[target='_blank']") Todos os elementos que tenham o atributo target="_blank"
$("a[target!='_blank']")  Todos os elementos que NÃO tenham o atributo target="_blank"
$(":button")  Todos os elementos button ou inputs que tenham type="button"
$("tr:even")  Todos os elementos tr pares (0, 2, 4...)
$("tr:odd") Todos os elementos tr ímpares (1, 3, 5...)

*/

//  Aula 35 - Jquery - Manipulação do conteudo html



// pegar o conteudo

/*

var conteudo_html = $("#paragrafo-html").html();

console.log(conteudo_html);

// mudar o conteudo do href

$("#paragrafo-html").html("mudarp conteudo do paragrafo");

var text_html = $("#paragrafo-html").text();

console.log(text_html);

var url_link = $("#paragrafo-link").attr("href");


$("#paragrafo-link").attr("href","http://www.udemy.com");
url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

// Mudar imagem através do atributo src

$("#mudar_imagem").click(function() {
  $("#imagem_js").attr("src","https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
  $("#mudar_imagem").hide();
});
*/
// métodos empty e remove
/*

$("#paragrafo-empty").empty(); // remove o conteudo e mantem o elemento

$("#paragrafo-empty").remove(); // remove o elemento
*/

// Aula 36 - Loop each

/*

  // Percorrendo arrays

    var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

    $.each(lista,function(indice,valor) {
      console.log('O elemento de indice [' + indice + '] tem o valor de ' + valor);

    });

  // Percorrendo objetos

    var pessoa = {
      'nome': 'João Pedro',
      'DN': '20/01/1990',
      'CPF': '111.111.111-11'
    }

    $.each(pessoa,function(chave,valor) {
      console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    });
*/

// atribuir li's dentro de uma variavel (array)

// var interesses = $("#interesses li");

// percorrendo o array e mostrando o text

 /* $.each(interesses, function (indice, valor) {
  console.log($(valor).text());
}) */

// Aula 37 - Formularios

/*

// pegar o valor de um input

var conteudo_input = $("#campo_nome").val();

console.log(conteudo_input);

// mudar o conteudo de um input

$("#campo_nome").val("José");

// pegar o valor de um select selecionado

console.log( $("#options").val());

// exibir o texto de um select

console.log ($('#options').find(":selected").text()) ;

// função pra exibir o texto de um select quando o conteudo muda

   $("#options").change(function(){
        var novo_selecionado = $('#options').find(":selected").text();
        console.log(novo_selecionado);
    });

// pegar o valor de um radio button

  var valor_radio_selecionado = $("input[name='genero']:checked").val();
  console.log(valor_radio_selecionado);

// pegar o texto de um radio button

  var texto_radio_selecionado = $("input[name='genero']:checked").parent('span').text();
  console.log(texto_radio_selecionado);

// pegar valores do check box

    $("input[name='interesse']").change(function() {

        var checkboxes_selecionados = $("input[name='interesse']:checked");
        var textos = [];
        
        $.each(checkboxes_selecionados, function( index, value ) {
            
            textos.push($(value).parent("span").text());
        
        });
        
        console.log(textos);
        
    });
  */

  // Aula 38 - Manipulação de classes css

  // mudar o css de um elemento

  $(".exemplo").css("display", "none"); 

  // adicionar uma classe ao clicar no botão

  $("#adicionar_classe").click(function() {
    $("#paragrafo-classes").addClass("styling")
  });

  // remover uma classe ao clicar no botão

  $("#remover_classe").click(function() {
    $("#paragrafo-classes").removeClass();
  });

  // adicionar ou remover uma classe ao clicar em um unico botao

  $("#alternar_classe").click(function() {
    $("#paragrafo-classes").toggleClass("styling");
  });

  // Aula 39 - Eventos JQUERY

  /*

 Sintaxe dos eventos jQuery:

   $("elemento").evento(function(){

        // código a ser executado quando ocorrer o evento

    });

  */

  // mostrar o botão só quando começar a digitar algo e esconde-lo se não tiver nada

  $("#nome").keyup(function () {
    var conteudo = $("#nome").val();
    if (conteudo) {
      $("#confirmar").css("display","initial");
    }
    else {
      $("#confirmar").css("display","none");
    }
  });

  

  

  // Aula 40 - Efeitos Jquery

  // sintaxe

  //$("elemento").hide(velocidade, callback);

  // esconder o botão quando clicar e mostrar o texto
/*
  $("#botao-esconder").click(function() {
    $(this).hide(1000,function() {
      $("#texto-escondido").show()
    });

*/

// esconder o botao com toggle
/*
  $("#toggle-tab").click(function() {

        $("#tab-content").toggle();
        $("#toggle-tab").toggleClass("flip");
        
    });

    */

    $("#toggle-tab").click(function() {

        $("#tab-content").slideToggle(3000, function() {
          $("#toggle-tab").toggleClass("flip");
        });
        
        
    });


 
  });





  






    





