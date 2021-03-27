const retorno = () => {
  return{
    data_git: {
      name: "Samuel Oliveira",
      user: "DevSamuelOliveira",
      profile: "https://github.com/DevSamuelOliveira"
    },
    data_personal: {
      name: "Samuel Oliveira",
      age: 19,
    }
  }
}

function retorno2(name, surname){
  return {name, surname}
}

function retorno3(name, surname){
  return{
    name,
    surname,
    pronuncia (assunto) {
      return `${name} fez a pronuncia: ${assunto}`
    }
  }
}

console.log(retorno3("Samuel", "Oliveira").pronuncia("Sou um desenvolvedor full-stack"))