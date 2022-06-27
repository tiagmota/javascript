function media() {
    let tx0 = document.getElementById('txt0')
    let tx1 = document.getElementById('txt1')
    let tx2 = document.getElementById('txt2')
    let res = document.getElementById('res')
    let botão = document.getElementById('butt')
    let nome = (tx0.value)
    let t1 = Number(tx1.value)
    let t2 = Number(tx2.value)
    let s = (t1 + t2) / 2

    if (botão = 'click' == false) {
        window.alert('ERRO! PREENCHA OS CAMPOS VAZIOS!')
    } else if (nome.length == 0) {
        window.alert('ERRO! PREENCHA OS CAMPOS VAZIOS!')
    } else if (tx1.length == 0) {
        window.alert('ERRO! PREENCHA OS CAMPOS VAZIOS!')
    } else if (tx2.length == 0) {
        window.alert('ERRO! PREENCHA OS CAMPOS VAZIOS!')
    } else {
        res.innerHTML = `Olá ${nome}, sua nota é `
        res.innerHTML += `${s}. <br>`

        if (s >= 70) {
            res.innerHTML += '<br> Você está APROVADO!'
        } else if (s >= 50 && s < 70) {
            res.innerHTML += '<br> Você está de RECUPERAÇÃO'
        } else {
            res.innerHTML += '<br> Você está REPROVADO!'
        }

    }


}
