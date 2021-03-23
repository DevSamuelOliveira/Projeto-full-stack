const path = require('path')

var nome = "Samuel"

//formas de exportar
module.exports.nome = nome
exports.nome = nome // 
this.nome = nome

console.log(exports)

console.log(__filename) //retorna o caminho e o nome do arquivo
console.log(__dirname) //retorna o caminho do arquivo
console.log(path.resolve(__dirname, '..', 'nem exsite')) //altera o path 