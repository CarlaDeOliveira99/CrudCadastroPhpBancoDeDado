<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> Crud Cadastro </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="Css/Estilo.css">
</head>

<body>
      <!-- Area acima da tabela onde possui os botões e barra de pesquisa -->
    <div id="areaTabela">
        <div id="cabecalhoPesquisaAdicionar">
            <button class="btn" id="btnAdicionar">Adicionar</button>
            <div id="Areapesquisar">
                <input type="search" name="campoPesquisa" id="campoPesquisa">
            </div>
        </div>



        <table>
            <thead>
                <tr id="linhaTituloTab">
                    <td class="titulo" id="titulo1">Cód <img class="imgSeta" id="imgCod" src=""></td>
                    <td class="titulo" id="titulo2">Produto <img class="imgSeta" id="imgPro" src=""></td>
                    <td class="titulo" id="titulo3">Quantidade <img class="imgSeta" id="imgQua" src=""> </td>
                    <td class="titulo" id="titulo4">Unidade <img class="imgSeta" id="imgUni" src=""></td>
                    <td class="titulo" id="titulo5">Preço de Compra <img class="imgSeta" id="imgPreIni" src=""> </td>
                    <td class="titulo" id="titulo6">Preço de Venda <img class="imgSeta" id="imgPreFin" src=""></td>
                    <td class="titulo" id="titulo7">Editar </td>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>

    <!-- Estrutura do modal Cadastro -->
    <div id="modalFundo" class="hide"></div><!--fundo so modal-->
    <div id="modal" class="hide"><!--modal-->
        <div class="modalHeader"><!--cabeçalho-->
            <button type="button" id="btnModalFechar"><img src="iconesImagensGifs/voltar.png" alt=""></button>
            <h1>Cadastrar Produto</h1>
            <div id="txtCadastro">
                <p><input id="campoID" type="hidden" name="id"></p>
                <p id="txtProduto">Produto <input id="campoProd" name="produto" type="text"></p>
                <span id="txtQuantidade">Quantidade <input id="quantidade" class="campoDados" name="quantidade" type="number" step="1" min="1"></span>
                <span id="txtUnidade">Unidade <input class="campoDados" id="unidade" name="unidade" type="text" min="0"></span>
                <p id="txtPrecoIni" class="txtPreco">Preço de Compra <input id="precoInicial" class="campoPreco" name="precoInicial" type="number"></p>
                <p id="txtPrecoFinal" class="txtPreco">Preço de Venda <input id="precoFinal" name="precoFinal" class="campoPreco" type="number"></p>
            </div>

        </div>
        <div id="modalCorpo"><!--corpo-->
            <button type="button" class="salvar" id="btnModalCadastrar">Salvar</button>
            <button type="button" class="salvar" id="alterar">Atualizar</button>
        </div>
    </div>

    <script src="JS/ModalCadastro.js" async defer></script>
    <script src="JS/CarregarIcones.js" async defer></script>
    <script src="JS/DadosTAb.js" async defer></script>


</body>

</html>