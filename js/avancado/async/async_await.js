function pixGetNameOfCpf(cpf){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(cpf == "09515366569") resolve("Samuel Souza de Oliveira")
    }, 3000)
  })
}

// pixGetNameOfCpf(09515366569).then((result) => {
//   console.log(result)
//   return "Novo resultado"
// }).then((result) => {
//   console.log(result)
//   return result + " 2"
// }).then((result) => {
//   console.log(result)
// })

getAssync = async () => {
  console.log(await pixGetNameOfCpf(09515366569))
}

getAssync()