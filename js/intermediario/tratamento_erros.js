try{
  console.log(nada)
}catch(error){
  console.log("ops aconteceu algum erro")
  console.log(error.message)
}

try{
  throw new Error("cria um novo erro")
  console.log("quebrou")
}catch(error){
  console.log(error.message)
}

try{

} catch(error){

}finally{

}