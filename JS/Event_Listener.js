document.getElementById("btnModalCadastrar").addEventListener('click', function dadosColetados() {
    window.cadastrar(window.coletar_dados());

})

this.document.getElementById('btnAdicionar').addEventListener('click', function () {
    document.getElementById('btnModalCadastrar').style.display = 'inline'
    document.getElementById('alterar').style.display = 'none'
    window.limparCampoCadastro();
})

document.getElementById('alterar').addEventListener('click', function () {
    fetch('Php/arquivo.php?tipo=alterar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(window.coletar_dados()),
    }).then((res) => {
        window.atualizarTabela('ler');
    })
})


document.getElementById('linhaTituloTab').addEventListener('click', (event) => {

    let direcao_seta = event.target.childNodes[1].attributes.src.nodeValue
    let categoria = event.target;

    window.atualizar_seta_ordenar(categoria,direcao_seta)

})