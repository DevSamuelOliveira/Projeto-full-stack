let time1 = setInterval(function(){
  console.log('primeira')
}, 1000)

let time2 = setInterval(() => {
  console.log('segunda')
}, 1000)

setTimeout(() => {
  clearInterval(time1)
  clearInterval(time2)
}, 5100)