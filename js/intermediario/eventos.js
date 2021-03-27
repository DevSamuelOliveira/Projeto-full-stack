const disparar = () => console.log("o evento foi disprado")

document.querySelector('h1').addEventListener('click', disparar)

document.querySelectorAll('a')[0].addEventListener('click', (event) => {
  event.preventDefault()
})

document.querySelectorAll('a')[1].addEventListener('click', (event) => {
  event.preventDefault()
})

function myEvent(event){
  event.target.style.backgroundColor = 'red'
}