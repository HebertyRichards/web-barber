<?php
session_start(); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];


    if ($usuario == 'admin' && $senha == 'senha123') {
        $_SESSION['usuario'] = $usuario; 
        header('Location: painel.php'); 
        exit();
    } else {
        $erro = 'Credenciais inválidas!';
    }
}
?>

<form method="POST">
    <input type="text" name="usuario" placeholder="Usuário">
    <input type="password" name="senha" placeholder="Senha">
    <button type="submit">Login</button>
</form>

<?php if (isset($erro)) echo $erro; ?>
