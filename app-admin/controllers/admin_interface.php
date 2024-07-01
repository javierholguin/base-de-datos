<?php
session_start();

if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario']!= 'administrador') {
    header("Location: /app/models/login.php");
    exit;
}

// Mostrar la interfaz del administrador
header("Location: /app/views/html/interfaz_admin.html");
exit;
?>