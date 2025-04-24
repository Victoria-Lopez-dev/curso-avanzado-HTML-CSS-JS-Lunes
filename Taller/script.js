// DOM - Document Object Model 
//1- llamar a los nodos ( elemento del html)
//2 - utilizar sus propiedades segun se necesiten

//nodos -> forma de objetos . Para poder acceder a su infrmacion o modificarlos tengo que utilizar lo que sabemos de objetos
//objeto.propiedad | objeto.propiedad=nuevoValor


//ubicar el titulo para realizar cambios/ obtener informacion
//llamar al nodo ,utilizamos los metodos : querySelector("selector") - querySelectorAll ("selector").
//querySelector("selector") -> selecciona el primer nodo que coincide con el selector CSS especificado.
//querySelectorAll("selector") -> selecciona todos los nodos que coinciden con el selector CSS especificado.
//viven dentro de un objeto que nos provee el DOM : document
//en vez de utilizar el console.log - podemos utilizar console.dir() 

let h1= document.querySelector("h1")//objeto
let textos= document.querySelectorAll(".textos")//array de objetos
console.dir(h1.innerHTML)
h1.textContent="otro titulo" // porque la variable h1 es un objeto

//metodos de utilizo en listas 
//bucle para poder iterar en cada item de la lista para cambiar su contenido : for tradicional - for of- forEach -map-....

textos.forEach((texto)=>{ 
    console.log(texto.textContent)
    texto.textContent="nuevo texto"
})

document.querySelector("section").innerHTML="<h2>Hola</h2>" //modifico el contenido de la seccion

let seccion=document.querySelector("section")

seccion.classList.add("estilo1") //agrego una clase al elemento

seccion.style.fontSize="40px" //modifico el tamaño de la fuente

//propiedades del DOM
//textContent -> obtiene el contenido de texto de un nodo.
//innerHTML -> obtiene el contenido HTML de un nodo.(string)
//modificar CSS -> propiedades style (objeto) - classList (add -remove-toggle) 



//Eventos -> acciones principio y fin que el usuario ejecuta y que como respuesta realizamos ciertas acciones 
//escucha en un elemnto del HTML 
//accion tiene que escuchar en el elemento : click - mouseover - submit - change - input - focus - blur -load ..:https://developer.mozilla.org/es/docs/Web/Events
//funcion como respuesta 
//2 maneras : metodo addEventListener() - agregar un atributo al HTML+ funcion en JS

//addEventListener(evento,accionRespuesta) -> permite agregar un evento a un elemento del DOM.

let boton1=document.querySelector("#boton1");

boton1.addEventListener("click",()=>{
    h1.style.color="#f90" //modifico el color del h1
});

// agregar en el nodo un atributo al HTML : on+evento y como valor  funcion creada en JS de la respuesta
let contador=0;
function tirarAlarma(dato){
    console.log(dato)
}
const sumarDatos=(dato1,dato2,funcionCallback)=>{
    let suma=dato1+dato2//let suma= 10+30 -> 40
    funcionCallback(suma)//tirarAlarma(40)
}
//sumarDatos(10,30,tirarAlarma)
const sumarEnUno=()=>{
    contador++ // contador=contador+1
    console.log(contador)
    
};

//Asincronia : 3 tipos callback - promesas - async/await
//llamar APIs externar - generamos eventos 
//- callback -> funcion que se pasa como argumento a otra funcion y que se ejecuta en un momento determinado
//fetch() -> metodo de JS que me permite ejecutar una peticion a una API externa y obtener la respuesta.(es un tipo de promesa )

// - promesas -> accion programada para finalizar en un futuro cercano y defino tanto que realizar si se logra cumplir la promesa como si no se logro.
//dos metodos en promesas : then(la funcion a realizar en caso que se logre cumplir) catch(si no se logra ) 
//async/await -> forma de escribir el codigo asincrono de una manera mas sencilla y entendible.

let promesa= new Promise((resolve,reject)=>{
    let numero= Math.random()//numero aleatorio entre 0 y 1
    console.log("el numero que salio es: "+numero) 
    if(numero>0.5){
        resolve("todo ok")
    }else{
        reject("error")
    }
}
);

//ejecucion de la promesa
promesa
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.log(error)})

//peticiones -> metodos (verbos HTTP:  GET - POST - PUT - PATCH- DELETE)
//get -> verbo HTTP que le indicamos al receptor que pedimos informacion (es de lectura)
//post -> verbo HTTP que le indicamos al receptor crear informacion 
//http://direccion-API/info - https://direccion-API/info 

//fetch -> promesa que nos permite hacer peticiones a una API externa
let resultado;

fetch("https://rickandmortyapi.com/api/episode")
.then((respuesta)=>{return respuesta.json()})//convertimos la respuesta a JSON
.then((data)=>{resultado=data; console.log(data)})
.catch((error)=>{console.log(error)})

//fetch("url", {metodo: "GET/POST/PUT/DELETE"})

sumarDatos(10,30,tirarAlarma)
//JSON -> JS Object Notation -> formato de intercambio de datos entre el cliente y el servidor.
//formato de tipo texto 


// async function name(params) {
//     await //lo que queremos que aguarde a finalizar 
// }

// const functionName = async(params) => {
//     await //lo que queremos que aguarde a finalizar 
// }
const guardarYMostrar=async()=>{
    let resultado=await fetch("https://rickandmortyapi.com/api/episode")
    .then((respuesta)=>{return respuesta.json()})
    .catch((error)=>{console.log(error)})
    
    console.log(resultado)
    // le colocamos el await para que espere a que termine el fetch ,para continuar con el console log de la linea 131
}

guardarYMostrar()