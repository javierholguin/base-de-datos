<?php
require_once 'conexion.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM productos WHERE id = $id";
    $resultado = mysqli_query($conexion, $query);
    $producto = mysqli_fetch_assoc($resultado);

    // Mostrar formulario de editar producto
    echo `
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value="${producto['nombre']}">
            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" value="${producto['precio']}">
            <button type="submit">Guardar cambios</button>
        </form>
    `;
}
?>