<?php
require_once 'conexion.php';
$query = "SELECT * FROM productos";
$resultado = mysqli_query($conexion, $query);

// Crear array para almacenar los productos
$productos = array();

while ($fila = mysqli_fetch_assoc($resultado)) {
    $productos[] = array(
        "id" => $fila["id"],
        "nombre" => $fila["nombre"],
        "precio" => $fila["precio"]
    );
}
echo json_encode($productos);
?>
