//Canvas -> API grafica

//API (Aplication Programing Interface)-> Interfaz de Programacion de Aplicaciones
//conjunto de subrutinas /funciones 
//nos hace funciones complejas de una manera simple
//conector entre navegacion y el servidor

//externas - se comunica utilziando asincronia 
//giphy - formspree - swipper - mercado pago API - spotify API

//incluidas dentro HTML5-  Canvas - Geolocalizacion - Drag&Drop- Web Storage

//canvas - formas primitivas: rectangulos - trazos

let canvas=document.querySelector("canvas");

let lienzo=canvas.getContext("2d");//acceder a las propoiedades de canvas - metodos que nos provee canvas para crear los graficos
console.log(lienzo)


//----rectangulos 

//fillRect(x,y,width,height)
// strokeRect(x,y,width,height)
//clearRect(x,y,width,height) -> tapar lo que tiene debajo.
lienzo.fillStyle="rgb(100,2,33)";

lienzo.fillRect(20,10,50,100);

lienzo.strokeStyle="blue";
lienzo.lineWidth=3
lienzo.strokeRect(70,10,77,40);

lienzo.clearRect(22,20,40,40)




//----trazos
//beginPath() - closePath()
//moveTo(x,y) - lineTo(x,y)lineas rectas 
//fill() -> rellendo de la figura
//stroke() -> contorno
//arc(x,y,r,angulo inicial,angulo final,direccion) 
// - quadraticCurveTo(pcx,pcy,x,y) 1 punto de control
//  bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y) 2 puntos de control 

//para los angulos utilizamos Math.PI/180 * grados
let grados45=Math.PI/ 180 *(- 45);
let grados360=Math.PI/ 180 *360;
// 180 grados -> Math.PI;
lienzo.strokeStyle="green";
lienzo.lineWidth=1


lienzo.beginPath();
lienzo.moveTo(300,50);
lienzo.lineTo(200,10);
lienzo.lineTo(200,100);
lienzo.lineTo(250,10);
lienzo.stroke();
lienzo.closePath();

lienzo.fillStyle="blueviolet";

lienzo.beginPath();
lienzo.moveTo(100,100);
lienzo.arc(200,100,30,grados360,0,false)
lienzo.fill();


lienzo.beginPath();
lienzo.moveTo(100,90);
lienzo.quadraticCurveTo(80,100,100,130);
lienzo.quadraticCurveTo(120,100,100,90);
lienzo.lineTo(100,130)
lienzo.stroke();

lienzo.strokeStyle="black"
lienzo.beginPath();
lienzo.moveTo(140,70);
lienzo.bezierCurveTo(177,10,180,150,200,70)
lienzo.stroke();

//escribir con canvas
//fillText(texto,x,y)
//strokeText(texto,x,y)

lienzo.font="20px Arial";
lienzo.fillText("hola",130,120);

lienzo.font="30px Cambria";
lienzo.strokeText("HOLA",130,100);

lienzo.font="20px Arial";

// lienzo.fillText("hola",250,30);
// lienzo.clearRect(240,10,100,200);
// lienzo.fillText("hola",250,40);
// lienzo.clearRect(240,10,100,200);
// lienzo.fillText("hola",250,50);
// lienzo.clearRect(240,10,100,200);
// lienzo.fillText("hola",250,60);
// lienzo.clearRect(240,10,100,200);

function correrPalabra(valorY) {
    valorY=valorY+10
    lienzo.clearRect(240,10,100,200);
    lienzo.fillText("hola",250,valorY);
}
let valorInicial=20;
let intervalo;

// setInterval(()=>{
//     correrPalabra(valorInicial);
//     valorInicial=valorInicial+1
// },100)//funcion- metodo de JS que nos permite ejecutar una funcion cada una cierta cantidad de milisegundos

function pausar(){
 clearInterval(intervalo)
};
function iniciar(){
    intervalo=setInterval(()=>{
        correrPalabra(valorInicial);
        valorInicial=valorInicial+1
    },100)
}