function verFicha(){

let nombre,linea,valor,cantidad,vt,codigo,caracteristicas,marca,valorT

nombre = document.getElementById("nombre").value
console.log(nombre)

linea = document.getElementById("linea").value
console.log(linea)

codigo = document.getElementById("Código").value
console.log(cantidad)

marca = document.getElementById("Marca").value
console.log(cantidad)

caracteristicas = document.getElementById("Caracteristicas").value
console.log(cantidad)

valor = document.getElementById("valor").value
console.log(valor)

cantidad = document.getElementById("cantidad").value
console.log(cantidad)

vt = cantidad * valor
valorT = cantidad * valor

document.getElementById("prod").innerHTML = "<h1><b>Nombre de equipo: "+ nombre+"</b></h1>"
document.getElementById("line").innerHTML = "<h1><b>Línea de trabajo: "+ linea+"</b></h1>"
document.getElementById("cod").innerHTML = "<h1><b>Código o referencia: "+ codigo+"</b></h1>"
document.getElementById("marc").innerHTML = "<h1><b>Marca: "+ marca+"</b></h1>"
document.getElementById("caract").innerHTML = "<h1><b>Características adicionales: "+ caracteristicas+"</b></h1>"
document.getElementById("total").innerHTML = "<h1><b>Valor total de equipos: $ "+ vt+"</b></h1>"

}
function imprimir(){
    window.print();
}