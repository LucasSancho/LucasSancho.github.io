if (sessionStorage.getItem('CarrinhoTamanho') == null)
    sessionStorage.setItem('CarrinhoTamanho', 0)

function AdicionarProdutoPagina(id, quantidade, numero)
{
    console.log("Criando a produto...")

    let conteudo = document.getElementById('Conteudo')
    let p = document.createElement("p")

    p.innerHTML = "O produto escolhido tem o id=" + String(id) + " com a quantidade=" + String(quantidade)

    conteudo.appendChild(p)
    console.log("Produto Criado")
    console.log("--------------")
}

function prepararConteudo(id, quantidade, preco, numero)
{
    let valor = parseFloat(quantidade) * parseFloat(preco)
    let nome = '404'

    if (id == 1)
        nome = "Banana nanica"

    criarAnuncio(nome, valor, numero)
}

function EnviarConteudo(numero)
{
    console.log("Enviando conteúdo...")

    let id = sessionStorage.getItem('carrinho-' + String(numero))
    let quantidade = sessionStorage.getItem('quantidade-' + String(numero))
    let preco = 1.99

    //AdicionarProdutoPagina(id, quantidade, numero)
    prepararConteudo(id, quantidade, preco, numero)
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

function criarAnuncio(nome, valor, numero)
{
    let origem = document.getElementById("Conteudo")
    let anuncio = document.createElement('div')
    let anuncioImagemBackgroud = document.createElement('div')
    let anuncioImagem = document.createElement('div')
    let anuncioImagemTamanho = document.createElement('img')
    let anuncioTitulo = document.createElement('div')
    let anuncioTituloP = document.createElement('p')
    let anuncioEmpresa = document.createElement('div')
    let anuncioEmpresaP = document.createElement('p')
    let anuncioPreco = document.createElement('div')
    let anuncioPrecoP = document.createElement('p')

    anuncio.className = 'anuncio'
    anuncio.id = 'anuncio-' + String(numero)
    anuncioImagemBackgroud.className = 'anuncio-imagem-background'
    anuncioImagem.className = 'anuncio-imagem'
    anuncioImagemTamanho.className = 'anuncio-imagem-tamanho'
    anuncioImagemTamanho.src = './public/icon/banana.png'
    anuncioTitulo.className = 'anuncio-titulo'
    anuncioTituloP.innerHTML = nome
    anuncioEmpresa.className = 'anuncio-empresa'
    anuncioEmpresaP.innerHTML = 'Almeida'
    anuncioPreco.className = 'anuncio-preco'
    anuncioPrecoP.innerHTML = 'R$: '+ String(valor.toFixed(2))

    origem.appendChild(anuncio)
    anuncio.appendChild(anuncioImagemBackgroud)
    anuncio.appendChild(anuncioImagem)
    anuncioImagem.appendChild(anuncioImagemTamanho)
    anuncio.appendChild(anuncioTitulo)
    anuncioTitulo.appendChild(anuncioTituloP)
    anuncio.appendChild(anuncioEmpresa)
    anuncioEmpresa.appendChild(anuncioEmpresaP)
    anuncio.appendChild(anuncioPreco)
    anuncioPreco.appendChild(anuncioPrecoP)
}

VerificarCarrinho()