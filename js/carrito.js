let res = document.getElementById("res");
let sum = document.getElementById("sum");
let view = document.getElementById("view");
let subt = document.getElementById("subt");
let precio =document.getElementById("precio");
let btndel = document.getElementById("btndel");
let faSolid = document.querySelector(".fa-solid");
let cantprod = document.getElementById("cantprod");

btndel.addEventListener("click", function(){
    let aux =view.innerHTML.toString();
    let auxInt=parseInt(aux);
    if(auxInt>0){
        document.getElementById("view").innerText = 0;
        document.getElementById("subt").innerText = 0;
        document.getElementById("cantprod").innerText = 0 + " Productos";
    }
})

res.addEventListener("click", function(){
    let aux =view.innerHTML.toString();
    let auxInt=parseInt(aux);
    if(auxInt>0){
        auxInt--;
        document.getElementById("view").innerText = auxInt.toString();
        mostrarPrecio();
    }
})

sum.addEventListener("click", function(){
    let aux =view.innerHTML.toString();
    let auxInt=parseInt(aux);
    if(auxInt<10){
        auxInt++;
        document.getElementById("view").innerText = auxInt.toString();
        mostrarPrecio();
    }
})

function mostrarPrecio() {
    let cantidad = parseInt(view.textContent);
    let precioUnitario = parseFloat(precio.textContent);
    let precioTotal = cantidad * precioUnitario;
    subt.textContent =  precioTotal;
    cantprod.textContent = cantidad + (cantidad === 1 ? " Producto " : " Productos");
}

view.addEventListener("DOMSubtreeModified", function () {
    let aux = view.innerHTML.toString();
    let auxInt = parseInt(aux);
    
    if (auxInt > 0) {
        faSolid.classList.add("expand");
        faSolid.style.color = "red";
    } else {
        faSolid.classList.remove("expand");
        faSolid.style.color = "blue"; 
    }
});