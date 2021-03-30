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

function biggerThen(num, array){
  let result = new Array()

  for(values of array){
    if(values > num){
      result.push(values)
    }
  }
  return result
}

function filter(valor){
  return valor > 10
}

pushNumbersArray(array)

let newArray = array.filter(valor => valor > 10)

console.log(newArray)