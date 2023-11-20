
document.getElementById("btnModalCadastrar").addEventListener('click', function dadosColetados() {
    let produto = {}


    produto.nome = document.getElementById('campoProd').value
    produto.quantidade = document.getElementById('quantidade').value
    produto.unidade = document.getElementById('unidade').value
    produto.precoInicial = document.getElementById('precoInicial').value
    produto.precoFinal = document.getElementById('precoFinal').value


    fetch('Php/arquivo.php?tipo=cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    })  .then((res) => {
        atualizarTabela();
    })
       
})

  function atualizarTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = '';

    fetch('Php/arquivo.php?tipo=ler')
        .then(res => res.json())
        .then(resposta =>
            resposta.forEach(element => {
                let obj = element;

                let tr = tbody.insertRow()
                this.id = tr.insertCell()
                this.produto = tr.insertCell()
                this.quantidade = tr.insertCell()
                this.unidade = tr.insertCell()
                this.precoInicial = tr.insertCell()
                this.precoFinal = tr.insertCell()
                let tdacoes = tr.insertCell()

                tr.classList.add('trInfor')

                this.id.innerHTML = obj.id;
                this.produto.innerHTML = obj.nome;
                this.quantidade.innerHTML = obj.quantidade;
                this.unidade.innerHTML = obj.unidade;
                this.precoInicial.innerHTML = obj.preco_de_compra;
                this.precoFinal.innerHTML = obj. preco_de_venda;


                this.id.classList.add('center')
                this.produto.classList.add('tdInfo')
                this.quantidade.classList.add('center')
                this.unidade.classList.add('tdInfo')
                this.precoInicial.classList.add('center')
                this.precoFinal.classList.add('center')

                let imgEditar = document.createElement('img')
                imgEditar.src = 'iconesImagensGifs/editar.png'
                imgEditar.classList.add('imgPadrao')
                imgEditar.setAttribute("id", "btnEditar")
                imgEditar.setAttribute("onclick", "funcaoAlterar(event)")
                let imgExcluir = document.createElement('img')
                imgExcluir.src = 'iconesImagensGifs/lixeira.png'
                imgExcluir.classList.add('imgPadrao')
                imgExcluir.setAttribute("id", "btnExcluir")
                imgExcluir.setAttribute("onclick", "funcaoDeletar(event)")

                tdacoes.appendChild(imgEditar)
                tdacoes.appendChild(imgExcluir)
            }))

         
}



function limparCampoCadastro() {
    document.getElementById('campoProd').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('unidade').value = ''
    document.getElementById('precoInicial').value = ''
    document.getElementById('precoFinal').value = ''
}


window.atualizarTabela = atualizarTabela;
window.limparCampoCadastro = limparCampoCadastro;


