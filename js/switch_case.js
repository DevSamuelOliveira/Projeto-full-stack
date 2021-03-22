let teste = Math.random() * (16 - 24) + 24
teste = Number(teste.toFixed())

switch(teste){
  case 19 :
    console.log("baixo") 
    break
  case 18:
    console.log("Passou por pouco")
    break
  case 19:
    console.log("Bem vindo")
    break
  default:
    console.log("O que faz aqui?")
}