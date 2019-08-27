// Folha de Exercícios nº 2

// 1)

var n1 = parseInt(document.getElementById('num_1').innerHTML);
var n2 = parseInt(document.getElementById("num_2").innerHTML);

console.log(n1);
console.log(n2);


var resultado = n1 + n2;

console.log(resultado);
document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';
