let video= document.querySelector("#video2");
console.dir(video)


//video tiene propiedad -> duration que nos muestra en segundos la duracion final del video
// dos metodos que nos permite manipular la reproduccion del video
//currentTime -> tiempo actual en el que se encuentra reproduciendo el video
//play() - pause()
let mostrarTiempoActual;

const iniciar=()=>{
    video.play()//metodo propio de video (y de el nodo audio)par reproducir el video/audio
    console.log(video.duration);
    let seccionTiempoHTML=document.querySelector(".tiempo")
    seccionTiempoHTML.textContent=video.duration//agregue la duracion al HTML
    mostrarTiempoActual=setInterval(()=>{
        let seccionTiempoActualHTML=document.querySelector(".actual")
        seccionTiempoActualHTML.textContent=video.currentTime
    },1000)
};
const mutear=()=>{
    let botonMute=document.querySelector("#botonMute");
    botonMute.textContent="Sonido OFF"
    video.muted=true
}
const pausar=()=>{
    video.pause()//metodo propio de video (y de el nodo audio)par pausar el video/audio
    console.log(video.currentTime);
    clearInterval(mostrarTiempoActual)//corto el setInterval
    
}

//OJO -> que 1 minuto -60 seg | 1seg -> 60 ms

//JavaScript -> setInterval(()=>{},ms) ->funcion nativa|metodo de JS que nos permite indicar una funcion a ejecutar cada cierta cantidad de milisegundos
//si yo quiero cortar un intervalo -> clearInterval()



/// Proxima clase  -(Miercoles 26/3) : Git github - "vuelta de tuerca", eventos para la duracion - como transformar los segundos a minutos y segundo 

