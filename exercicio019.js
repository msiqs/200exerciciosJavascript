const prompt = require('prompt-sync')()

let min, max
let numero = parseInt(prompt('Digite um número: '))
min = 0
max = 100

if (numero >= 0 && numero <= 100){
    console.log(`${numero} está dentro do intervalo.`)
}else{
    console.log(`${numero} não está dentro do intervalo.`)
}
