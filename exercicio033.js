let i
for (i = 0; i < 10;){
    let r = i++
    let soma = i + r
    console.log(`${i} + ${r} = ${soma}`)
    i = soma
}
