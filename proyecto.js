// Precio base
let precio = 400000;

// Conectamos spans del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Mostrar precio inicial
precioSpan.innerHTML = precio;

// Variable cantidad
let cantidad = 0;

// Función para actualizar vista
function actualizarTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}

// Aumentar
function aumentar() {
    cantidad++;
    actualizarTotal();
}

// Disminuir
function disminuir() {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
}