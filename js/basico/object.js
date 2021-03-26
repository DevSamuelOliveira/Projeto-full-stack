let dados = {
  nome: "Samuel",
  idade: 19,
  função: "desenvolvedor full-stack",

  exibir(){
    console.log(`$meu nome é: ${this.nome}, tenho ${this.idade} anos e sou ${this.função}`)
  }
}

function dados2(nome = "Samuel", idade = 19, função = "desenvolvedor full-stack"){
  return {
    nome: nome,
    idade: idade,
    função: função
  }
}

let dados3 = (nome = "Samuel", idade = 19, função = "desenvolvedor full-stack") => {
  return {
    nome: nome,
    idade: idade,
    função: função
  }
}
  
let dados4 = function(nome = "Samuel", idade = 19, função = "desenvolvedor full-stack"){
  return {
    nome: nome,
    idade: idade,
    função: função
  }
}

dados.exibir()