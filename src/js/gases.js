const linkCheck = "https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png"
const linkerro = "https://image.flaticon.com/icons/png/128/458/458594.png"

function res1() {
    const respost = document.getElementById("1d")
    const resolu = document.getElementById("resolu1")
    const img = document.getElementById("img1")
    
    if (respost.checked) {
        img.src = linkCheck
        img.style.display = "inline-block"
        img.width = 45 

    }else{
        img.src = linkerro
        img.style.display = "inline-block"
        img.width = 45
    }
    resolu.setAttribute("class","resolus")
    resolu.innerHTML = "T1(K) = 273 + 15(C)<br>T1 = 300<br>T2(K) = 273 + 87(C)<br>T2 = 360<br>P1 = 700<br>V1 = 20<br>P2 = 600<br>(P1 * V1) / T1 = (P2 * V2) / T2<br>(700 * 20) / 300 = (600 * V2) / 360<br>(7ØØ * 20) / 3ØØ = (60Ø * V2) / 36Ø<br>14 / 3 = V2 / 6<br>V2 = (6 * 14) / 3<br>V2 = 84 / 3<br>V2 = 28L"
}

function res2() {
    const respost = document.getElementById("2d")
    const resolu = document.getElementById("resolu2")
    const img = document.getElementById("img2")
    
    if (respost.checked) {
        img.src = linkCheck 
        img.style.display = "inline-block"
        img.width = 45 

    }else{
        img.src = linkerro 
        img.style.display = "inline-block"
        img.width = 45
    }
    resolu.setAttribute("class","resolus")
    resolu.innerHTML = "T1(K) = 273 - 73(C)<br>T1 = 200<br>T2 = 273 + 127(C)<br>T2 = 400<br>P1 = 1<br>V1 = 10<br>P2 = 2<br>(P1 * V1) / T1 = (P2 * V2) / T2<br>(1 * 10) / 200 = (2 * V2) / 400<br>(1 * 1Ø) / 20Ø = V2 / 200<br>200 / 20 = V2<br>V2 = 20Ø / 2Ø<br>V2 = 10 / 1<br>V2 = 10L"
}

function res3() {
    const respost = document.getElementById("3d")
    const resolu = document.getElementById("resolu3")
    const img = document.getElementById("img3")
    
    if (respost.checked) {
        img.src = linkCheck 
        img.style.display = "inline-block"
        img.width = 45 

    }else{
        img.src = linkerro
        img.style.display = "inline-block"
        img.width = 45
    }
    resolu.setAttribute("class","resolus")
    resolu.innerHTML = "T1(K) = 273 + 27(C)<br>T1 = 300<br>P1 = 4<br>V1 = 20<br>P2 = 4<br>V2 = 60<br>(P1 * V1) / T1 = (P2 * V2) / T2<br>(4 * 20) / 300 = (4 * 60) / T2<br>(4 * 2Ø) / 30Ø = 240 / T2<br>T2 = (240 * 30) / 8<br>T2 = 7200 / 8<br>T2 = 900<br><br>T1 = 300<br>T2 = 900<br>T2 / T1<br>900(K) / 300(K) = 3"
}