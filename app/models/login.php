<?php
// Conectar a la base de datos
require_once 'conexion.php';

session_start();

// Obtener los datos de inicio de sesión
$username = $_POST['username'];
$password = $_POST['password'];

// Verificar si los datos de inicio de sesión son válidos para empleados
$query_empleados = "SELECT * FROM empleados WHERE username = '$username' AND password = '$password'";
$stmt = sqlsrv_query($conn, $query_empleados);

if (sqlsrv_num_rows($stmt) > 0) {
  $_SESSION['username'] = $username;
  $_SESSION['tipo_usuario'] = 'empleado';
  header("Location: empleado_interface.php");
  exit;
} else {
  // Verificar si los datos de inicio de sesión son válidos para administradores
  $query_administradores = "SELECT * FROM administradores WHERE username = '$username' AND password = '$password'";
  $stmt = sqlsrv_query($conn, $query_administradores);

  if (sqlsrv_num_rows($stmt) > 0) {
    $_SESSION['username'] = $username;
    $_SESSION['tipo_usuario'] = 'administrador';
    header("Location: admin_interface.php");
    exit;
  } else {
    // Si la autenticación falla para ambos tipos de usuarios, mostrar un mensaje de error
    echo 'Credenciales incorrectas';
  }
}
?>