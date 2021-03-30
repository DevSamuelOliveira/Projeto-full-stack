// splice(indice, delete, element, element) 

let nomes = Array("Samuel", "Amanda", "Natália", "Edson", "José", "Gabi")

console.log(nomes)

nomes.splice(4, 1) // no indice 4 remove 1 elemento e retorna um array com o elemento removido.

console.log(nomes)

nomes.splice(4, 2) // a partir do indice 4 remove 2 elementos

console.log(nomes)

nomes.splice(1, 0, 'Julia')// no indice 1 remova o elemento e adicione Julia

console.log(nomes)