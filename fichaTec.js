// Variables globales
var cart = [];
var items = document.querySelectorAll('.item');
var total = 0;

// Función para agregar un artículo al carrito
function addToCart(item) {
    var name = item.querySelector('.name').textContent;
    var price = item.querySelector('.price').textContent;
    var quantity = item.querySelector('.quantity').value;
    var subtotal = price * quantity;
    
    // Agregar artículo al carrito
    cart.push({
        name: name,
        price: price,
        quantity: quantity,
        subtotal: subtotal
    });
    
    // Actualizar el carrito
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    var cartTable = document.querySelector('.cart table tbody');
    var cartTotal = document.querySelector('.cart table tfoot tr td:last-child');
    
    // Limpiar el carrito
    cartTable.innerHTML = '';
    
    // Recorrer los artículos del carrito
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        
        // Agregar artículo al carrito
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + item.name + '</td>' +
                        '<td>' + item.quantity + '</td>' +
                        '<td>$' + item.price + '</td>' +
                        '<td>$' + item.subtotal + '</td>';
        cartTable.appendChild(row);
        
        // Actualizar el total del carrito
        total += item.subtotal;
    }
    
    // Actualizar el valor total del carrito
    cartTotal.textContent = '$' + total.toFixed(2);
}

// Agregar evento click al botón de agregar al carrito
for (var i = 0; i < items.length; i++) {
    var button = items[i].querySelector('.add-to-cart');
    
    button.addEventListener('click', function() {
        addToCart(this.parentNode.parentNode);
    });
}