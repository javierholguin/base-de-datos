<?php
require_once 'conexion.php';
$query = "SELECT * FROM productos";
$resultado = mysqli_query($conexion, $query);

// Consultar productos
$stmt = $conn->prepare('SELECT * FROM productos');
$stmt->execute();
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Mostrar lista de productos
echo '<div class="flex flex-wrap -mx-4">';
foreach ($products as $product) {
    echo '<div class="w-full md:w-1/2 xl:w-1/3 p-4">
            <div class="bg-white rounded shadow-md p-4">
                <h2 class="text-lg font-bold">'. $product['name']. '</h2>
                <p class="text-gray-600">'. $product['description']. '</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-id="'. $product['id']. '">Editar</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-id="'. $product['id']. '">Eliminar</button>
            </div>
        </div>';
}
echo '</div>';
