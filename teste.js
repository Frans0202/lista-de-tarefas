/*
function verificarPar(number){
        if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}
    
console.log(verificarPar(6))
*/


/*
function mediaAritmetica(numeros){
    let total = numeros.reduce((resultado, numero) => resultado = resultado + numero)
    total = total/numeros.length
    return total
}

console.log(mediaAritmetica([1, 2, 3, 4, 5]))

console.log(mediaAritmetica([5, 25, 30, 40, 5]))





function mediaAritmetica(numeros){
    return numeros.reduce((resultado, numero) => resultado = resultado + numero)/numeros.length

}

console.log(mediaAritmetica([1, 2, 3, 4, 5, 6, 7]))

console.log(mediaAritmetica([5, 25, 30, 40, 5]))
*/

/*
function calculoNumeroPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) 
                return false 
	} 
	return true; 
        
    }

console.log(calculoNumeroPrimo(2))
console.log(calculoNumeroPrimo(6))
console.log(calculoNumeroPrimo(47))
console.log(calculoNumeroPrimo(49))
*/

/*
function CalculoDeDesconto(valor, porcentagem){
    total = valor - (valor * (porcentagem/100))
    return total
}

console.log("O valor descontado é: " + CalculoDeDesconto(150, 10))
console.log("O valor descontado é: " + CalculoDeDesconto(122.50, 12))
*/

/*
function maiorNumero(numeros){

let maior = numeros[0]
for (let i = 1; i <= numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
    return maior
}

console.log(maiorNumero([1, 2, 25, 10, 15, 6, 6]))
console.log(maiorNumero([-3, -2, -25, -10, -15, -6]))
*/

/*
function conversaoParaFarhrenheit(celsius, com) {
    fahrenheit = (celsius * 1.8) + 32 
    
    return com ? fahrenheit + "ºF" : fahrenheit
}

console.log(conversaoParaFarhrenheit(100, false))
console.log(conversaoParaFarhrenheit(200, true))
*/

/*
function ListaDeNomes(nomes, trecho) {
    return nomes.filter((nome) =>
        nome.toLowerCase().indexOf(trecho.toLowerCase()) !== -1
    );
}


console.log(ListaDeNomes(["Paulo", "Pedro", "Pietro", "Sabrina"], "Pe"))
/*

/*
var fruits = ["apple", "banana", "grapes", "mango", "orange"]

function filterItems(query) {
    return fruits.filter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    }) 
  }
  
  console.log(filterItems("ng"))
  console.log(filterItems("pe"))
*/

/*
function quantidadeDePalavras(nome){

    return nome.split(" ").filter((nome) => nome !== "").length
}

console.log(quantidadeDePalavras("           Nome    Aleatorio pão         "))
*/

/*
function somaDoMesmoNumero(numeros){

    numeros = String(numeros);
    numeros = numeros.split("")
    
    numeros = numeros.map((n) => Number(n))
    // A mesma coisa em baixo
    numeros = numeros.map(Number)

    return numeros.reduce((acumulador, valor) => acumulador + valor, 0)
}

console.log(somaDoMesmoNumero(98539))
*/

/*
const turmas = [
    {
      turma: 'Informática 1º Período',
      numero: 11,
      alunos: [
        {
          nome: 'Pedro Francisco',
          idade: 18,
          nota: 99
        },
        {
          nome: 'Ana Carolina',
          idade: 19,
          nota: 87
        },
        {
          nome: 'João Victor',
          idade: 17,
          nota: 76
        },
        {
          nome: 'Mariana Silva',
          idade: 18,
          nota: 92
        },
        {
          nome: 'Lucas Oliveira',
          idade: 20,
          nota: 85
        },
        {
          nome: 'Juliana Costa',
          idade: 18,
          nota: 90
        }
      ]
    },
    {
      turma: 'Administração 1º Período',
      numero: 12,
      alunos: [
        {
          nome: 'Rafael Santos',
          idade: 19,
          nota: 82
        },
        {
          nome: 'Camila Pereira',
          idade: 20,
          nota: 94
        },
        {
          nome: 'Bruno Ferreira',
          idade: 21,
          nota: 78
        },
        {
          nome: 'Letícia Alves',
          idade: 19,
          nota: 88
        },
        {
          nome: 'Felipe Martins',
          idade: 18,
          nota: 73
        },
        {
          nome: 'Gabriela Lima',
          idade: 20,
          nota: 91
        }
      ]
    },
    {
      turma: 'Redes 1º Período',
      numero: 13,
      alunos: [
        {
          nome: 'Matheus Rocha',
          idade: 21,
          nota: 95
        },
        {
          nome: 'Isabela Souza',
          idade: 20,
          nota: 89
        },
        {
          nome: 'Daniel Moreira',
          idade: 22,
          nota: 83
        },
        {
          nome: 'Larissa Gomes',
          idade: 21,
          nota: 97
        },
        {
          nome: 'Gustavo Castro',
          idade: 19,
          nota: 81
        },
        {
          nome: 'Bianca Fernandes',
          idade: 20,
          nota: 86
        }
      ]
    }
  ]

  function mediaDaTurma(numeroTurma){
    // const alunos = turmas.filter((numero) => numero.numero === number)
    const turma = turmas.find((turma) => turma.numero === numeroTurma);
    const notas = turma.alunos.map((aluno) => aluno.nota)

    const soma = notas.reduce((total, notas) => notas + total, 0) 

    const media = soma/notas.length

    return Number(media.toFixed(1))
  }

console.log(mediaDaTurma(11))
*/

/*
// Exercício 11
function primeiraFuncao(segundaFuncao) {
	console.log("LOG "+segundaFuncao);
	terceiraFuncao();
}

function setimaFuncao() {
	console.log("LOG 02");
	quintaFuncao("05");
	console.log("LOG 03");
}

function segundaFuncao() {
	console.log("LOG 03");
}

function sextaFuncao(teste) {
	console.log("LOG 04");
}

segundaFuncao();

function quartaFuncao() {
	console.log("LOG 05");
	console.log("LOG 04");
}

function terceiraFuncao() {
	console.log("LOG 06");
	sextaFuncao();
}

function quintaFuncao(log) {
	primeiraFuncao("99");
	console.log("LOG "+log);
}

function oitavaFuncao() {
	console.log("LOG 08");
}

console.log("LOG 09");

setimaFuncao();
*/

let bar = 1

foo = {}
foo: {
  bar : 2
  baz : ++bar
}

console.log(foo.baz + foo.bar + bar)