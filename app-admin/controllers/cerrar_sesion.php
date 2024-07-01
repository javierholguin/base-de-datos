<?php
    session_destroy();

    header('Location: /app/views/login.html');
    exit;
?>