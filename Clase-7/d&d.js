//Drag & Drop ->API includida en HTML5 , nos permite arrastrar y soltar elementos del HTML.

//draggable -> atributo de los elementos que indica si un elemento es "arrastrable" o no
//utiliza valores booleanos 

//por defecto las <a> y las <img/> son arrastrables

//draggable="true" -> indica que el elemento es arrastrable
//esta API nos brinda 7 eventos que nos permite manipular el elemento arrastrado y la zona en la que se va a soltar dicho elemento 
//esta APi tambien nos trae un objeto que vive dentro del evento llamado dataTransfer
//nos va a permitir almacenar un dato y poder obtenerlo desde otro de los evento de drag&drop 

//metodos de dataTransfer:
//setData(tipo, dato) -> almacena un dato en el objeto dataTransfer
//getData(tipo) -> obtiene el dato almacenado en el objeto dataTransfer
//clearData(tipo) -> elimina el dato almacenado en el objeto dataTransfer

//tipo -> "Text","URL","text/HTML","text/plain" ,"text/uri-list"
//dato -> string con el dato que queremos almacenar 
// event es un objeto que viene como respuesta de un evento que contiene la informacion y metodos del evento

//al hablar de eventos tenemos que utilizar alguna de las opciones para crear eventos: addEventLister() - por medio del atributo on+evento="function()"

let h1=document.querySelector("h1");
let destino=document.querySelector("#zona1");

// h1.addEventListener("click",(e)=>{
//     alert("evento click!");
// })
//2 grupos :
//1- eventos que ocurren en el elemento arrastrable- a arrastrar
//dragstart- drag - dragend

h1.addEventListener("dragstart",(event)=>{ 
    //utilizar este evento para almacenar la info que necesito utilizar cuando se termine el arrastre 

    console.log(event.dataTransfer)
    // event.dataTransfer.setData("Text",h1.id);//almacenando como tipo de dato "Text" el valor del id del h1
    event.dataTransfer.setData("Text",h1.textContent)
    console.log("inica el arrastre del titulo ") 
});

h1.addEventListener("drag",(e)=>{ 
    console.log("el titulo esta siendo arrastrado ") 
});
h1.addEventListener("dragend",(event)=>{ 
    console.log("se solto el titulo ") ;
});

//2 - eventos que ocurren en el elemento destino (en donde se suelta el elemento arrastrado)
//dragenter ->evento que detecta  cuando el elemento mientras esta siendo arrastrado entra en la zona de destino

//dragleave -> evento que se ejecuta cuando un elemento arrastrado sale de la zona de destino (siendo arrastrado)
// -dragover -> evento que se ejectua siempre que estemos con el elemento arrastrado dentro de la zona destino 
//por defecto no te toma el drop por el dragover
//  - drop -> evento que se ejectua cuando se suelta un elemento arrastrado dentro de ese elemento destino
// destino.addEventListener("dragenter",(event)=>{
//     console.log("se ingreso a la zona destino con un elemento arrastrado ")
// })

// destino.addEventListener("dragleave",(event)=>{
//         console.log("se salio del destino con un elemento siendo arrastrado ")
//     })

destino.addEventListener("dragover",(event)=>{
    event.preventDefault(); //evita que el navegador ejecute la accion por defecto de no permitir el drop
    //para que podamos ejecutar el drop sin problema
})
//  destino.addEventListener("drop",(event)=>{
//     let resultado=event.dataTransfer.getData("Text");
//     console.log(resultado);

//     //ocultar el titulo
//     h1.style.display="none";

//     let recuadroDestino=document.querySelector("#zona1");
//     recuadroDestino.innerHTML=`<h1>${resultado}</h1>`;
//  })

    //preventDefault() -> metodo que vive en todos los eventos (incluido los que no pertenecen a drag&drop) que nos permite cancelar la accion por defecto de un elemento
    //ejemplo : en un ancla que no redirija a donde le indicamos,
    //que un boton no accione
    //ejemplo: en un formulario que no se envie


    const almacenarInfo=(event)=>{
        let imagen =event.target;

        console.log(imagen)
        event.dataTransfer.setData("text/plain",target.src);

    }
const dropEvent=(event)=>{
    let resultado=event.dataTransfer.getData("text/plain");
    console.log(resultado);

 console.log(event.dataTransfer.files)//nos muestra informacion de archivos que esten siendo arrastrados 

    let recuadroDestino=document.querySelector("#zona1");
    recuadroDestino.innerHTML=`<<img src=${resultado} />`;
}


//para hacer un arrastre dentro de la pagina con elementos internos,solo necesitariamos :
//dragstart - dragover - drop