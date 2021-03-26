const shell = require('shelljs'); //npm install shelljs

let nomes = ['samuel', 'amanda', 'natalia'] // cria um array
let nomes2 = new Array('samuel', 'amanda', 'natalia') // cria um array chamando a classe Array
let nomes3 = Array('samuel', 'amanda', 'natalia') // retorna um array

console.log(nomes3)
nomes3.push("novo elemento") // adiciona um elemento na ultima posição
nomes3.unshift("primeiro elemento") //adiciona um elemento na primeira posição
nomes3.pop() // remove o ultimo elemento do array e retorna o elemento removido
nomes3.shift() // remove o primeiro elemento do array e retorna o elemento removido
//delete nomes3[index] // remove o elemento do indice index e deixa a posição vazia ou seja valor undefined
nomes3.slice(3, 4) // retorna o elemento de um indice até tal indice exemplo da posição 3 até 4
console.log(nomes3 instanceof Array) // verifica se a variavel é uma instancia de array ou sejá se é um array
console.log(nomes3)
console.log(nomes2.length) // retorna quantos elementos tem o array/vetor

//nomes[index] = 'novo' // adiciona um novo elemento na posição index

console.log(nomes);

console.log(nomes[3])