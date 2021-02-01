let acervo = []
let requisitos = ["titulo", "descricao", "genero", "autor"]
let NCatalogo = 0

function Cadastro()
{
    let titulo = document.getElementById("titulo")
    let descricao = document.getElementById("descricao")
    let genero = document.getElementById("genero")
    let autor = document.getElementById("autor")

    console.log(titulo.value)
    console.log(descricao.value)
    console.log(genero.value)
    console.log(autor.value)

    acervo.push({"titulo":titulo.value, "descricao":descricao.value, "genero":genero.value, "autor": autor.value})
    console.log(acervo)
    CatalogoColocar()
}

function CatalogoColocar()
{
    let local = document.getElementById("catalogo")
    let elemento = document.createElement("div")
    let x = 0
    let imagem = document.createElement("img")
    imagem.src = "lixo.png"

    while(x < requisitos.length)
    {
        elemento.id = "Livro" + NCatalogo + x
        elemento.append(acervo[NCatalogo][requisitos[x]])
        local.appendChild(elemento)
        elemento = document.createElement("div")

        x++
    }
    

    elemento = document.createElement("a")
    elemento.id = "Livro" + NCatalogo + x
    x = NCatalogo
    elemento.onclick =()=>{Lixeira(x)} 
    elemento.appendChild(imagem)
    local.appendChild(elemento)


    NCatalogo++
}

function Lixeira(linha)
{
    let x = 0
    console.log(linha)
    while(x <= requisitos.length)
    {
        let elemento = document.getElementById("Livro"+ linha + x)
        elemento.remove()
        console.log(x)
        x++
    }
    acervo.splice(linha, 1)
}

function Enviar()
{
    let post = document.getElementById("acervoPost")
    post.value = JSON.stringify(acervo)
}