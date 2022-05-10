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
    let comentarios = document.querySelector('#assuntosComentados')

    if (comentarios.style.display == "none"){
        comentarios.style.display = 'inline';
    } else {
        comentarios.style.display = 'none';
    }

}