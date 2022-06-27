function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {}

    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fsex [0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/bebe-menino.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/homem-jovem.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/homem-adulto.png')
        } else if (idade < 90) {
            img.setAttribute('src', 'imagens/homem-velho.png')
        } else {
            window.alert('[ERRO] IDADE INVÁLIDA')
        }
        
    } else if (fsex [1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/bebe-menina.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/mulher-jovem.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/mulher-adulta.png')
        } else if (idade < 90) {
            img.setAttribute('src', 'imagens/mulher-velha.png')
        } else {
            window.alert('[ERRO] IDADE INVÁLIDA')
        }
    }
    // res.style.textAlign = 'center' centralizar um parágrafo com JS 
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)

}