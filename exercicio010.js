const prompt = require('prompt-sync')();

const media = 7
let nota1 = parseInt(prompt('Digite sua primeira nota: '))
let nota2 = parseInt(prompt('Digite a outra nota: '))
let mediaFinal = (nota1 + nota2) / 2

if (mediaFinal >= media){
    console.log('Aluno aprovado.')
} else{
    console.log('Aluno reprovado.')
}

