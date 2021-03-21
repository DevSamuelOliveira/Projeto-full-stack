const shell = require('shelljs'); //npm install shelljs

let nomes = ['samuel', 'amanda', 'natalia']

console.log(nomes[1]);

shell.exec('git add .')
shell.exec('git commit -m "modulo shelljs instalado com npm e criado arquivo para trabalhar com array/vetores"')
shell.exec('git push')