const img = document.getElementById("img")
const tiro = document.getElementById("tiro")
const alvo = document.getElementById("alvo")
const alvo2 = document.getElementById("alvo2")
let fim = false



let cima = 0
let tirocaminho = 0
let destruirpredio = 0



window.addEventListener("keypress", function (evt) {
   
    if (evt.key == 'w') {
       moverCima()
    } else if (evt.key == 's') {
       moverBaixo()
    } else if (evt.key == 'f') {
        bala()
    }
    
   
})


function moverCima(){
    cima -= 20
    img.style.top = cima + 'px'
}

function moverBaixo(){
    cima += 20
    img.style.top = cima + 'px'
}





function bala() {
    tiro.style.display = 'block'
    let tamanhoTela = window.innerWidth
    let jogadorPosicao = img.getBoundingClientRect();
    tiro.style.top = jogadorPosicao.top  + 90 + 'px'


    const id = setInterval(() => {
        tirocaminho += 35
        tiro.style.left = tirocaminho + 'px'

      

        if (tirocaminho > tamanhoTela) {

            clearInterval(id)
            tirocaminho = 0
        }

       
        const elemento1 = tiro.getBoundingClientRect();
        const elemento2 = alvo.getBoundingClientRect();
      



        if (
            elemento1.right >= elemento2.left &&
            elemento1.left <= elemento2.right &&
            elemento1.bottom >= elemento2.top &&
            elemento1.top <= elemento2.bottom ) {

            clearInterval(id)
            tirocaminho = 0
            destruir(destruirpredio +=1)

        }

       
      
        
    }, 1);
}



function destruir(rty){
   

    if(rty >= 5 ) {
        alvo.src = 'assets/quebrado.png';
        setTimeout(() => {
            alert('FIM')
            location.reload()
        }, 500);
       
    }

}








