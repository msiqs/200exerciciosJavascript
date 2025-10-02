let i = 0
let p
let soma

do{
    i++
    p = i ** 3
    soma = p + p
    console.log(`
${i}³ = ${p}
${p} + ${p} = ${soma}`)
}while(i < 10)
