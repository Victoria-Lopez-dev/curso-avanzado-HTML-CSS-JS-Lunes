function mover() {
    let parrafo1=document.querySelector(".translate")
    parrafo1.style.transform="translate(100px,100px)"
}
function aplicarAnimacion() {
    let cubo=document.querySelector("h1");
    cubo.classList.add("animacionColor")
}
const pausar=()=>{
    let padre=document.querySelector(".padre");
    padre.style.animation="none"
}

console.log("un cambio nuevo...")