//obtener info de Web Storage para utilizarlo

//getItem

let resultado=sessionStorage.getItem("dato");
console.log(resultado)

function actualizar() {
    let tema=localStorage.getItem("tema");
    if(tema == "noche"){
        document.querySelector("body").classList.add("fondo");

    }else{
        document.querySelector("body").classList.remove("fondo")
    }
    let productos=sessionStorage.getItem("productos");//formato JSON la informacion 
    productos=JSON.parse(productos)
    let listaUl= document.querySelector("ul")

    for(let prod of productos){
        let item=document.createElement("li");
        item.textContent=` producto en carro de compra : ${prod.producto}  de $ ${prod.precio}`
        listaUl.appendChild(item)
    }


}