$(document).ready(function() {
    // Agregar evento a los botones de editar
    $(document).on('click', '.btn-edit', function() {
        const productId = $(this).data('id');
        // Cargar formulario de editar producto
        $.ajax({
            type: "GET",
            url: "/app/controllers/editar_producto.php",
            data: { id: productId },
            success: function(html) {
                // Mostrar formulario de editar producto
                $('#productos-list').append(html);
            }
        });
    });

    // Agregar evento a los botones de eliminar
    $(document).on('click', '.btn-delete', function() {
        const productId = $(this).data('id');
        // Eliminar producto
        $.ajax({
            type: "GET",
            url: "/app/controllers/eliminar_producto.php",
            data: { id: productId },
            success: function() {
                // Actualizar lista de productos
                $.ajax({
                    type: "GET",
                    url: "/app/controllers/productos.php",
                    dataType: "json",
                    success: function(data) {
                        $('#productos-list').html('');
                        $.each(data, function(index, producto) {
                            $('#productos-list').append(`
                                <li>
                                    ${producto.nombre} - ${producto.precio}
                                    <button class="btn-edit" data-id="${producto.id}">Editar</button>
                                    <button class="btn-delete" data-id="${producto.id}">Eliminar</button>
                                </li>
                            `);
                        });
                    }
                });
            }
        });
    });
    // Agregar evento al botón de agregar
    $(document).on('click', '#btn-agregar', function() {
        // Mostrar formulario de agregar producto
        $('#formulario-agregar').removeClass('hidden');
    });

    // Agregar evento al botón de guardar
    $(document).on('click', '#btn-guardar', function(e) {
        e.preventDefault();
        const nombre = $('#nombre').val();
        const precio = $('#precio').val();

        // Agregar nuevo producto
        $.ajax({
            type: "POST",
            url: "/app/controllers/agregar_producto.php",
            data: { nombre, precio },
            success: function(data) {
                // Agregar nuevo producto a la lista
                $('#productos-list').append(`
                    <li>
                        ${nombre} - ${precio}
                        <button class="btn-edit" data-id="${data.id}">Editar</button>
                        <button class="btn-delete" data-id="${data.id}">Eliminar</button>
                    </li>
                `);

                // Ocultar formulario
                $('#formulario-agregar').addClass('hidden');
            }
        });
    });
});