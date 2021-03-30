const nome = "Samuel Souza de Oliveira";
const idade = 20

function sum(...nums){
  let sum = 0
  for(values of nums){
    sum += values
  }
  return sum
}

// console.log(module) //Retorna o objeto Module com informações como path, filename, exports

module.exports.nome = nome //cria a chave nome dentro do objeto module em exports que recebe a const nome
exports.idade = idade// idem acima, o module pode ser omitido
this.sum = sum// idem acima

console.log("O que está aqui é executado quando o modulo é requerido")

module.exports = (...nums) => { // Retorna apenas isso e quando for chamado não precisa ser referenciado
  let sum = 0
  for(values of nums){
    sum += values
  }
  return sum
}