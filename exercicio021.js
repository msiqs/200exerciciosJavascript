const prompt = require('prompt-sync')()

const estacao = {
    janeiro: 'verão',
    fevereiro: 'verão',
    março: 'verão',
    abril: 'outono',
    maio: 'outono',
    junho: 'outono',
    julho: 'inverno',
    agosto: 'inverno',
    setembro: 'inverno',
    outubro: 'primavera',
    novembro: 'primavera',
    dezembro: 'primavera'
}

let mes = prompt('Digite um mês: ')
mes = mes.toLowerCase()
validar = estacao[mes] === undefined

if (validar === false){
    console.log(`A estação do mês de ${mes} é ` + estacao[mes] + `.`)
}else{
    console.log(`${mes} não é um mês válido.`)
}
