<?php
$servidor = "localhost";
$porta = 5432;
$bancoDeDados = "db_produtos";
$usuario = "postgres";
$senha = "1234";

$conexao = pg_connect("host=$servidor port=$porta dbname=$bancoDeDados user=$usuario password=$senha");

if (!$conexao) {
    die("Não foi possível se conectar ao banco de dados.");
}
?>
