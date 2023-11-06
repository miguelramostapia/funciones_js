


/* script.js pregunta 3a
*/

function pintar1(bk_color){
    caja_1.style.backgroundColor = bk_color
//    caja_2.style.backgroundColor = 'red'
//    caja_3.style.backgroundColor = 'green'
//    caja_4.style.backgroundColor = 'yellow'
}
function pintar2(bk_color){
    caja_2.style.backgroundColor = bk_color
//    caja_2.style.backgroundColor = 'red'
//    caja_3.style.backgroundColor = 'green'
//    caja_4.style.backgroundColor = 'yellow'
}
function pintar3(bk_color){
    caja_3.style.backgroundColor = bk_color
//    caja_2.style.backgroundColor = 'red'
//    caja_3.style.backgroundColor = 'green'
//    caja_4.style.backgroundColor = 'yellow'
}
function pintar4(bk_color){
    caja_4.style.backgroundColor = bk_color
//    caja_2.style.backgroundColor = 'red'
//    caja_3.style.backgroundColor = 'green'
//    caja_4.style.backgroundColor = 'yellow'
}


const caja_1= document.getElementById("caja1")
caja_1.addEventListener("click", pintar1("black"));

const caja_2= document.getElementById("caja2")
caja_2.addEventListener("click", pintar2("black"));

const caja_3= document.getElementById("caja3")
caja_3.addEventListener("click", pintar3("black"));

const caja_4= document.getElementById("caja4")
caja_4.addEventListener("click", pintar4("black"));




