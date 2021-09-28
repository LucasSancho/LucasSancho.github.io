if (sessionStorage.getItem('CarrinhoTamanho') == null)
    sessionStorage.setItem('CarrinhoTamanho', 0)

function AdicionarProdutoPagina(id, quantidade)
{
    console.log("Criando a produto...")

    let conteudo = document.getElementById('Conteudo')
    let p = document.createElement("p")

    p.innerHTML = "O produto escolhido tem o id=" + String(id) + " com a quantidade=" + String(quantidade)

    conteudo.appendChild(p)
    console.log("Produto Criado")
    console.log("--------------")
}

function EnviarConteudo(numero)
{
    console.log("Enviando conteúdo...")

    let id = sessionStorage.getItem('carrinho-' + String(numero))
    let quantidade = sessionStorage.getItem('quantidade-' + String(numero))

    AdicionarProdutoPagina(id, quantidade)
}

function VerificarCarrinho()
{
    console.log("Verificando Carrinho...")

    let CarrinhoTamanho = sessionStorage.getItem('CarrinhoTamanho')
    let x = 0

    while (x < CarrinhoTamanho)
    {
        console.log("Iniciando o produto do carrinho numero=" + x)
        EnviarConteudo(x)
        x++
    }

}

VerificarCarrinho()