let data = new Date()
//new Date(ano, mês, dia, hora, minuto, segundo, milissegundo) criar personalizado

console.log(data.toString()) //retorna uma string com mês, data, ano, horas com segundos
console.log(data.getDate()) // retorna a data
console.log(data.getMonth()) // retorna o mês começando do 0 ou seja janeiro é 0, dezembro é 11 etc
console.log(data.getFullYear()) // retorna o ano
console.log(data.getMinutes()) // retorna os minutos
console.log(data.getSeconds()) // retorna os segundos
console.log(data.getMilliseconds()) // retorna os milisegundos
console.log(data.getDay()) //retorna um valor inteiro que representa o dia do mês começando por 0 sendo domingo o primeiro dia.