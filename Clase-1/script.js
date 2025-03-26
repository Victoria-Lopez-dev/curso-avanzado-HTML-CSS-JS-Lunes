// manejo de datos 

//tipos de datos : 
// string(caracteres ) -> " "- ' ' - ``
// booleans(verdadero - falso ) -> true -false  
// numbers( numeros) -> numeros , decimales (con .)

console.log("hola")

false
"Martin "
32423.2

//operadores

// aritmeticas/os -> calculos + - * / 
//de comparacion -> comparar (evaluar datos y devolver un booleano)
//simbolos ==,===,!=,!==,>,<,>=,<=
//logicos (devolver un booleano)-> clausulas :
//  && and -> todas sus operaciones den true para devolver true 
// || or -> con que una operacion nos de true,nos devuelve true 
// ! not  -> nos devuelve el booleanos opuesto.

44+20>50 && 33!== 20


//almacenar en espacios de memoria informacion -> variables 

//crear la varieble
//sintaxis -> var-let-const nombre= valor;

var nombre ="Ana";
let numero1=333;
const dato= true;//constante -> no se puede modificar su valor 

//utilizar
//modificarla

numero1="1";
// dato="bla"

//condicionales

//if/else - switch -  operador ternario 


//operador ternario
//sintaxis : condicion ? accion-si-se-cumple : accion-si-no-se-cumple

numero1>10? console.log("numero mayor a 10"): console.log("numero menor a 10");




//if/else

//sintaxis:

/*
    if(condicion){
        accion/es a realizar si se cumple la condicion
    }else{
        accion/es a realizar si NO se cumple la condicion
    }

    --------------------
     if(condicion){
        accion/es a realizar si se cumple la condicion
    }

    ------------------

    if(condicion){
        if(condicion){
            accion/es a realizar si se cumple la condicion
        }else{
            .....
        }
    }else{
        accion/es a realizar si NO se cumple la condicion
    }
*/
let stock=20;

if(stock == 0){
    console.log("reponer stock...")
}
let dia;

//switch
//evalua valores/expreciones y no condiciones

switch (dia) {
    case "Lunes":
        
        break;
    case "Viernes":
    
    break;
    default:
        break;
}


//Arrays - listas -arreglos

// sintaxis : [item,item,item]
//indice      0     1    2       3
const lista=[2222,stock,false,"Hoola"];

console.log(lista)

// length -> largo de la lista 

//array.length ->number
//se puede utilizar en strings -> cantidad de caracteres 

console.log(lista.length)
console.log(nombre.length,nombre)


//indice -> array[indice]

console.log(lista[2])


//modificaciones en la lista 

// metodos de array -> array.metodo()

// push() unshift() - agregar items al a lista

lista.push("item",222,444)

lista.unshift("Marta")

//pop() shift()  - sacar items de la lista
let itemEliminado=lista.pop();
console.log(itemEliminado);


lista.shift()// saco a "Marta" de la lista

//splice() - agregar, sacar, modificar items de cualquier lugar y posicion de la lista

// splice(indice,cantidad,nuevoDato)

lista.splice(3,1,"Luis")
lista.splice(2,1)

lista.splice(1,0,"libro",44)
console.log(lista)

//proxima clase objetos - bucles - DOM -funciones - video- audio 