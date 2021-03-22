let num = 0
let array = Array(10, 30 , 40 , 50)
let objeto = {
  nome: "Samuel",
  idade: 20,
  prof: "Desenvolvedor de sistema"
}

console.log(array);

while(num < 10){
  console.log(++num)
}

num = 0

do{
  console.log(++num)
}while(num < 10)

for(num = 1; num <= 10; num++){
  console.log(num)
}

for (let i in array){
  console.log(array[i]);
}

for (let valor of array){
  console.log(valor);
}

for (let chave in objeto){
  console.log(objeto[chave]);
}
