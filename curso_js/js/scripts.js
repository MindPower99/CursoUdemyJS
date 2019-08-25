
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
function imc (peso,altura) {
	var alt = document.getElementById('altura').innerHTML;
	var p = document.getElementById('peso').innerHTML;
	var imc_peso = p / (alt * alt);
	document.getElementById('imc').innerHTML = "<p>" + imc_peso + "</p>";
}

imc();