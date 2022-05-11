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

function criarTopico() {
    let discussoes = document.querySelector('#discussoes')

    let div = document.createElement('div')

    div.setAttribute('class', 'addTopico')
        
    div.innerHTML = '<p class="p1">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p><label class="assunto" for="assunto">Assunto</label><input type="text" id="assunto" class="inputAssunto" placeholder="Defina um tópico sucinto para notificar os autores..."></input><label for="txtarea" class="conteudo">Conteúdo</label><textarea class="txtConteudo" id="txtarea"></textarea><div class="divPuglin"><div class="puglins"><i class="fas fa-bold"></i><i class="fas fa-italic"></i></div><button class="enviar" onclick="enviar()">Enviar</button></div><hr class="hr2">'

    let parentDiv = discussoes.parentNode
    parentDiv.replaceChild(div, discussoes)
}

function enviar() {
    let div = document.querySelector('.addTopico')
    let div2 = document.createElement('div')
    div2.setAttribute('class', 'topicoEnviado')

    div2.innerHTML = '<p class="p1">Seu tópico foi enviado com sucesso! :D</p><p class="p2">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p><p class="p3"><a href="#">Descubra outros trabalhos!</a></p><hr><button class="btnCriarNovoTopico">criar novo tópico</button><div class="aguardandoFeedback"><img src="./assets/imgs/simbol-black.png"><p class="p4">Aguardando feedback dos autores</p><p class="p5"><a href="#">Editar tópico</p></p></div>'

    let parentDiv2 = div.parentNode
    parentDiv2.replaceChild(div2, div)

    let btnCriarNovoTopico = document.querySelector('.btnCriarNovoTopico')

    btnCriarNovoTopico.addEventListener('click', () => {parentDiv2.replaceChild(div, div2)})
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