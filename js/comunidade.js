const allProjects = document.querySelector(".js-todos-projetos");

new function () {
    mostraProjetos();
}

function mostraProjetos() {
    if(localStorage.length == 0) {
        return;
    }
    let projetos = [];
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    //console.log(projetos);
    projetos.forEach(projeto => {
        allProjects.innerHTML += montaCartao(projeto);
        const codigoHtml = allProjects.querySelector(`[data-id="${projeto.id}"]`);
        codigoHtml.querySelector("code").innerText = projeto.detalhesDoProjeto.codigo;
    })
}

function montaCartao(projeto){
    let cartao = 
    `
        <a href="index.html" class="projeto-link" data-id="${projeto.id}">
            <article class="card-projeto">
                <div class="card-codigo" style="border: solid ${projeto.detalhesDoProjeto.borda} 16px;">
                    <code class="projeto__codigo hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
                </div>
                <div class="descricao-projeto">
                    <h3 class="titulo-projeto">${projeto.detalhesDoProjeto.nomeDoProjeto}</h3>
                    <p>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                    <span class="projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}" style="color: ${projeto.detalhesDoProjeto.borda};">#${projeto.detalhesDoProjeto.linguagem}</span>
                </div>
                <div class="social">
                    <div>
                        <i class="fas fa-comment"> 5</i>
                        <i class="fas fa-heart"> 12</i>
                    </div>
                    <div class="social-author">
                        <img src="img/foto-perfil.jpg" alt="foto de perfil" class="social-foto-perfil">
                        <p>@Alana</p>
                    </div>
                </div>
                
            </article>
        </a>
    `;
    return cartao;
}

/*
<a href="index.html" class="projeto-wrapper" data-id="${projeto.id}">
            <article class="projeto">
                <code class="projeto__codigo hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
                <h2 class="projeto__titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p class="projeto__descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                <span class="projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.linguagem}</span>
            </article>
        </a>
        */