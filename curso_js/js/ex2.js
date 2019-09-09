// Folha de Exercícios nº 2

// 1)

var n1 = parseInt(document.getElementById('num_1').innerHTML);
var n2 = parseInt(document.getElementById("num_2").innerHTML);

console.log(n1);
console.log(n2);


var resultado = n1 + n2;

console.log(resultado);
document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// 2)

/*var caixa_azul = document.getElementById('caixa_azul').innerHTML;

var resultado = (9 * caixa_azul / 5) + 32;

console.log(resultado);

document.getElementById('caixa_amarela').innerHTML = resultado; */

// corrigindo


function celsiusToFah(temp_c) {
	var temp_f = (9 * temp_c / 5) + 32;
	return temp_f
}

var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
var fah = celsiusToFah(celsius);

document.getElementById("caixa_amarela").innerHTML = "<strong>" + fah + "</strong>";

// 3)
   /* var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ];

    var novo_array = [
    	[grupos[1][0] , grupos[1][1] , grupos[1][2] , grupos[1][3]],
    	[grupos[2][0] , grupos[2][1] , grupos[2][2]],
    	["Mariana", "Felipe", "Carla"]
    ];
//console.log(grupos[1]);
console.log(novo_array); */

// corrigindo
var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ];

var novos_grupos = grupos.slice(-2,);

novos_grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(novos_grupos);

// 4)
// a) 
 var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        'total_aval': function() {
        	var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        	return t_aval;
        },

        'media_aval': function() {
        	var m_aval = ((5 * this.n_aval_5_estrelas) + (4 *  this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)  )/ (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela);
        	return m_aval;
        }
    }

    var categoria = curso.categoria[0];

    document.getElementById("categoria_principal").innerHTML = categoria;

    var total_aval = curso.total_aval();

    var media_aval = curso.media_aval().toFixed(2);

    document.getElementById("media_aval").innerHTML = media_aval;

    document.getElementById("total_aval").innerHTML = total_aval;

     



// 5)

