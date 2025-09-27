const prompt = require('prompt-sync')()

let stopper = 0

do{
    let player1 = prompt('Você é o PLAYER 1, digite seu nick: ').toLowerCase()
    let player2 = 'BOT'
//     if (player1 === player2){
//     console.log('Escolha um nick diferente do nick do player 1.')
//     continue;
// }
    while(true){
    const options = ['pedra', 'papel', 'tesoura']
    let escolha_player1 = prompt(`${player1}: Escolha pedra, papel ou tesoura: `).toLowerCase()
    let escolha_player2 = options[Math.floor(Math.random() * options.length)]
    console.log(`${player2} escolheu ${escolha_player2}.`)
    if (escolha_player1 === 'pedra' && escolha_player2 === 'pedra'){
        console.log(`Empate!`)
        continue;
    } else if(escolha_player1 === 'pedra' && escolha_player2 === 'tesoura'){
        console.log(`${player1} WINS!`)
        stopper++
        break;
    } else if(escolha_player1 === 'pedra' && escolha_player2 === 'papel'){
        console.log(`${player2} WINS!`)
        stopper++
        break;
    } else if(escolha_player1 === 'tesoura' && escolha_player2 === 'tesoura'){
        console.log(`Empate!`)
        continue;
    } else if(escolha_player1 === 'tesoura' && escolha_player2 === 'papel'){
        console.log(`${player1} WINS!`)
        stopper++
        break;
    } else if(escolha_player1 === 'tesoura' && escolha_player2 === 'pedra'){
        console.log(`${player2} WINS!`)
        stopper++
        break;
    } else if(escolha_player1 === 'papel' && escolha_player2 === 'papel'){
        console.log(`Empate!`)
        continue;
    } else if(escolha_player1 === 'papel' && escolha_player2 === 'pedra'){
        console.log(`${player1} WINS!`)
        stopper++
        break;
    } else if(escolha_player1 === 'papel' && escolha_player2 === 'tesoura'){
        console.log(`${player2} WINS!`)
        stopper++
        break;
    } else{
        continue;
    }
    }

}while(stopper === 0)
