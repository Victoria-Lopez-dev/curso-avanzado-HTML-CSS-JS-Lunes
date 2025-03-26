let lista=[2000,3000,4000,5000]


//objetos -> describir una entidad . Propiedades de algo
//simbolo -> {}, 
/*
{
    key:value,
    key:value,
    key:value 
}

{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor 
}
*/
//let alumno -> nombre , correo, regular, cursos,edad
let alumno={
    nombre:"Juan Perez",
    correo:"juan@perez.com",
    regular:true,
    curso:["htmlyCss","bootstrap"],
    edad:34
};
console.log(lista)
console.log(alumno)

//accedemos a valores del objeto
//sintaxis: objeto.propiedad
console.log(alumno.edad)


//modificar el valor 
//sintaxis:  objeto.propiedad=nuevoValor

alumno.regular=false

//crear una nueva propiedad 
//sintaxis:  objeto.nuevaPropiedad=valor
alumno.turno="noche";

console.log(alumno);

//distribuidora de alimentos

let listaProd=[{
    producto:"manzanas",
    cantidad:22,
    categoria:"fruta",

},{
    producto:"choclo",
    cantidad:200,
    categoria:"enlatados",

},{
    producto:"banana",
    cantidad:100,
    categoria:"fruta",

}];

console.log(listaProd)

alumno.curso //array
console.log(alumno.curso[1])//bootstrap

console.log(listaProd[2].cantidad) //100 


console.log(Object.keys(alumno))//obtener una lista de las propiedades del objeto "alumno"


console.log(Object.values(alumno))//nos devuelve una lista de los valores del objeto "alumno"

//-----------------------------------
//length -> largo (listas -> cantidad de items de la lista)
//valor++ -> valor=valor+1

//bucles - estructuras de repeticion -ciclos
//condicion me indica si repite o no la/s accion/es
//en algun momento la condicion se tiene que cumplir,pero en algun momento esa condicion tiene que dejar de cumplirse para que corte esa repeticion 
//for - for of - while - do/while - 


let total=0;

// total=total+lista[0];
// total=total+lista[1];
// total=total+lista[2];

//for -> tanto con listas como sin listas
//                  4  < 4 false
for(let indice=0;indice<lista.length;indice++){
    total=total+lista[indice]
}
for(let contador=0;contador<4;contador++){
    console.log("HOLA")
}

//...

//for of -> solamente aplica en listas
//for of recorre la lista de manera completa 
//  for(let prod of listaProd){
//    if(prod.cantidad<120){
//     alert("OJO que queda poco de "+ prod.producto)
//    }
//  }

 //while - do/while

 /*
 while(condicion){
    accion/es a repetir
 }
 do{
    accion/es a repetir
 }while(condicion)
 
 */


//metodos: forEach - map- filter-find -> funciones nativas unicamente aplicables con listas(arrays)
//recorren lista completa 

//sintaxis : array.metodo(()=>{})

//forEach 
// listaProd.forEach((item)=>{ 
//    alert( item.producto)
// })

//map -> devuelve una nueva lista modificada

let resultado=listaProd.map((prod)=>{
    return prod.producto
});
console.log(resultado)

//filter-find -> buscar filte -> lista con todo aquel item que cumpla con lo colocado en la funcion | find -> el 1er item que cumpla con lo indicado en la funcion

let resultadoFilter=listaProd.filter((prod)=>{ return prod.cantidad>90});


let resultadoFind=listaProd.find((prod)=>{ return prod.cantidad>90});

console.log(resultadoFilter,resultadoFind)


//funciones -> receta 

//conjunto de instrucciones 

//1er crear la funcion 
//2 maneras: 
// funcion tradicional
//sintaxis:
// function name(parametros) {
//     conjunto de acciones
// }

function sumarProducto1() {
    listaProd.push('producto')
    return "resultado"
}
function sumarProducto(objetoProd) {
    listaProd.push(objetoProd)
    console.log(objetoProd)
}

//  - arrow function (funcion flexha)

/*
sintaxis:
const nombre=(parametros)=>{
    conjunto de acciones
}

*/

const sumarProducto2=() =>{
    listaProd.push('producto')
    
};

const sumarProducto3=(objetoProd)=> {
    listaProd.push(objetoProd)
    console.log(objetoProd)
}

//2 ejecutar la funcion 
//sintaxis : nomnbre() nombre(argumento)

console.log(sumarProducto1())
console.log(sumarProducto(alumno));
sumarProducto({ producto:"pera",
    cantidad:50,
    categoria:"fruta",
});
sumarProducto({ producto:"aceite",
    cantidad:400,
    categoria:"almacen",
});


console.log(listaProd)

//DOM -> Document Object Model -> interfaz entre HTML y JS -> document

//1ero acceder al elemento del HTML ( nodos-> objeto )

//querySelector()  -> selector del nodo : nombre .clase #id

let nodoH1=document.querySelector("h1");

console.dir(nodoH1)

nodoH1.textContent="otro titulo";

// - querySelectorAll()

let listaParrafos=document.querySelectorAll(".texto");
console.dir(listaParrafos)

//2do utilizar sus propiedades 
let contador=0
//Eventos -> acciones que inician y finalizan 
//tres partes:
//https://developer.mozilla.org/es/docs/Web/Events -> referencia de eventos 
//nodo (elemento en el que ocurre el evento)
//evento 
//accion como respuesta 

//metodo addEventListener()
/*
nodo.addEventListener("evento",()=>{
    })
*/
nodoH1.addEventListener("click",()=>{
    contador++
    console.log(contador)
})


//atributo + funcion a ejecutar

//en HTML agrego un atributo on+evento="funcionRespuesta"

function contadorVuelta() {
    contador++
    alert(contador)
}
