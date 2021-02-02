var glossario = [{"id":1, "termo":"W3C"
    ,  "definicao": "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet"
    , "autor": "José Borges", "dataCriacao": "2015-04-01"}
    ,{"id":2, "termo":"HTML"
    , "definicao": "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web"
    , "autor": "Pedro Silva", "dataCriacao": "2017-05-12"}
    ,{"id":3, "termo": "CSS"
    , "definicao": "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web"
    , "autor": "Maria Machado", "dataCriacao": "2018-10-11"}];

let existe = 0

function Mostrar(id)
{
    let definicao = document.getElementById("definicao")
    let elemento = document.createElement("div")

    if (existe == 1)
    {
        let apagar = document.getElementById("existe")

        apagar.remove()
    }

    elemento.id = "existe"
    definicao.appendChild(elemento)

    existe = 1

    definicao = document.getElementById("existe")

    elemento = document.createElement("h3")
    elemento.append(glossario[id]["termo"])
    definicao.appendChild(elemento)

    elemento = document.createElement("p")
    elemento.append(glossario[id]["definicao"])
    definicao.appendChild(elemento)

    elemento = document.createElement("p")
    elemento.append("Criado por " + glossario[id]["autor"] + " em " + glossario[id]["dataCriacao"])
    definicao.appendChild(elemento)

}