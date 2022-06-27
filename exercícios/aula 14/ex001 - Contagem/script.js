function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! PREENCHA OS CAMPOS EM BRANCO!')
        res.innerHTML = ('Impossível Contar!')
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1.')
            p = 1
        }

        /*Contagem Crescente */
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        /*Contagem Regressiva */
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}