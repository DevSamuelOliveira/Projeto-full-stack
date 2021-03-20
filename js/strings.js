let text = "uma string"

console.log(text[2]) //uma string na verdade é um vetor de caracteres e podemos pegar um caracter de uma posição espécifica
console.log(text.charAt(2)) // equivalente ao metodo acima

//concatenar strings
console.log("uma", "string")
console.log("uma " + "string")
console.log(text.concat(" nova"))
console.log(`${text} nova com templateString`)

//console.log(text.replace("old string", "new string")) //substitui uma string por outra
console.log(text.replace("uma", "duas?"))

console.log(text.length)//retorna a quantidade de caracteres da string

console.log(text.split("")) //retorna uma string separando de acordo o parâmetro passado, pode ser passado um segundo parâmetro
//limitando a quantidade de indice que o retorno deve ter

console.log(text.toUpperCase())//deixa todos os caracteres em caixa alta(caps ligado, letras maiusculas)

console.log(text.toLowerCase())//deixa todos os caracteres em caixa baixa(caps desligado, letras menusculas)

console.log(text.indexOf("s")) //retorna em qual indice uma string começa ou o primeiro caracter procurado
// se a palavra ou indice não for encontrado retorna -1

console.log(text.indexOf("string", 3))// verifica se a string existe a partir/depois daquele indice

//console.log(text.lastIndexOf()) // == indexOf porém começa de trás pra frente

console.log(text.slice(4, 10))// pega os caracteres de um indice até outro, se colocado um número negativo começa de tras pra frente

//console.log(text.match()) //recebe uma expressão regular
//console.log(text.search()) //também recebe uma expressão regular e retorna o indice
