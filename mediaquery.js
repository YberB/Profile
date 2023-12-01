let menuHamburguer = document.getElementById("menuHamburguer");
let boxHidden = document.getElementById("boxHidden");

menuHamburguer.addEventListener("click", function() {
    boxHidden.classList.toggle("box-hidden");
});