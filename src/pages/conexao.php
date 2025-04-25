<?php
$config = include(__DIR__ . '../php/.env.php'); 

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
  }
?>
