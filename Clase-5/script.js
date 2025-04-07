const mover=()=>{
    document.querySelector("#ellipse").classList.add("rotar")
}

const mostrar=()=>{
   // document document HTML
   // window pantalla 
   //window.scrollY -> la distancia que se va recorriendo cuando se hace scroll en la pantalla
   //window.innerHeight -> alto de pantalla 
   console.log(window.scrollY)
   console.log(window.innerHeight)
   if(window.scrollY> window.innerHeight*0.5){
    document.querySelector("nav").style.backgroundColor="violet";
   }else{
    document.querySelector("nav").style.backgroundColor="green";
   }
}