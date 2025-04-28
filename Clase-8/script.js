
let silla={
    producto:"silla",
    modelo:"bla",
    precio:2500}
    let listaCompra=[silla];
//pliegue y despliegue del navegador

function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}

//sumar producto al carrito de compra

function sumarCarrito() {
    let cantidad=document.querySelector("#cantidad");
    cantidad.textContent=parseInt(cantidad.textContent)+1;

    //almaceno dicha info
    localStorage.setItem("cantidadCarrito",cantidad.textContent)
    listaCompra.push(silla)

    //almacenar la lista de compra
    sessionStorage.setItem("productos",JSON.stringify(listaCompra))
    
}

function actualizar() {
    let cantidadActual=localStorage.getItem("cantidadCarrito");
    if(cantidadActual !== null){//le sumamos la condicion para que solo modifique el carrito si es que tiene cantidades previas cargadas
        document.querySelector("#cantidad").textContent=cantidadActual
    };

    let tema=localStorage.getItem("tema");
    if(tema == "noche"){
        document.querySelector("body").classList.add("fondo");

    }else{
        document.querySelector("body").classList.remove("fondo")
    }
}

function temaNoche() {
    document.querySelector("body").classList.add("fondo");
    localStorage.setItem("tema","noche")
}
function temaDia() {
    document.querySelector("body").classList.remove("fondo")
    localStorage.setItem("tema","dia")
}
function borrarCompra() {
    localStorage.removeItem("cantidadCarrito");
    sessionStorage.removeItem("productos");
    actualizar()
}
// -- Web Storage -> API que permite almacenar informacion en el browser

// tipo string - texto
//siempre tener cuidado de no guardar informacion sensible 

// LocalStorage -> almacena la informacion y solo se elimina cuando le indicamos por codigo

//SessionStorage -> almacena la informacion de manera temporal, cuando termina la session se elimina 


//metodos Web Storage

//setItem(clave,valor)-> almacena un dato
//getItem(clave) -> obtener informacion almacenada en Web Storage
//removeItem(clave) -> eliminar informacion almacenada 


sessionStorage.setItem("dato","Juan")

//JSON -> JS Object Notation -> formato de texto 
//envio y recepcion de informacion 

//metodos de JSON stringify() transformar a JSON - parse() transforma el JSON a array objetos- objeto de objetos
console.log(listaCompra)//array de objeto
 console.log(JSON.stringify(listaCompra))//JSON