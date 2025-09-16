const prompt = require('prompt-sync')()

const idadeMinima = 18

let idade = parseInt(prompt('Digite sua idade: '))

if (idade >= idadeMinima){
    console.log('Você já pode dirigir.')
}else {
    console.log('Você ainda não tem idade para dirigir.')
}
