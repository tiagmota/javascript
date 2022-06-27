function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas. <br>`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f2ce8e'
        msg.innerHTML += `Bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fe7800'
        msg.innerHTML += `  Boa Tarde!`
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#785f93'
        msg.innerHTML += `Boa Noite!`
    }

    

}