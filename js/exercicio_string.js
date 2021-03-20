document.body.innerHTML = "<h1> Manipulação do DOM e strings </h1>"

const nome = prompt("Digite seu nome completo: ")
const sobrenome = nome.split(" ")

let qt_char_name = 0

for (let i = 0; i < sobrenome.length; i++) {
  qt_char_name += sobrenome[i].length
}

document.body.innerHTML += `Seu nome é: ${nome} <br>`
document.body.innerHTML += `Seu sobrenome é: ${sobrenome[1]} <br>`
document.body.innerHTML += `Seu nome completo tem ${qt_char_name} caracteres`
