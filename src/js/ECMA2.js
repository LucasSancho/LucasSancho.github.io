function Calcular()
{
    let numero1 = parseFloat(document.getElementById("Q1I1").value)
    let numero2 = parseFloat(document.getElementById("Q1I2").value)
    let operador = document.getElementById("Q1I3").value
    let resultado

    let mostrar = document.getElementById("Q1R1")

    switch(operador)
    {
        case "+": resultado = numero1 + numero2
                break
        case "-": resultado = numero1 - numero2
                break
        case "*": resultado = numero1 * numero2
                break
        case "/": resultado = numero1 / numero2
                break
    }

    mostrar.innerText = "Resultado: " + resultado
}

function Imposto()
{
    let mostrar = document.getElementById("Q2R1")
    let salario = parseFloat(document.getElementById("Q2I1").value)
    let resultado
    let porcentagem
    let reducao

    mostrar.innerText = "Imposto: "

    if(salario <= 1908.98)
    {
        mostrar.innerText += "0"
        return
    }

    else if(salario <= 2826.65)
    {
        porcentagem = 0.075
        reducao = 142.8
    }

    else if(salario <= 3751.05)
    {
        porcentagem = 0.15
        reducao = 354.80
    }
    
    else if(salario <= 4664.68)
    {
        porcentagem = 0.225
        reducao = 636.13
    }

    else if(salario > 4664.68)
    {
        porcentagem = 0.275
        reducao = 869.36
    }

    resultado = salario * porcentagem - reducao
    mostrar.innerText += resultado

}

function Triangulo()
{
    let numero1 = parseFloat(document.getElementById("Q3I1").value)
    let numero2 = parseFloat(document.getElementById("Q3I2").value)
    let numero3 = parseFloat(document.getElementById("Q3I3").value)
    let mostrar = document.getElementById("Q3R1")

    mostrar.innerText = "Triângulo: "

    if(numero1 <= 0 || numero2 <= 0 || numero3 <= 0)
    {
        mostrar.innerText += " Erro"
        return
    }
        
    if(numero1 == numero2 && numero2 == numero3)
        mostrar.innerText += " equilátero"

    else if(numero1 == numero2 || numero2 == numero3 || numero1 == numero3)
        mostrar.innerText += " isóceles"

    else
        mostrar.innerText += " escaleno"

    console.log(numero1)
    console.log(numero2)
    console.log(numero3)
}

function Cripto()
{
    let frase = document.getElementById("Q4I1").value
    let numero = parseInt(document.getElementById("Q4I2").value)
    let mostrar = document.getElementById("Q4R1")
    let x = 0
    let alterar

    mostrar.innerText = "Criptografia: " + frase + "="

    let teste = "zzzzz"
    let teste1 
    
    numero = numero % 26

    while(x < frase.length)
    {
        alterar = frase.charCodeAt(x)+numero

        console.log(alterar)

        if(alterar > 122)
            alterar = 96 + alterar - 122

        console.log(alterar)

        mostrar.innerText += String.fromCharCode(alterar)

        x++
    }
}