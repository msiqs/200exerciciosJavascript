const prompt = require('prompt-sync')()

const semaforo = ['verde', 'amarelo', 'vermelho']
let i

for (i = 0; i < semaforo.length; i++){
    if(i === 0){
        console.log(`O semáforo está verde.`)
    } else if (i === 1){
        console.log(`O semáforo está amarelo.`)
    } else if (i === 2){
        console.log(`O semáforo está vermelho.`)
    }
}
