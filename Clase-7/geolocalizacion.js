//Geolocalizacion -> API incluida desde HTML5 que nos permite saber la ubicacion del dispositivo (siempre que el usuario lo permita)

//getCurrentPosition() -> nos da la posicion actual del dispositivo
//watchPosition() -> nos da la posicion actual y nos avisa si hay un cambio en la posicion
const funcionOk = (position) => {
    console.log(position)
    //position tiene 2 propiedades:
    //coords: contiene la informacion de la ubicacion del dispositivo
    //coords es un objeto 
    //timestamp: contiene la fecha y hora en la que se obtuvo la ubicacion
    let texto =document.querySelector("#texto");

    texto.textContent=`Su ubicacion se encuentra en estas coordenadas: ${position.coords.latitude}, ${position.coords.longitude}, con un margen de error de ${position.coords.accuracy} metros.`;

};

const funcionError = (error) => {
    console.log("Error")
    console.log(error)

    if(error.code == 1){
        let texto =document.querySelector("#texto")
        texto.textContent="Querido usuario,requerimos su ubicacion por lo que pedimos refrescar la pagina y aceptar el pedido de ubicacion para continuar";

    }
    //.. if(error.code ==2)....
};
//los errores tienen de propiedad: code - message
//code : numero del 1 al 3 que indica el tipo de error

//1: PERMISSION_DENIED -> el usuario no ha permitido el acceso a la ubicacion
//2: POSITION_UNAVAILABLE -> la ubicacion no esta disponible        
//3: TIMEOUT -> el tiempo de espera para conseguir la ubicacion ha expirado

//message: mensaje de error
const objetoConfiguracion={
   // enableHighaccuracy:true, propiedad que lleva un booleano como valor que nos permite indicar si queremos una ubicacion mas precisa(true) o no (false)
    timeout:100, //tiempo limite de espera (en milisegundos)
    maximumAge:0 //tiempo maximo de espera(en milisegundos)
};

navigator.geolocation.getCurrentPosition(funcionOk, funcionError,objetoConfiguracion);//solicitar permiso al usuairo y tratar de conseguir la ubicacion del dispositivo.
//con su resultado en forma de objeto, ejecuta o funcionOk, o funcionError

