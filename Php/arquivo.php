<?php 

require_once('config.php');


$statement = $pdo->query('select * from produtos.db_produtos;');



while (($row = $statement->fetch(PDO::FETCH_ASSOC))) {
    print_r($row);
    echo '<br>';
}


// $conteudoJS = file_get_contents('php://input');


// function cadastrar($conteudoJS ){
//     $jsonJSArray = json_decode($conteudoJS, true);

//     $produto = $jsonJSArray['produto'];
//     $quantidade = $jsonJSArray['quantidade'];
//     $unidade = $jsonJSArray['unidade'];
//     $preco_compra  = $jsonJSArray['precoInicial'];
//     $preco_venda = $jsonJSArray['precoFinal'] ;

// }
?>