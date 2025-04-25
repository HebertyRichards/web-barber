<?php
session_start(); 

if (!isset($_SESSION['usuario'])) {
    header('Location: login.php');
    exit();
}

include 'conexao.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM agendamentos WHERE id_agendamento = $id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome_cliente = $_POST['nome_cliente'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $data_agendamento = $_POST['data_agendamento'];
    $horario = $_POST['horario'];
    $servico = $_POST['servico'];
    $barbeiro = $_POST['barbeiro'];

    $updateSql = "UPDATE agendamentos SET nome_cliente='$nome_cliente', telefone='$telefone', email='$email', data_agendamento='$data_agendamento', horario='$horario', servico='$servico', barbeiro='$barbeiro' WHERE id_agendamento = $id";
    if ($conn->query($updateSql) === TRUE) {
        echo "Agendamento atualizado com sucesso!";
        header('Location: painel.php');
        exit();
    } else {
        echo "Erro ao atualizar agendamento: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Agendamento</title>
</head>
<body>
    <h1>Editar Agendamento</h1>
    <form method="POST">
        <label for="nome_cliente">Nome Cliente:</label>
        <input type="text" id="nome_cliente" name="nome_cliente" value="<?php echo $row['nome_cliente']; ?>" required><br><br>
        
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" value="<?php echo $row['telefone']; ?>"><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo $row['email']; ?>"><br><br>
        
        <label for="data_agendamento">Data:</label>
        <input type="date" id="data_agendamento" name="data_agendamento" value="<?php echo $row['data_agendamento']; ?>"><br><br>
        
        <label for="horario">Horário:</label>
        <input type="time" id="horario" name="horario" value="<?php echo $row['horario']; ?>"><br><br>
        
        <label for="servico">Serviço:</label>
        <input type="text" id="servico" name="servico" value="<?php echo $row['servico']; ?>"><br><br>
        
        <label for="barbeiro">Barbeiro:</label>
        <input type="text" id="barbeiro" name="barbeiro" value="<?php echo $row['barbeiro']; ?>"><br><br>

        <input type="submit" value="Atualizar">
    </form>
</body>
</html>
