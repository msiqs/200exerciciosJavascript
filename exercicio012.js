const prompt = require('prompt-sync')();

const mediaFinal = {
    Matheus: 7,
    Douglas: 9,
    Ana: 8,
    Roberto: 5
}
let verificar
let aluno = prompt('Qual aluno você quer verificar a situação? ')
const media = 7

switch(aluno.toLowerCase()){
    case 'matheus':
        verificar = mediaFinal.Matheus >= media
    if (verificar === true){
        console.log(`Aluno: Matheus
Situação: Aprovado`)
    }else {
        console.log(`Aluno: Matheus
Situação: Reprovado`)
    }
    break;

    case 'douglas':
        verificar = mediaFinal.Douglas >= media
    if (verificar === true){
        console.log(`Aluno: Douglas
Situação: Aprovado`)
    }else {
        console.log(`Aluno: Douglas
Situação: Reprovado`)
    }
    break;

    case 'ana':
        verificar = mediaFinal.Ana >= media
    if (verificar === true){
        console.log(`Aluno: Ana
Situação: Aprovado`)
    }else {
        console.log(`Aluno: Ana
Situação: Reprovado`)
    }
    break;

    case 'roberto':
        verificar = mediaFinal.Roberto >= media
    if (verificar === true){
        console.log(`Aluno: Roberto
Situação: Aprovado`)
    }else {
        console.log(`Aluno: Roberto
Situação: Reprovado`)
    }
    break;

    default:
        console.log('Aluno não encontrado')
}

