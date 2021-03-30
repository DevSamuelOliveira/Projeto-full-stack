// const mod1 = require('./modules') //Pega o objeto exports de module e executa o arquivo chamado
// const {sum} = require('./modules') //pega somente o sum 
const sum = require('./modules')
const path = require('path')

console.log(sum(19, 31, 3))

console.log(__dirname) // retorna o nome do diretorio/pasta atual
console.log(module.path)

console.log(__filename) // retorna o nome do arquivo executado
console.log(module.filename)
