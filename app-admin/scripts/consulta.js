const productos = [
    { nombre: "Producto 1", codigo: "COD001", disponibilidad: true, sucursal: "Sucursal 1", cantidad: 10 },
    { nombre: "Producto 2", codigo: "COD002", disponibilidad: false, sucursal: "Sucursal 2", cantidad: 5 },
    { nombre: "Producto 3", codigo: "COD003", disponibilidad: true, sucursal: "Sucursal 1", cantidad: 20 },
    //...
];

const productosTable = document.getElementById("productos-table");
const productosTbody = document.getElementById("productos-tbody");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Función para filtrar la tabla de productos
function filterProducts(searchTerm) {
    const filteredProducts = productos.filter((producto) => {
        return producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
               producto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
               producto.sucursal.toLowerCase().includes(searchTerm.toLowerCase());
    });
    productosTbody.innerHTML = "";
    filteredProducts.forEach((producto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.codigo}</td>
            <td>${producto.disponibilidad ? "Disponible" : "No disponible"}</td>
            <td>${producto.sucursal}</td>
            <td>${producto.cantidad}</td>
        `;
        productosTbody.appendChild(row);
    });
}

// Event listener para el botón de búsqueda
searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        filterProducts(searchTerm);
    } else {
        // Mostrar todos los productos si no se ingresa nada en la barra de búsqueda
        productos.forEach((producto) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.codigo}</td>
                <td>${producto.disponibilidad ? "Disponible" : "No disponible"}</td>
                <td>${producto.sucursal}</td>
                <td>${producto.cantidad}</td>
            `;
            productosTbody.appendChild(row);
        });
    }
});

document.getElementById("inicio-btn").addEventListener("click", () => {
    window.location.href = '/app-admin/views/html/interfaz_admin.html';
});

document.getElementById("consulta-btn").addEventListener("click", () => {
    window.location.href = '/app-admin/views/html/consulta.html';
});

document.getElementById("cerrar-sesion-btn").addEventListener("click", () => {
    window.location.href = '/app-admin/views/html/login.html';
});