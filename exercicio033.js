let t = [1, 2, 3]
console.log(t[0])
console.log(t[1])

for (i = 2; i < 10; i++){
    t[i] = t[(i - 2)] + t[(i - 1)]
    console.log(t[i])
}
