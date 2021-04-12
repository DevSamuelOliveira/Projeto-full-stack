class Banco{
  saldo = 40000
}

function Banco2(){
  this.saldo = 50000
}

const itau = new Banco
const santander = new Banco2

console.log(itau.saldo)
console.log(santander.saldo)
