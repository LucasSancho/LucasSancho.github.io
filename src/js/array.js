let UsuarioArray = new Array
let array3 = [1,2,3,4,5,6]
let array4 = [1,2,3,4,5,6]

function AtualizarDisplayArray()
{
    let DisplayArray = document.getElementById("PArray")
    let x = 0

    DisplayArray.innerText = ''


    while(x < UsuarioArray.length)
    {
        if(x != 0)
            DisplayArray.innerHTML += ','

        DisplayArray.innerText += UsuarioArray[x]

        x++
    }
}

function Fibona()
{
    let fibo = [0,1]
    let Qfibo = document.getElementById("Qfibo")
    let Rfibo = document.getElementById("Rfibo")
    let x = 2
    Qfibo = parseInt(Qfibo.value,10)

    if(Qfibo <= 0)
        fibo = "Coloque um numero maior ou igual a 1"

    if(Qfibo == 1)
    {
        fibo = 0
    }

    while(x < Qfibo)
    {
        fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2])


        x++
    }

    Rfibo.innerText = fibo.toString()

}

function Minimu()
{
    let Min = document.getElementById("Min")
    let Max = document.getElementById("Max")
    let Uniq = document.getElementById("Uniq")
    let SortNum = document.getElementById("SortNum")
    let menor = UsuarioArray[0]
    let maior = UsuarioArray[0]
    let ordenado = new Array
    let x = 0
    let y


    UsuarioArray.forEach(numero => 
    {
        if( menor > numero)
            menor = numero

        if( maior < numero)
            maior = numero

        ordenado.push(numero)

        x = 0
        y = ordenado.length-1

        while(x < ordenado.length)
        {
            if(numero < ordenado[x])
            {
                while(y > x)
                {
                    ordenado[y] = ordenado[y-1]

                    y--
                }
                ordenado[x] = numero
                break
            }

            x++
        }
    });



    x = 0
    let unico = ordenado

    SortNum.innerText =  ordenado.toString()

    while(x < unico.length)
    {
        if( unico[x] == unico[x+1])
            unico.splice(x,1)

        else
            x++
    }



    Min.innerText = menor
    Max.innerText = maior
    Uniq.innerText = unico.toString()
}

function Operacoes()
{
    let Min = document.getElementById("Min")
    let Max = document.getElementById("Max")
    let Uniq = document.getElementById("Uniq")
    let SortNum = document.getElementById("SortNum")

    Min.innerText = Math.min(UsuarioArray)
    Max.innerText = Math.max(UsuarioArray)
    Uniq.innerText = UsuarioArray.uniq()
    SortNum.innerText = UsuarioArray.sortNum()
}

function Limpar()
{
    UsuarioArray = []

    AtualizarDisplayArray()
}


function Adicionar()
{
    let numeroAdicionar = document.getElementById("InArray")


    UsuarioArray.push(parseInt(numeroAdicionar.value,10))

    AtualizarDisplayArray()

    //console.log(numeroAdicionar.value)
}

function Atualizar()
{
    let Array = document.getElementById("3array")

    Array.innerText = array4.toString()
}

function Dobrar() { return array4.map((numero) => {return numero * 2}) }

function Duplicar() { return array4.map((numero) => {return [numero,numero]}) }

function Par() { return array4.filter((numero) => {return numero % 2 == 0 }) }

function Soma() { return array4.reduce((numero, depois) => {return numero + depois}) }

function Funcoes(funcao)
{
    switch(funcao)
    {
        case 1: array4 = Dobrar()
                break

        case 2: array4 = Duplicar().flat(Infinity)
                break

        case 3: array4 = Par()
                break

        case 4: array4 = [Soma()]
                break
        
        case 5: array4 = array3
    }

    Atualizar()
}