function calcular() {
    let tx1 = window.document.getElementById('txt1')
    let tx2 = window.document.getElementById('txt2')
    let result = window.document.getElementById('res')
    let t1 = Number(tx1.value)
    let t2 = Number(tx2.value)
    let sub = t1 - t2
    result.innerHTML = `Sua idade é <strong>${sub}</strong> anos`

    if (sub >= 18) {
        result.innerHTML += ` <br> Você está <strong>APTO</strong> a tirar a carteira!`
    } else if (sub == 16) {
        result.innerHTML += `<br> Nos EUA você já pode dirigir!`
    } else if (sub < 16) {
        result.innerHTML += `<br> Você <strong>NÃO</strong> está <strong>APTO</strong> a dirigir!`
    }

    if (tx1.value.length == 0 || tx2.value.length == 0) {
        window.alert('PREECHA OS ESPAÇOS VAZIOS!')
        result.innerHTML = 'Digite um número acima!'

    }

}
