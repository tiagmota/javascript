//fatorial de uma número = 5! = 5x4x3x2x1= 120
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c //todo número que for rodado no lop, vai entrar pra C e fara vezes o próximo
    }
    return fat
}

console.log(fatorial(5))