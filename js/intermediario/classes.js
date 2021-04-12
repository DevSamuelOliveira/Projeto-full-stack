class Banco{
  constructor(saldo){
    this.saldo = saldo
  }
}

function Banco2(saldo){
  this.saldo = saldo
}

const itau = new Banco(40)
const santander = new Banco2(50)

console.log(itau.saldo)
console.log(santander.saldo)
