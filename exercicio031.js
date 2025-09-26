const prompt = require('prompt-sync')();

let numero, pergunta1

while(true){
    numero = parseInt(prompt('Digite um número de 1 a 10: '));
    pergunta1 = prompt('O número que você pensou é par? Responda com S ou N: ').toLowerCase()
    if (pergunta1 === 's'){
        let pergunta2 = prompt('Seu número é maior que 6? Responda com S ou N: ').toLowerCase();
        if (pergunta2 === 's'){
            let pergunta3 = prompt('Seu número é menor que 10? Responda com S ou N: ').toLowerCase();
            if (pergunta3 === 's'){
                console.log(`O número que você pensou foi o 8.`)
            }else if(pergunta3 === 'n'){
                console.log(`Seu número é o 10.`)
            }
            }else if(pergunta2 === 'n'){
            let pergunta3 = prompt('Então ele é menor que 6? Responda com S ou N: ').toLowerCase();
            if (pergunta3 === 's'){
                let pergunta4 = prompt('E maior que 2? Responda com S ou N: ').toLowerCase()
                } else if (pergunta4 === 's'){
                    console.log(`Então seu número é o 4.`)
                } else if (pergunta4 === 'n'){
                    console.log(`Seu número é 2.`)
                } else if (pergunta3 === 'n'){
                console.log(`Seu número é o 6.`)
            }

        }else if(pergunta1 === 'n'){
            let pergunta2 = prompt('Seu número é maior que 5? Responda com S ou N: ').toLowerCase();
            if (pergunta2 === 's'){
                let pergunta3 = prompt('Seu número é menor que 9? Responda com S ou N: ').toLowerCase();
                if (pergunta3 === 's'){
                    console.log(`Então seu número é o 7`)
                }else if(pergunta3 === 'n'){
                    console.log(`Seu número é 9.`)
                }
            }else if(pergunta2 === 'n'){
                let pergunta3 = prompt('Então ele é menor que ')
            }
        }
    }
}
