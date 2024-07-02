// script.js

const ventaForm = document.getElementById('venta-form');
const productosList = document.getElementById('productos-list');
const totalCompra = document.getElementById('total-compra');

let productos = [];

ventaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const codigoProducto = document.getElementById('codigo-producto').value;
    const cantidad = document.getElementById('cantidad').value;

    // Simulamos la búsqueda del producto en una base de datos
    const producto = {
        codigo: codigoProducto,
        nombre: `Producto ${codigoProducto}`,
        precio: Math.floor(Math.random() * 100) + 1,
        cantidad: parseInt(cantidad),
    };

    productos.push(producto);

    actualizarCarrito();
});

function actualizarCarrito() {
    productosList.innerHTML = '';

    productos.forEach((producto) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} x ${producto.cantidad} = $${producto.precio * producto.cantidad}`;
        productosList.appendChild(listItem);
    });

    const total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    totalCompra.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("inicio-btn").addEventListener("click", () => {
    window.location.href = '/app-cliente/views/html/interfaz_empleado.html';
});

document.getElementById("consulta-btn").addEventListener("click", () => {
    window.location.href = '/app-cliente/views/html/consulta.html';
});

document.getElementById("ventas-btn").addEventListener("click", () => {
    window.location.href = '/app-cliente/views/html/ventas.html';
});

document.getElementById("cerrar-sesion-btn").addEventListener("click", () => {
    window.location.href = '/app-cliente/views/html/login.html';
});