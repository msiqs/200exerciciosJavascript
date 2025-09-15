const prompt = require('prompt-sync')()

let peso = parseFloat(prompt('Informe seu peso em kg: '));
let altura = parseFloat(prompt('Informe sua altura em metros: '));
let formula = peso / (altura)**2
formula = formula.toFixed(1)
if (formula < 18.5){
    console.log(`Seu IMC está abaixo de 18,5 (${formula}), portanto está abaixo do peso`);
}else if (formula >= 18.5 || formula <= 25){
    console.log(`Seu IMC está entre 18,5 e 25 (${formula}), portanto está com o peso normal`);
}else if (formula > 25 || formula <= 30){
    console.log(`Seu IMC está entre 25 e 30 (${formula}), portanto está acima do peso`);
}else if(formula > 30){
    console.log(`Seu IMC está acima de 30 (${formula}), portanto está obeso`);
}
