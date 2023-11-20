document.getElementById("btnModalCadastrar").addEventListener('click', function dadosColetados() {
   window.cadastrar(window.coletar_dados());

})

this.document.getElementById('btnAdicionar').addEventListener('click', function () {
    document.getElementById('btnModalCadastrar').style.display = 'inline'
    document.getElementById('alterar').style.display = 'none'
    window.limparCampoCadastro();
})

document.getElementById('alterar').addEventListener('click', function () {

    console.log('entrou');
    
    fetch('Php/arquivo.php?tipo=alterar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( window.coletar_dados()),
    }).then((res) => {
        window.atualizarTabela();
    })
   
   
})