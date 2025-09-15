const prompt = require('prompt-sync')()

function Inverter(str){
    return str.split('').reverse().join('');
}
let palavra = prompt('Digite uma palavra: ')
palavraInvertida = Inverter(palavra)

if (palavra === palavraInvertida){
    console.log(`${palavra} é um palíndromo.`)
}else{
    console.log(`${palavra} não é um palíndormo.`)
}
