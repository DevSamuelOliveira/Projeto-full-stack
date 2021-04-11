document.querySelector('h1').onclick = (e) => {
  fetch('conteudo.html').then(async html =>{
    e.target.innerHTML = await html.text()
  })
}

(async function request(){


})()
