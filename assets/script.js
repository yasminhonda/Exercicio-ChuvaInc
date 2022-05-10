function verMais() {
    let pontos = document.getElementById('pontos')
    let verMais = document.querySelector('#verMais')

    if (pontos.style.display == "none"){
        pontos.style.display = 'inline';
        verMais.style.display = 'none';
    } else {
        pontos.style.display = 'none';
        verMais.style.display = 'inline';
    }

}

function maisRespostas() {
    let dots = document.querySelector('#dots')
    let txt = document.querySelector('#txt')
    let likes = document.querySelector('#like')
    let resposta = document.querySelector('#respostas')
    let comentarios = document.querySelector('#assuntosComentados')

    if (dots.style.display === "none"){
        dots.style.display = 'inline';
        comentarios.style.display = 'none';
        txt.style.display = 'none';
        likes.innerHTML = '1 like';
        resposta.innerHTML = '1 resposta'
    } else {
        dots.style.display = 'none';
        comentarios.style.display = 'inline';
        txt.style.display = 'inline';
        likes.innerHTML = '4 likes';
        resposta.innerHTML = '4 respostas'
    }

}