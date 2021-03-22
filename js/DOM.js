const { dir } = require("node:console")

console.log(document.location) // retorna um objeto com informações sobre o protocolo, a url da página etc
console.log(console.dir(document.head)) // retorna o head da página
console.log(document.URL) // retorna a url da página
console.log(document.title) // retorna o titulo da página
console.log(document.images) // retorna as imagens
console.log(document.links) // retorna os links
console.log(document.forms) // retorna os formulários
console.log(console.dir(document.getElementById())) // retorna um elemento pelo id
console.log(console.dir(document.getElementsByClassName())) // retorna uma colection de elemento html pela class
console.log(console.dir(document.getElementsByTagName())) // retorna uma colection de elemento html pela tag
console.log(console.dir(document.getElementsByName())) // retorna uma colection de elemento html pelo name

//document.head.innerHTML // altera o html do head
//document.body.innerHTML = "mudei o body"// altera o html do body
