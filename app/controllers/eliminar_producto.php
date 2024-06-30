<?php
require_once 'conexion.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM productos WHERE id = $id";
    mysqli_query($conexion, $query);
}
?>