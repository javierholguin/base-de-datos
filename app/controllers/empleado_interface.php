<?php
session_start();

if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario']!= 'empleado') {
    header("Location: /app/models/login.php");
    exit;
}

// Mostrar la interfaz del empleado
header("Location: /app/views/html/interfaz_empleado.html");
exit;
?>