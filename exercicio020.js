const prompt = require('prompt-sync')();

const nota = {
    Matheus: 9,
    Lorena: 8,
    Arthur: 7,
    Isabela: 6,
}

let notaAluno = parseFloat(prompt('Digite a nota do aluno: '))

if (notaAluno <= nota.Isabela){
    console.log(`O aluno está em 5º Lugar.`)
} else if (notaAluno > nota.Matheus){
    console.log(`O aluno está em 1º Lugar.`)
} else if (notaAluno === nota.Matheus || (notaAluno < nota.Matheus && notaAluno > nota.Lorena)){
    console.log(`O aluno está em 2º Lugar.`)
} else if (notaAluno === nota.Lorena || (notaAluno < nota.Lorena && notaAluno > nota.Arthur)){
    console.log(`O aluno está em 3º Lugar.`)
} else if (notaAluno === nota.Arthur || (notaAluno < nota.Arthur && notaAluno > nota.Isabela)){
    console.log(`O aluno está em 4º Lugar.`)
} else{
    console.log(`Error.`)
}
