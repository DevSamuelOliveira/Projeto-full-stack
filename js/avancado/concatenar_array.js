let array1 = new Array(1, 4, 2, 9)
let array2 = new Array(12, 34, 42, 19)

let array3 = array1 + array2 //vira uma string dos 2 array
console.log(array3)

let array4 = array1.concat(array2) //Concatena os array
console.log(array4)

let array5 = array1.concat("new element", array2, "outro elemento")// concatena array podendo adicionar novos valores entre eles
console.log(array5)

let array6 = [...array1, ...array2] //idem método usando no array4
console.log(array6)

let array7 = [...array1, 'new element', ...array2] //idem método usando no array5
console.log(array7)