Anuncio = []

let PrecoProduto = 1.99
let IdBanana = 1

if (sessionStorage.getItem('CarrinhoTamanho') == null)
    sessionStorage.setItem('CarrinhoTamanho', 0)

function SvgConfirmar(confirmar)
{
    let Svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    Svg.setAttribute("width", "32")
    Svg.setAttribute("heigth", "32")
    Svg.setAttribute("viewBox", "0 0 32 32")
    Svg.setAttribute("fill", "none")

    path.setAttribute("d", "M10.6667 16.6667L14.6667 20.6667L21.3333 12.6667")    
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")
    path.setAttribute("stroke-linecap", "round")
    path.setAttribute("stroke-linejoin", "round")

    Svg.appendChild(path)

    path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    
    path.setAttribute("d", "M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.63619 2.66667 2.66666 8.6362 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z")
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")

    Svg.appendChild(path)

    confirmar.appendChild(Svg)
}

function SvgMais(mais)
{
    let Svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    Svg.setAttribute("width", "32")
    Svg.setAttribute("heigth", "32")
    Svg.setAttribute("viewBox", "0 0 32 32")
    Svg.setAttribute("fill", "none")
    
    path.setAttribute("d", "M16 10.6667V16M16 16V21.3333M16 16H21.3333M16 16H10.6667")
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")
    path.setAttribute("stroke-linecap", "round")

    Svg.appendChild(path)

    path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute("d", "M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.63619 2.66667 2.66666 8.6362 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z")
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")

    Svg.appendChild(path)

    mais.appendChild(Svg)
}

function SvgMenos(menos)
{
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    iconSvg.setAttribute("width", "32")
    iconSvg.setAttribute("heigth", "32")
    iconSvg.setAttribute("viewBox", "0 0 32 32")
    iconSvg.setAttribute("fill", "none")

    path.setAttribute("d", "M21.3334 16H10.6667")
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")
    path.setAttribute("stroke-linecap", "round")

    iconSvg.appendChild(path)

    path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute("d", "M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.6362 23.3638 2.66667 16 2.66667C8.63622 2.66667 2.66669 8.6362 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z")
    path.setAttribute("stroke", "#F5F5F5")
    path.setAttribute("stroke-width", "2")

    iconSvg.appendChild(path)

    menos.appendChild(iconSvg)
}

function Fechar(numero)
{
    let popup = document.getElementById("popup-" + String(numero))
    popup.remove()
    
    Anuncio[numero] = "fechado"
}

function Verificar(numero)
{
    if(Anuncio[numero] == "aberto")
        Fechar(numero)

    else PopUp(numero)
}

function ConfirmarCarrinho()
{
    let numero = this.id.slice(2)
    let quantidade = document.getElementById("input-" + String(numero)) 
    let CarrinhoNumero = sessionStorage.getItem('CarrinhoTamanho')

    sessionStorage.setItem('carrinho-' + String(CarrinhoNumero), IdBanana)
    sessionStorage.setItem('quantidade-' + String(CarrinhoNumero), quantidade.value)

    sessionStorage.setItem('CarrinhoTamanho', parseInt(CarrinhoNumero) + 1)

    console.log("Criando um conteúdo novo no carrinho com o número=" + String(CarrinhoNumero))

    Verificar(numero)
}

function Teste(palavra)
{
    console.log(palavra)
}

function AlterarInput()
{
    let tipo = this.id[0]

    let NumeroInput = this.id.slice(2)
    let input1 = document.getElementById("input-" + String(NumeroInput))

    let quantidade = parseFloat(input1.value)
    if(tipo == "+")
        quantidade += 0.1

    if(tipo == "-")
        quantidade -= 0.1

    if(quantidade < 0)
        quantidade = 0

    input1.value = String(quantidade.toFixed(1))
    
    AtualizarValorTotal(NumeroInput)
}

function AtualizarValorTotal(numero)
{
    let ValorTotal = document.getElementById("ValorTotal-" + String(numero))
    let input = document.getElementById("input-" + String(numero))

    ValorTotal.innerHTML = "R$:" + String((input.value * PrecoProduto).toFixed(2))
}

function PopUp(numero)
{
    let origem = document.getElementById("anuncio/popup-" + String(numero))
    let popup = document.createElement("div")
    let fundo = document.createElement("div") 
    let quantidade = document.createElement("div")
    let quantidadeMensagem = document.createElement("p")
    let total = document.createElement("div")
    let menos = document.createElement("div")
    let MenosA = document.createElement("a")
    let totalMensagem = document.createElement("p")
    let input = document.createElement("input")
    let valor = document.createElement("div")
    let valorMensagem = document.createElement("p")
    let mais = document.createElement("div")
    let MaisA = document.createElement("a")
    let confirmar = document.createElement("div")
    let ConfirmarA = document.createElement("a")

    popup.className = "popup"
    popup.id = "popup-" + String(numero)
    fundo.className = "popup-fundo"
    quantidade.className = "popup-quantidade"
    quantidadeMensagem.innerHTML = "Quantidade"
    total.className = "popup-total"
    totalMensagem.innerHTML = "Total"
    menos.className = "popup-menos"
    MenosA.id = "--" + String(numero)
    MenosA.onclick = AlterarInput
    input.className = "popup-input"
    input.type = "number"
    input.value = "1.5"
    input.id = "input-" + String(numero)
    input.onchange = () => {AtualizarValorTotal(this.id.slice(2))}
    valor.className = "popup-valor"
    valorMensagem.innerHTML = "R$: 2,98"
    valorMensagem.id = "ValorTotal-" + String(numero)
    mais.className = "popup-mais"
    MaisA.id = "+-" + String(numero)
    MaisA.onclick = AlterarInput
    confirmar.className = "popup-confirmar"
    ConfirmarA.id = "C-" + String(numero)
    ConfirmarA.onclick = ConfirmarCarrinho

    origem.appendChild(popup)
    popup.appendChild(fundo)
    popup.appendChild(quantidade)
    quantidade.appendChild(quantidadeMensagem)
    popup.appendChild(total)
    total.appendChild(totalMensagem)
    popup.appendChild(input)
    popup.appendChild(valor)
    valor.appendChild(valorMensagem)
    popup.appendChild(menos)    
    menos.appendChild(MenosA)
    popup.appendChild(mais)
    mais.appendChild(MaisA)
    popup.appendChild(confirmar)
    confirmar.appendChild(ConfirmarA)

    SvgMenos(MenosA)
    SvgMais(MaisA)
    SvgConfirmar(ConfirmarA)

    Anuncio[numero] = "aberto"
}