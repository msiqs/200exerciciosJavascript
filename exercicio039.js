const prompt = require('prompt-sync')();

let n = parseInt(prompt('Digite o número que você quer saber o fatorial: '))
let i = n
let y = 0
let x = []
let fatorial = 1

for (i; i > 0; i--){
    x[y] = i
    fatorial *= x[y]
    y++
}
console.log(`${n}! = ${fatorial}`)
