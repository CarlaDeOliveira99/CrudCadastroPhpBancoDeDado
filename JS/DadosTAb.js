
document.getElementById("btnModalCadastrar").addEventListener('click', function dadosColetados() {
    let produto = {}

  
    produto.produto = document.getElementById('campoProd').value
    produto.quantidade = document.getElementById('quantidade').value
    produto.unidade = document.getElementById('unidade').value
    produto.precoInicial = document.getElementById('precoInicial').value
    produto.precoFinal = document.getElementById('precoFinal').value

    fetch('Php/arquivo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    })
        .then((res) => {
           console.log(res);
        })

})


