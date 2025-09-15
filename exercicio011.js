const prompt = require('prompt-sync')()

const idadeMinima = 16

let idade = parseInt(prompt('Digite sua idade: '))

if (idade >= idadeMinima){
    console.log('Você pode já votar.')
}else {
    console.log('Você ainda não tem idade para votar.')
}
