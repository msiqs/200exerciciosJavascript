const prompt = require('prompt-sync')();

let validar, validar1, validar2, validar3
let n1 = parseInt(prompt('Digite um número: '))
let n2 = parseInt(prompt('Digite outro número: '))
let n3 = parseInt(prompt('Digite o último número: '))

validar = n1 > n2 && n1 > n3
validar1 = n2 > n1 && n2 > n3
validar2 = n3 > n1 && n3 > n2
validar3 = n1 === n2 && n2 === n3

if (validar === true){
    console.log(`${n1} é o maior número entre os três.`)
} else if (validar1 === true){
    console.log(`${n2} é o maior número entre os três.`)
} else if (validar2 === true){
    console.log(`${n3} é o maior número entre os três.`)
}else if (validar3 === true) {
    console.log(`Os números são iguais.`)
}else{
    console.log(`Error.`)
}
