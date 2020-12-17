var nomes = ["Diego", "Gabriel", "Lucas"];
let Qp = 0;
let Lista = 0;

function getRandomColor() 
{  
    var letters = "0123456789ABCDEF";  
    var color = "#";  
    for (var i = 0; i < 6; i++) 
    {    
        color += letters[Math.floor(Math.random() * 16)]; 
    }

    return color;
}

function TROCARCOR(event)
{
    let quadrado = document.getElementById(event.target.id);

    quadrado.style.backgroundColor = getRandomColor();
}

function BUTTON()
{
    let local = document.getElementById("botao");
    let quadrado = document.createElement("p");
    quadrado.className = "quadrado";
    quadrado.id = Qp;
    Qp++;

    quadrado.onmouseenter = TROCARCOR;

    local.appendChild(quadrado);
}

function LISTA()
{
    let UL = document.getElementById("lista");
    let LI = document.createElement("li");

    for(nome in nomes)
    {
        console.log(nomes[nome]);
        LI.innerHTML = nomes[nome];
        UL.appendChild(LI);
        LI = document.createElement("li");
    }

    Lista = 1;

}

function adicionar()
{
    let nome = document.getElementById("nome");
    nomes.push(nome.value);
    if (Lista == 0)
        LISTA();
    
    else
    {
        let UL = document.getElementById("lista");
        let LI = document.createElement("li");
        LI.innerHTML = nome.value;
        UL.appendChild(LI);
    }

    nome.value = null;
}

