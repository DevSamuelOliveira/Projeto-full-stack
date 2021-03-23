const fs = require('fs').promises
const path = require('path')
const pathFile = path.resolve(__filename, '..' ,'arquivo.txt') 

fs.writeFile(pathFile, 'primeira interação\n', {flag: 'w', encoding: 'utf8'})
fs.writeFile(pathFile, 'segunda interação', {flag: 'a', encoding: 'utf8'})

// flag 'w' - Se o arquivo existir será sobrescrito, se não existir será criado.
// flag 'a' - Se o arquivo existir será adicionado o conteudo no final do arquivo

retorno = fs.readFile(pathFile, {flag: 'r', encoding: 'utf8'})

setTimeout(() => console.log(retorno), 2000)
