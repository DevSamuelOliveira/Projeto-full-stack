// //propiedades de document
// document.write() // escreve no document
// document.location // retorna um objeto com informações sobre o protocolo, a url da página etc
// document.head // retorna o head da página
// document.URL // retorna a url da página
// document.title // retorna o titulo da página
// document.images // retorna as imagens
// document.links // retorna os links
// document.forms // retorna os formulários

// //selecionando elementos/metodos
// document.getElementById() // retorna um elemento pelo id
// document.querySelector() // retorna um elemento por seleção css, obs: retorna apenas 1 elemento
// document.querySelectorAll() // retorna um elemento por seleção css, obs: retorna todos elementos
// document.getElementsByClassName() // retorna uma colection de elemento html pela class
// document.getElementsByTagName() // retorna uma colection de elemento html pela tag
// document.getElementsByName() // retorna uma colection de elemento html pelo name

//propiedades de seleções
// .value - retorna valor de um input
// .textContent - retorna/altera texto do elemento
// .innerText - retorna/altera texto do elemento
// .innerHTML - retorna/altera o html do elemento
// .style.namestyle - retorna/altera o css do elemento
//  style.setProperty('--color-cinza-claro', 'red') // altera variavel css ou atributo css
// .children - retorna uma colection com os filhos da tag selecionada
// .childNodes - retorna uma nodelist com os filhos
// .parentNode - retorna a tag pai da tag selecionada
// .parentElement - idem parentNode
// .remove() - remove um elemento
// .createElement() - cria um elemento html filho do elemento selecionado
// .append(elemento criado) - insere o elemento no final do elemento selecionado
// .appendChild() - idem append
// .prepend(elemento criado) - insere o elemento no começo do elemento selecionado
// .insertAfter(elemento criado) - insere o elmento depois do elemento selecionado
// .insertBefore(elemento criado) - insere o elemento antes do elemento selecionado
// .getAttribute() - retorna o valor de um atributo
// .setAttribute() - altera o valor de um atributo
// .className - retorna/altera atributo class
// .classList - retorna um objeto para manipular as classes
// .classList.contains() - retorna true se conter a classe, false se não conter
// .classList.add() - adiciona uma classe
// .classList.remove() - remove uma classe
// .ClassList.replace() - troca uma classe por outra
// .classList.toggle() - se a classe existir remove e retorna false, se não existir adiciona e retorna true

// let subTitulo = document.createElement("h2")

// document.getElementsByTagName('div')[0].insertBefore(subTitulo)

// subTitulo.innerText = "Subtitulo criado com javascript manipulando o DOM"
