const productos = [
    { nombre: "Producto 1", codigo: "COD001", disponibilidad: true, sucursal: "Sucursal 1", cantidad: 10 },
    { nombre: "Producto 2", codigo: "COD002", disponibilidad: false, sucursal: "Sucursal 2", cantidad: 5 },
    { nombre: "Producto 3", codigo: "COD003", disponibilidad: true, sucursal: "Sucursal 1", cantidad: 20 },
    //...
];

const productosTable = document.getElementById("productos-table");
const productosTbody = document.getElementById("productos-tbody");

productos.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.codigo}</td>
        <td>${producto.disponibilidad? "Disponible" : "No disponible"}</td>
        <td>${producto.sucursal}</td>
        <td>${producto.cantidad}</td>
    `;
    productosTbody.appendChild(row);
});

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