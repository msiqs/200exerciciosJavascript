const prompt = require('prompt-sync')()

let validar, mes_escolhido

const mes = {
    janeiro: 31,
    fevereiro: 28,
    março: 31,
    abril: 30,
    maio: 31,
    junho: 30,
    julho: 31,
    agosto: 31,
    setembro: 30,
    outubro: 31,
    novembro: 30,
    dezembro: 31
}

mes_escolhido = prompt('Digite o mês que você quer saber quantos dias tem: ').toLowerCase()
validar = mes[mes_escolhido] === undefined

if (validar === false){
    console.log(`O mês de ${mes_escolhido}` + ` tem ` + mes[mes_escolhido] + ` dias.`)
} else{
    console.log(`ERROR: ${mes_escolhido} não é um mês válido.`)
}
