/* script.js pregunta 2.3
modificado como funcion con parámetros*/

function pintar(bk_color="green"){
    ele.style.backgroundColor = bk_color
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar("yellow"));


