<?php
require_once 'conexion.php';

// Agregar nuevo producto
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];

    $query = "INSERT INTO productos (nombre, precio) VALUES ('$nombre', '$precio')";
    $result = mysqli_query($conn, $query);

    if ($result) {
        $id = mysqli_insert_id($conn);
        echo json_encode(['id' => $id]);
    } else {
        echo json_encode(['error' => 'Error al agregar producto']);
    }
}
?>