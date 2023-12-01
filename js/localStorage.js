function guardar(){
    
    let valorp1
    valorp1 = document.getElementById("p1").value
    //guardar localmente
    localStorage.setItem("p1",valorp1)

    let valorp2
    valorp2 = document.getElementById("p2").value
    //guardar localmente
    localStorage.setItem("p2",valorp2)

    let valorp3
    valorp3 = document.getElementById("p3").value
    //guardar localmente
    localStorage.setItem("p3",valorp3)

    //enviar al archivo respuesta.html   
    window.location="respLocalS.html"
}



