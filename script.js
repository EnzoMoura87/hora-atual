function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}h:${minutos}m`;

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha1.png';
        document.body.style.background = '#fed4aa';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/tarde1.png';
        document.body.style.background = '#e8a028';
    } else {
        imagem.src = 'imagens/noite1.png';
        document.body.style.background = '#9f83bd'
    }
}
