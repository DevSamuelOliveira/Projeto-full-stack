const fs = require('fs').promises
const path = require('path')

const files =  fs.readdir(path.resolve(__dirname, '..'))
.then(files => files)

setTimeout(() => console.log(files), 2000)

console.log(path.resolve(__dirname, 'arquivo.txt'))