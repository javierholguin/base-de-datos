const productos = [
    { nombre: "Producto 1", codigo: "COD001", precio: "10.99", categoria: "Electrónica" },
    { nombre: "Producto 2", codigo: "COD002", precio: "5.99", categoria: "Ropa" },
    { nombre: "Producto 3", codigo: "COD003", precio: "20.99", categoria: "Electrónica" },
    // ...
];

const productosTable = document.getElementById("productos-table");
const productosTbody = document.getElementById("productos-tbody");
const agregarBtn = document.getElementById("agregar-btn");

productos.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.codigo}</td>
        <td>${producto.precio}</td>
        <td>${producto.categoria}</td>
        <td class="acciones">
            <button class="editar-btn">Editar</button>
            <button class="eliminar-btn">Eliminar</button>
        </td>
    `;
    productosTbody.appendChild(row);
});

agregarBtn.addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre del producto:");
    const codigo = prompt("Ingrese el código del producto:");
    const precio = prompt("Ingrese el precio del producto:");
    const categoria = prompt("Ingrese la categoría del producto:");

    if (nombre && codigo && precio && categoria) {
        const nuevoProducto = { nombre, codigo, precio, categoria };
        productos.push(nuevoProducto);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${nuevoProducto.nombre}</td>
            <td>${nuevoProducto.codigo}</td>
            <td>${nuevoProducto.precio}</td>
            <td>${nuevoProducto.categoria}</td>
            <td class="acciones">
                <button class="editar-btn">Editar</button>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;
        productosTbody.appendChild(row);
    }
});

document.querySelectorAll(".editar-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const index = Array.from(productosTbody.rows).indexOf(row);

        const nombre = prompt("Ingrese el nuevo nombre del producto:");
        const codigo = prompt("Ingrese el nuevo código del producto:");
        const precio = prompt("Ingrese el nuevo precio del producto:");
        const categoria = prompt("Ingrese la nueva categoría del producto:");

        if (nombre && codigo && precio && categoria) {
            productos[index] = { nombre, codigo, precio, categoria };

            row.children[0].textContent = nombre;
            row.children[1].textContent = codigo;
            row.children[2].textContent = precio;
            row.children[3].textContent = categoria;
        }
    });
});

document.querySelectorAll(".eliminar-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
            const row = btn.closest("tr");
            productosTbody.removeChild(row);

            const index = Array.from(productosTbody.rows).indexOf(row);
            productos.splice(index, 1);
        }
    });
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