const random = () => Math.random () * (4000 - 500) + 500

function func1(callback){
  setTimeout(() => {
    console.log("f1")
    if(callback) callback()
  }, random())
}

function func2(callback){
  setTimeout(() => {
    console.log("f2")
    if(callback) callback()
  }, random())
}

function func3(callback){
  setTimeout(() => {
    console.log("f3")
    if(callback) callback()
  }, random())
}

func1(func2(func3))

func1(() => {
  func2(() => {
    func3()
  })
})

console.log("aqui termina insta")