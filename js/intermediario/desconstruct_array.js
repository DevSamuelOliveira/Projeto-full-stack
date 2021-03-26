let a = 10
let b = 30
let c = 15

console.log(a, b, c)

let [d, e, f] = [10, 30, 15] //Criando na forma descontruct, a mesma coisa acima

console.log(d, e, f)

let nomes = ["Samuel", "Amanda", "Maria", "João"]

let [samuel, amanda, maria, joao] = nomes

console.log(samuel, amanda, maria, joao)

let varios = [1, 4, 56, -123 , 210398, 232 , 344, 41]

let [alguns1, alguns2, ...alguns3] = varios

console.log(alguns1, alguns2, alguns3)