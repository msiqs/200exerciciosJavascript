const prompt = require('prompt-sync')()

function Inverter(str){
    return str.split('').reverse().join('');
}


while(stopper === 0){
    let palavra = prompt('Digite uma palavra: ')
    palavraInvertida = Inverter(palavra)
    console.log(`${palavraInvertida}`)
    let ask = prompt('Deseja fazer com mais uma palavra? Responda com S ou N: ').toLowerCase()
    if (ask === 's'){
        continue;
    }else if (ask === 'n'){
        break;
    }else{
        console.log(`Error.`)
        break;
    }
}
