function profile (nome, surname){
  this.nome = nome
  this.surname = surname

  this.exibir = () => console.log(nome, surname)
    
}

profile1 = new profile("Samuel", "Oliveira")

profile1.exibir()