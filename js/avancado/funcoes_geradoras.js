//Funções gerarodas são funções que retornam um valor diferente a cada chamada, se os valores todos já tiverem sido retornados
//na proxima chamada ela não retorna nada.

function* geradora1(){
  yield "Samuel Oliveira"
  yield "Amanda Oliveira"
}

g1 = geradora1()

console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())


