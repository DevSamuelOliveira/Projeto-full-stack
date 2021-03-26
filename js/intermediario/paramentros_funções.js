function receber(object){
  if(typeof object != "object"){
    throw new SyntaxError("O parâmetro passado para a função receber(object) deve ser um objeto")
  }

  console.log(`Meu nome é: ${object.nome}\nMinha idade: ${object.idade}`)
}

const dados = {
  nome: "Samuel",
  idade: 19
}

// receber(dados)

function teste1(...args){
  let total = 0
  for (let i of args){
    total++
  }
  console.log(total)
}

teste1(1, 4 , 7, 3 ,2)