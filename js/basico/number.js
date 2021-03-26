let num = 10

Number()// converte/retonra um inteiro
parseInt()// converte um objeto para inteiro
parseFloat()// converte um objeto para float

console.log(num.toString())// retorna o número em string
console.log(num.toFixed())// diz quantas casas decimais o número deve ter
console.log(Number.isInteger(num))// retorna true se o número	for inteiro e false se não for inteiro

//quando vc faz uma operação errada ou indeseja ex: num * string é retor NaN que significa not a number
//do português não é um número.
console.log(Number.isNaN()) // retorna true se for NaN, falso se não for

//https://www.alura.com.br/artigos/formatando-numeros-no-javascript#:~:text=Como%20queremos%20deixar%20a%20resposta,20.555%20%2C%20o%20valor%20fica%2020.56%20.
console.log(num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))