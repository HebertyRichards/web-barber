<?php
session_start(); 

if (!isset($_SESSION['usuario'])) {
    header('Location: login.php');
    exit();
}

include 'conexao.php';

$sql = "SELECT * FROM agendamentos";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Administrativo</title>
    <link rel="stylesheet" href="php.css">
</head>
<body>
    <h1>Painel Administrativo - Agendamentos</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome Cliente</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Serviço</th>
            <th>Barbeiro</th>
            <th>Ações</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo $row['id_agendamento']; ?></td>
                <td><?php echo $row['nome_cliente']; ?></td>
                <td><?php echo $row['telefone']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['data_agendamento']; ?></td>
                <td><?php echo $row['horario']; ?></td>
                <td><?php echo $row['servico']; ?></td>
                <td><?php echo $row['barbeiro']; ?></td>
                <td>
                    <a href="editar.php?id=<?php echo $row['id_agendamento']; ?>">Editar</a>
                    <a href="excluir.php?id=<?php echo $row['id_agendamento']; ?>" onclick="return confirm('Tem certeza que deseja excluir?')">Excluir</a>
                </td>
            </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>