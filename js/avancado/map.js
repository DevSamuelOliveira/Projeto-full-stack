const array = new Array()

function rand(min = 0, max = 30) {
  let random = Math.random() * (min - max) + max
  return Math.floor(random)
}

function pushNumbersArray(array){
  for(let i = 0; i<15; i++){

    let gerar_num = rand()
  
    for(values of array){
      if (gerar_num == values){
        do{
          gerar_num = rand()
        }while(rand() == values)
      }
    }
    array.push(gerar_num)
  }
}

pushNumbersArray(array)

const newArray = array.map(function(valor){
  return valor * 3
})

array.map(function(valor){
  console.log(valor)
})

console.log('--------------------------')

newArray.map(function(valor){
  console.log(valor)
})