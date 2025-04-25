<?php
session_start(); 

if (!isset($_SESSION['usuario'])) {
    header('Location: login.php');
    exit();
}

include 'conexao.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM agendamentos WHERE id_agendamento = $id";

    if ($conn->query($sql) === TRUE) {
        echo "Agendamento excluído com sucesso!";
        header('Location: painel.php');
        exit();
    } else {
        echo "Erro ao excluir agendamento: " . $conn->error;
    }
}
?>
