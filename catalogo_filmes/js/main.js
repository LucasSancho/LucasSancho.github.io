let x = 0

async function Catalogo()
{
    let informacao = await fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")

    let catalago = await informacao.json()
    return catalago
}

function Estrelas(LocalNome,quantidade)
{
    let local = document.getElementById(LocalNome)
    let y = 1


    while(y <= 5.5)
    {
        let estrela = document.createElement("img")
        estrela.src = "img/meiaStrela1.png"
        if(y < quantidade+1)
            estrela.style.filter = "sepia(100) saturate(4)"
        
        if(y % 1 == 0.5)
            estrela.style.transform = "scaleX(-1)"

        local.appendChild(estrela)

        y+= 0.5
    }
}

function ImagemSimilar(LocalNome, ImagemUrl)
{
    let LocaImagem = document.getElementById(LocalNome)
    let imagem = document.createElement("img")

    imagem.src = ImagemUrl

    LocaImagem.appendChild(imagem)
}

function IdentificarIdade(idade)
{
    let cor

    switch (idade) {
        case 18: cor = "rgba(29,24,21,255)"
                break
    
        case 16: cor = "rgba(219,39,38,255)"
                break
            
        case 14: cor = "rgba(230,120,35,255)"
                break
        
        case 12: cor = "rgba(228,175,17,255)"
                break
        
        case 10: cor = "rgba(14,125,194,255)"
                break
        case 0: cor = "rgba(12,149,71,255)"
    }

    return cor
}

function Comecar(info)
{
    info.forEach(parte => 
    {
        let inicio = document.getElementById("inicio")
        let catalogo = document.createElement("div")
        let ImagemPrincipal = document.createElement("img")
        let informacoes = document.createElement("div")
        let titulo = document.createElement("h3")
        let rating = document.createElement("div")
        let genero = document.createElement("p")
        let elenco = document.createElement("p")
        let idade = document.createElement("div")
        let ValorIdade = document.createElement("p")
        let resumo = document.createElement("p")
        let imagens = document.createElement("div")
        let TituloSimilares = document.createElement("h3")
        let TudoComentario = document.createElement("div")
        let QuantidadeEstrela = 0



        catalogo.className = "catalogo";
        ImagemPrincipal.src = parte["figura"]
        informacoes.className = "informacoes"
        titulo.innerHTML = parte["titulo"]
        rating.className = "rating"
        rating.id = "rating" + x
        genero.className = "genero"
        genero.innerHTML = "<b>Gênero:</b> "
        parte["generos"].forEach(Genero =>{genero.innerHTML += Genero + ", "})
        elenco.className = "elenco"
        elenco.innerHTML = "<b>Elenco:</b> "
        parte["elenco"].forEach(Elenco => {elenco.innerHTML += Elenco + ", "})      
        idade.className = "idade"
        ValorIdade.innerHTML = parte["classificacao"]
        resumo.className = "resumo"
        resumo.innerHTML = parte["resumo"]
        imagens.className = "imagens"
        imagens.id = "imagens" + x
        TituloSimilares.className = "TituloSimilares"
        TituloSimilares.innerHTML = "Titulos Similares"
        TudoComentario.className = "TudoComentario"
        
        idade.style.backgroundColor = IdentificarIdade(parte["classificacao"])
        if(parte["classificacao"] == 0)
            ValorIdade.innerHTML = "L"
        
        if(parte["opinioes"].length <= 1)
            TudoComentario.style.left = "69.6%"

        genero.innerHTML = genero.innerHTML.substring(0, genero.innerHTML.length-2) + "."
        elenco.innerHTML = elenco.innerHTML.substring(0, elenco.innerHTML.length-2) + "."


        inicio.appendChild(catalogo)
        catalogo.appendChild(ImagemPrincipal)
        catalogo.appendChild(informacoes)
        informacoes.appendChild(titulo)
        informacoes.appendChild(rating)
        informacoes.appendChild(genero)
        informacoes.appendChild(elenco)
        catalogo.appendChild(idade)
        idade.appendChild(ValorIdade)
        catalogo.appendChild(resumo)
        catalogo.appendChild(imagens)
        imagens.appendChild(TituloSimilares)
        catalogo.appendChild(TudoComentario)
        
        

        for(let i in parte["opinioes"])
        {
            let comentario = document.createElement("div")
            let ImagemComentario = document.createElement("div")
            let ComentarioEscrita = document.createElement("p")

            comentario.className = "comentario"
            ImagemComentario.className = "ImagemComentario" 
            ImagemComentario.id = "ImagemComentario" + x + i
            ComentarioEscrita.innerHTML = parte["opinioes"][i]["descricao"]
  
            
            TudoComentario.appendChild(comentario)
            comentario.appendChild(ImagemComentario)
            comentario.appendChild(ComentarioEscrita)

            Estrelas(ImagemComentario.id, parte["opinioes"][i]["rating"])

            QuantidadeEstrela += parte["opinioes"][i]["rating"]

        }

        Estrelas("rating" + x, QuantidadeEstrela/parte["opinioes"].length)

        parte["titulosSemelhantes"].forEach(titulos =>{ImagemSimilar("imagens"+x,info[titulos-1]["figura"])})

        x++
    });
}

Catalogo().then(informacao => Comecar(informacao))

console.log("oi")
