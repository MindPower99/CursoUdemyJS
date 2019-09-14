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

// 3)



function calcular_nota() {
	
	var nota1 = parseFloat(document.getElementById("nota1").value);
	console.log(nota1);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var faltas = document.getElementById("n_faltas").value;
	//console.log(faltas);
	var percentual = parseFloat((20 - faltas) / 20) * 100;
	console.log(percentual);
	var media = (nota1 + nota2) / 2;
	console.log(media);
	if (media >= 6.5 && percentual >= 70) {
		document.getElementById("result").innerHTML = '<strong> aprovado </strong>';
	}
	else if (media < 6.5 && percentual < 70) {
		document.getElementById("result").innerHTML = '<strong> reprovado por média insuficiente e por falta </strong>';
	}
	else if (media < 6.5) {
		document.getElementById("result").innerHTML = '<strong> reprovado por média insuficiente </strong>';
	}
	else if (percentual < 70) {
		document.getElementById("result").innerHTML = '<strong> reprovado por falta </strong>';
	}

}

// 4)

var vendas_cursos = [

        {
            'aluno': 'Emmanuel Gomes',
            'data': '10/06/2018',
            'valor': 34.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Carla Dias',
            'data': '10/06/2018',
            'valor': 29.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Rafael Marques',
            'data': '11/06/2018',
            'valor': 39.99,
            'reembolso': '13/06/2018'
            
        },

        {
            'aluno': 'Maria Isabel Pereira',
            'data': '11/06/2018',
            'valor': 29.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Andre Luis Silva',
            'data': '12/06/2018',
            'valor': 34.99,
            'reembolso': null
            
        }
    
    ];

    var listar_elementos = document.getElementByClass("vendas_cursos");
    listar_elementos = "";

    for (var a = 0; a < vendas_cursos.length; a++) {
    	if (vendas_cursos.reembolso) {
    		var listar = vendas_cursos[a].reembolso;
    		for (var b = 0; b < listar.length; b++) {
    			listar_elementos.innerHTML += '<li>' + listar[b], vendas_cursos[a].aluno + '</li>';
    		}
    	}
    }