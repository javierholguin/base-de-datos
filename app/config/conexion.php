<?php
// Configuración de la conexión
$serverName = "LENOVO-IDEAPAD3";
$databaseName = "minimarket";

// Crear una instancia de la clase sqlsrv
$conn = new sqlsrv($LENOVO-IDEAPAD3, array(
    "Database" => $minimarket,
    "UID" => "",
    "PWD" => "",
    "Authentication" => "Windows"
));

// Verificar si la conexión se estableció correctamente
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . sqlsrv_errors());
}
?>