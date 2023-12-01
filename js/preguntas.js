
let pre1=document.getElementsByName('php')
let pre2=document.getElementsByName('xamp')
let pre3=document.getElementsByName('pregunta')

function Enviar(){

    for (let i = 0; i < pre1.length; i++) {
        if(pre1[i].checked && pre1[i].value=="phpC") {
        document.getElementById("res1").innerHTML = "<h3><b>Respuesta 1: Correcta</b></h3>"
        break
        }
        else{
            document.getElementById("res1").innerHTML = "<h4><b>Respuesta 1: Incorrecta</b></h4>"
        }    
    }

    for (let i = 0; i < pre2.length; i++) {
        if(pre2[i].checked && pre2[i].value=="xampB") {
        document.getElementById("res2").innerHTML = "<h3><b>Respuesta 2: Correcta</b></h3>"
        break
        }
        else{
            document.getElementById("res2").innerHTML = "<h4><b>Respuesta 2: Incorrecta</b></h4>"
        }    
    }

    for (let i = 0; i < pre3.length; i++) {
        if(pre3[i].checked && pre3[i].value=="a") {
        document.getElementById("res3").innerHTML = "<h3><b>Respuesta 3: Correcta</b></h3>"
        break
        }
        else{
            document.getElementById("res3").innerHTML = "<h4><b>Respuesta 3: Incorrecta</b></h4>"
        }    
    }
}
