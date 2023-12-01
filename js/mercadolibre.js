let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo, precio, imagen, fecha, kilometraje, ubicacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.fecha = fecha;
        this.kilometraje = kilometraje;
        this.ubicacion = ubicacion;
        this.favorito = false; // Inicialmente, el automóvil no es un favorito
    }
}

let autos = [
    new Automovil("Audi", "Fox", 115000000, "img/car4.jpg", "2023", "10.000 km", "Bogotá - Colombia"),
    new Automovil("Toyota", "TXL", 75000000, "img/toyota-ml-1-400x300.jpg", "2023", "30.000 km", "Cali - Colombia"),
    new Automovil("Honda", "Civic", 95000000, "img/car-banner2.jpg", "2022", "70.000 km", "Medellín - Colombia"),
    new Automovil("Audi", "Q3", 120000000, "img/Audi.jpg", "2021", "20.000 km", "Cali - Colombia"),
    new Automovil("Bugatti", "Centodieci", 135000000, "img/Bugatti.jpg", "2022", "30.000 km", "Bogotá - Colombia"),
    new Automovil("Lamborgini", "Murcielago", 145000000, "img/Lamborgini.jpg", "2023", "15.000 km", "Medellín - Colombia"),
    new Automovil("Toyota", "Corolla", 65000000, "img/car6.jpg", "2022", "80.000 km", "Bogotá - Colombia")
];

// Función para mostrar los productos que coinciden con la búsqueda
function mostrarProductos(terminoBusqueda) {
    let mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ''; // Limpiar el contenido principal antes de mostrar resultados

    autos.forEach(auto => {
        if (auto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
            // Código para mostrar el producto según los criterios de búsqueda
            let boxproducto = document.createElement("div");
            mainContent.appendChild(boxproducto);
            boxproducto.setAttribute("class", "box-producto");

            let boximg = document.createElement("div");
            boxproducto.appendChild(boximg);
            boximg.setAttribute("class", "box-img");

            let imgAuto = document.createElement("img");
            boximg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto");

            let boxInfo = document.createElement("div");
            boxproducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaL = document.createElement("label");
            boxInfo.appendChild(marcaL);
            let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaL.appendChild(txtNodeMarca);
            marcaL.setAttribute("class", "marca");

            let precio = document.createElement("label");
            boxInfo.appendChild(precio);

            let precioFormateado = auto.precio.toLocaleString();
            let txtNodePrecio = document.createTextNode("$" + precioFormateado);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");

            let infoAdicional = document.createElement("label");
            boxInfo.appendChild(infoAdicional);

            // Utilizamos los valores individuales de fecha, kilometraje y ubicación para cada automóvil
            let infoText = document.createTextNode(`${auto.fecha} - ${auto.kilometraje},  ${auto.ubicacion}`);
            infoAdicional.appendChild(infoText);
            infoAdicional.setAttribute("class", "info-adicional");

            let boxCorazon = document.createElement("div");
            boximg.appendChild(boxCorazon);
            boxCorazon.setAttribute("class", "box-corazon");

            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);
            iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            // Agregamos un evento de clic al icono del corazón
            boxCorazon.addEventListener("click", function () {
                if (auto.favorito) {
                    iconoCorazon.classList.remove("fas");
                    iconoCorazon.classList.add("far");
                    auto.favorito = false;
                } else {
                    iconoCorazon.classList.remove("far");
                    iconoCorazon.classList.add("fas");
                    auto.favorito = true;
                }
            });

            let lineaDiv = document.createElement("hr");
            boxproducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");
        }
    });
}

window.addEventListener("load", function () {
    mostrarProductos(''); // Mostrar todos los productos al cargar la página

    inputBusqueda.addEventListener('input', function () {
        mostrarProductos(inputBusqueda.value);
    });
});

//Filtros
function cargarFiltro(){
let boxFiltro = document.createElement("div");
mainContent.appendChild(boxFiltro);
boxFiltro.setAttribute("class", "box-filtro");
}

//Toggle
let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () => {
    if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.remove("box-toggle-off");
        boxToggle.classList.add("box-toggle-on");
        buttonToggle.classList.remove("button-toggle-off");
        buttonToggle.classList.add("button-toggle-on");
    } else {
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
    }
});
    
//Cuadro de Estrellas
    
document.getElementById('btnMostrarCalificacion').addEventListener('click', function() {
    const calificacion = parseFloat(document.getElementById('inputCalificacion').value);

    if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 5) {
        mostrarCalificacion(calificacion);
    } else {
        alert('Ingresa una calificación válida entre 0 y 5');
    }
});

function mostrarCalificacion(calificacion) {
    const estrellas = document.querySelectorAll('#starsContainer i');

    estrellas.forEach((estrella, index) => {
        if (index < Math.floor(calificacion)) {
            estrella.classList.remove('fa-regular');
            estrella.classList.add('fa-solid');
        } else if (index === Math.floor(calificacion) && calificacion % 1 >= 0.3 && calificacion % 1 <= 0.7) {
            estrella.classList.remove('fa-regular');
            estrella.classList.add('fa-solid', 'fa-star-half-stroke');
        } else {
            estrella.classList.remove('fa-solid', 'fa-star-half-stroke');
            estrella.classList.add('fa-regular');
        }
    });

    document.getElementById('starsContainer').style.display = 'flex';
}

