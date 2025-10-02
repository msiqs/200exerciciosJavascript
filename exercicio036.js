let i
let euler

for (i = 0; i <= 3; i++){
    if (i !== 1 && (i === 2 | i === 3) | (i % 2 !== 0 && i % 3 !== 0)){
        euler = 2 ** (i - 1) * (2 ** i - 1)
        console.log(euler)
    }
}



