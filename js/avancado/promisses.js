/* A promise tem 4 estados
PENDENTE //Quando a promise é requerida
REALIZADA //Quando a promise é completada com sucesso
REJEITADA //Quando ocorre algum erro, conexão, não executada com sucesso etc
ESTABELICIDA// Quando o resultado é completado independente de ser com sucesso ou erro

Promise.resolve() //uma promise já pronta.
Promise.reject() //uma promise rejeitada

.then(function) //metodo de uma promise que é executado quando a promise está no estado REALIZADA ou seja quando ela é completada com sucesso
obs: o resolve ou reject pode receber 1 parâmetro que pode capturado pela função passada dentro de then ou catch.

.catch(function) //método de uma promise que é executado quando a promise está no estado REALIZADA ou seja não é completada com sucesso
*/

function assincronaPromiseResolve(msg = "Resolvida com sucesso"){
  return Promise.resolve(msg)
}

// assincronaPromiseResolve().then(function(){
//   console.log("Foi resolvida com sucesso")
// })

// assincronaPromiseResolve().then(function(param){
//   console.log(param)
// })


function assincronaPromise(){
  return new Promise(function(resolve, reject){
    console.log("Iniciei uma função assincrona")
    setTimeout(() =>{
      let cond = false
      if (cond){
        resolve("Função assincrona foi retornada com sucesso")
      }
      else{
        reject("Função assincorna foi executada mas ocorreu um erro")
      }
    }, 4000)
  })
}

assincronaPromise().then((msg) =>{
  console.log(msg)
}).catch((msg) =>{
  console.log(msg)
})
