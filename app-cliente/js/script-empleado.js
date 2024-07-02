const productos = [
    { nombre: "Producto 1", codigo: "COD001", precio: "10.99", categoria: "Electrónica" },
    { nombre: "Producto 2", codigo: "COD002", precio: "5.99", categoria: "Ropa" },
    { nombre: "Producto 3", codigo: "COD003", precio: "20.99", categoria: "Electrónica" },
    // ...
];

const productosTable = document.getElementById("productos-table");
const productosTbody = document.getElementById("productos-tbody");

productos.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.codigo}</td>
        <td>${producto.precio}</td>
        <td>${producto.categoria}</td>
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