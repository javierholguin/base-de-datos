<?php
// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:base-matriz.database.windows.net,1433; Database = Base_Matriz", "ABDD", "Uleam2024");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "ABDD", "pwd" => "Uleam2024", "Database" => "Base_Matriz", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:base-matriz.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
?>