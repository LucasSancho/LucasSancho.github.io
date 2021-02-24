function Solucao1()
{
    let pergunta = document.getElementById("Pergunta1")
    let resposta = document.getElementById("Resposta1")
    let solucao = ''
    let TPergunta = pergunta.value.length

    if(TPergunta == 0)
        solucao = 'iuqa avercsE'

    while(TPergunta > 0)
    {
        solucao += pergunta.value[TPergunta-1]
        TPergunta--
    }

    resposta.innerHTML = solucao
}

function Solucao2()
{
    let pergunta = document.getElementById("Pergunta2")
    let resposta = document.getElementById("Resposta2")
    let solucao = pergunta.value
    let recolocar = ['<b>', '</b>']

    solucao = solucao.replace(/a/g, recolocar[0]+'a'+recolocar[1])
    solucao = solucao.replace(/A/g, recolocar[0]+'A'+recolocar[1])
    solucao = solucao.replace(/e/g, recolocar[0]+'e'+recolocar[1])
    solucao = solucao.replace(/E/g, recolocar[0]+'E'+recolocar[1])
    solucao = solucao.replace(/I/g, recolocar[0]+'i'+recolocar[1])
    solucao = solucao.replace(/I/g, recolocar[0]+'I'+recolocar[1])
    solucao = solucao.replace(/o/g, recolocar[0]+'o'+recolocar[1])
    solucao = solucao.replace(/O/g, recolocar[0]+'O'+recolocar[1])
    solucao = solucao.replace(/u/g, recolocar[0]+'u'+recolocar[1])
    solucao = solucao.replace(/U/g, recolocar[0]+'u'+recolocar[1])

    resposta.innerHTML = solucao
}

function Solucao3()
{
    
}

function Solucao4()
{
    let pergunta = document.getElementById("Pergunta4")
    let resposta = document.getElementById("Resposta4")
    let axPergunta = pergunta.value
    let palavra = []
    let quantidade = []
    let posicao = []
    let solucao = []
    let Tsolucao = 0
    let y = 0
    let x = 0

    while(1)
    {
        posicao.push(FindString(axPergunta, ' '))

        if(posicao[x] == -1)
            posicao[x] = axPergunta.length

        
        palavra.push(Dividir(axPergunta, 0, posicao[x]))
        quantidade.push(ContadorOcorrenciaString(axPergunta, palavra[x]))

        if(posicao[x] == axPergunta.length)
            break

        axPergunta = Dividir(axPergunta, posicao[x]+1, axPergunta.length)

        x++
    }

    x = 0

    while(x < palavra.length)
    {
        if(y < quantidade[x])
        {
            y = quantidade[x]
            Tsolucao = 0
            solucao[Tsolucao] = x
        }

        if(y == quantidade[x])
        {
            Tsolucao++
            solucao[Tsolucao] = x
        }

        x++
    }
    x = 1

    if(Tsolucao == 1)
        resposta.innerHTML = "A palavra com mais ocorrência é '" + palavra[solucao[Tsolucao]] + "', com ocorrêndo na frase de " + quantidade[solucao[Tsolucao]] + " vez(es)"

    else
    {
        resposta.innerHTML = "As palavras com mais ocorrências são "
        while(x < Tsolucao + 1)
        {
            resposta.innerHTML += "'"
            resposta.innerHTML += palavra[solucao[x]]
            resposta.innerHTML += "', "
            x++
        }
        resposta.innerHTML += "com ocorrêndo na frase de " + quantidade[solucao[Tsolucao]] + " vez(es)"
    }
}

function Solucao5()
{
    let pergunta = document.getElementById("Pergunta5")
    let procurar = document.getElementById("Pergunta5Procurar")
    let substituir = document.getElementById("Pergunta5Substituir")

    while(FindString(pergunta.value, procurar.value) != -1)
        pergunta.value = pergunta.value.replace(procurar.value, substituir.value)
}

function Solucao9()
{
    let pergunta = document.getElementById("Pergunta9")
    let resposta = document.getElementById("Resposta9")
    let moderada = ['0','1','2','3','4','5','6','7','8','9']
    let forte = ['@', '#', '!', '$', '%', '&', '*', '(', ')', '-', '+', '.', '=']
    let situacao = 0
    let ax = 0
    let x = 0

    while(x < moderada.length)
    {
        if(ax = Find(pergunta.value, moderada[x]) > -1)
        {
            situacao = 1
            break
        }

        x++
    }

    x = 0

    if(situacao == 1)
    {
        while(x < forte.length)
        {
            if(ax = Find(pergunta.value, forte[x]) > -1)
        {
            situacao = 2
            break
        }

        x++
        }
    }
    
    if(situacao == 0)
    {
        resposta.innerHTML = "Fraca"
        resposta.style.color = "red"
    }

    if(situacao == 1)
    {
        resposta.innerHTML = "Moderada"
        resposta.style.color = "Orange"
    }

    if(situacao == 2)
    {
        resposta.innerHTML = "Forte"
        resposta.style.color = "green"
    }
    

}

function Dividir(frase, inicial, final)
{
    let x = 0
    let resposta = ''

    while(x < final)
    {
        if(x >= inicial)
            resposta += frase[x]

        x++
    }
    return resposta
}

function ContadorOcorrenciaString(original, achar)
{
    let x = 0
    let ax = 0
    let quantidade = 0

    while(x < original.length)
    {
        if(original[x] == achar[ax])
            ax++
            
        else
            ax = 0
        
            
        if(ax >= achar.length)
        {
            quantidade++
            ax = 0
        }

        x++
    }

    return quantidade
}

function FindString(original, achar)
{
    let x = 0
    let inicial = 0
    let ax = 0

    while(x < original.length)
    {
        if(original[x] == achar[ax])
            ax++
            
        else
        {
            ax = 0
            inicial = x+1
        }
            
        if(ax >= achar.length)
            return inicial

        x++
    }
    return -1
}

function Find(frase, caracter)
{
    let x = 0

    while(x < frase.length)
    {
        if(caracter == frase[x])
            return x
        x++
    }
    return -1
}