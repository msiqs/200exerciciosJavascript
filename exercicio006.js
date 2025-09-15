let zero = false
let um = true
let operacao1, operacao2, operacao3

operacao1 = zero || um
operacao2 = !zero && um
operacao3 = zero && !um

console.log(operacao1, operacao2, operacao3)
