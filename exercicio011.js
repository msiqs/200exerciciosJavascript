const prompt = require('prompt-sync')()

const idadeMinima = 16
let idade = parseInt(prompt('Digite sua idade: '))

if (idade >= idadeMinima){
    console.log('Você já pode votar.')
}else {
    console.log('Você ainda não tem idade para votar.')
}
