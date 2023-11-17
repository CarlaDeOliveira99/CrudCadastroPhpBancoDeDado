<?php 
include_once('conexaoBD.php');
$conteudoJS = file_get_contents('php://input');


function cadastrar($conteudoJS ){
    $jsonJSArray = json_decode($conteudoJS, true);

    $produto = $jsonJSArray['produto'];
    $quantidade = $jsonJSArray['quantidade'];
    $unidade = $jsonJSArray['unidade'];
    $preco_compra  = $jsonJSArray['precoInicial'];
    $preco_venda = $jsonJSArray['precoFinal'] ;
    
    // $result = pg_query($conexao,"INSERT INTO ");
}
?>