
function VerificarNulo(n1,n2)
{
    if (isNaN(n1) || isNaN(n2))
        return 0
    
    return 1
}

function Classificacao()
{
    let h3 = document.getElementById("Tsolucao")
    let p = document.getElementById("Psolucao")
    
    let Kio3 = document.getElementById("CKIO3")
    let agua = document.getElementById("CH2O")

    Kio3 = parseFloat(Kio3.value)
    agua = parseFloat(agua.value)

    console.log(Kio3)
    console.log(agua)

    if(!VerificarNulo(Kio3, agua))
    {
        h3.innerText = "Por favor, coloque um numero válido"
        return
    }
        
    let ax = (agua/100) * 18

    let porcentagem = (Kio3/ax) * 100

    if(porcentagem <= 50)
    {
        h3.innerText = "Diluída"
        p.innerText = "Solução insaturada cuja quantidade de soluto dissolvida não chega nem a 50% da quantidade especificada no coeficiente de solubilidade."
    }

    else if(porcentagem < 100)
    {
        h3.innerText = "Concentrada"
        p.innerText = "Solução insaturada cuja quantidade de soluto dissolvida é maior ou igual a 50% da quantidade especificada no coeficiente de solubilidade."
        console.log("concentrado")
    }

    else if(porcentagem == 100)
    {
        h3.innerText = "Saturada"
        p.innerText = "Solução saturada é aquela que apresenta uma quantidade de soluto dissolvida exatamente igual à especificada no coeficiente de solubilidade, ou seja, se adicionarmos ao solvente qualquer outra quantidade extra de soluto, ela não será dissolvida."
        console.log("saturado")
    }
    
    else
    {
        h3.innerText = "Supersaturada(com corpo de fundo)"
        p.innerText = "Solução supersaturada é aquela que apresenta uma quantidade de soluto dissolvida superior à especificada no coeficiente de solubilidade, fazendo com que haja uma quantidade não diluida no fundo."
        console.log("supersaturado")
    }

    p.innerText += " Neste caso a porcentagem foi de aproximadamente:" + parseInt(porcentagem) + "%."
}

function Molaridade()
{
    let MassaMolar = 213

    let Kio3 = parseFloat(document.getElementById("MKIO3").value)
    let agua = parseFloat(document.getElementById("MH2O").value)

    let p = document.getElementById("PMol")
    let h3 = document.getElementById("TMol")

    if(!VerificarNulo(Kio3, agua))
    {
        h3.innerText = "Por favor, coloque um numero válido"
        return
    }
    
    let calculo = Kio3 / (agua * MassaMolar)

    h3.innerText = "Resultado:"
    p.innerText = "A quantidade de molaridade deste cálculo é de " + calculo + " mol/L."
}