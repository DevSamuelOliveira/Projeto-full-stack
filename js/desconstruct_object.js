const dados = {
  dev: "Samuel Souza de Oliveira",
  idade: 19,
  endereco: {
     rua: "Santa barbara",
     bairro: "Fazenda coutos I",
     cidade: "Salvador",
     estado: "Bahia",
  },
  tec: "Javascript",
}

let {dev: nome, idade, endereco: {cidade, ...rest} } = dados

console.log(nome, idade, cidade, rest)