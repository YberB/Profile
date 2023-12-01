
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let numeroImagen = 1;

leftArrow.addEventListener("click", function(){
    if (numeroImagen===2){    
    img2.classList.add("img-2-hidden");
    img2.classList.remove("img-2-visible");
    img1.classList.add("img-1-visible");
    img1.classList.remove("img-1-hidden");
    leftArrow.classList.remove("left-arrow-visible");
    leftArrow.classList.add("left-arrow-hidden");
    numeroImagen--;
    }
    else if(numeroImagen===3){
    img3.classList.remove("img-3-visible");
    img3.classList.add("img-3-hidden");
    img2.classList.add("img-2-visible");
    img2.classList.remove("img-2-hidden-a");
    rightArrow.classList.add("right-arrow-visible");
    rightArrow.classList.remove("right-arrow-hidden");
    numeroImagen--;
    }

});

rightArrow.addEventListener("click", function(){
    if (numeroImagen===1){
    img1.classList.remove("img-1-visible");
    img1.classList.add("img-1-hidden");
    img2.classList.remove("img-2-hidden");
    img2.classList.add("img-2-visible");
    leftArrow.classList.add("left-arrow-visible");
    leftArrow.classList.remove("left-arrow-hidden");
    numeroImagen++;
    }
    else if (numeroImagen===2){
    img2.classList.remove("img-2-visible");
    img2.classList.add("img-2-hidden-a");
    img3.classList.add("img-3-visible");
    img3.classList.remove("img-3-hidden");
    rightArrow.classList.remove("right-arrow-visible");
    rightArrow.classList.add("right-arrow-hidden");
    numeroImagen++;
    }
});

