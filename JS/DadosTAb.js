function coletar_dados() {
    let produto = {}

    produto.id = document.getElementById('campoID').value
    produto.nome = document.getElementById('campoProd').value
    produto.quantidade = document.getElementById('quantidade').value
    produto.unidade = document.getElementById('unidade').value
    produto.precoInicial = document.getElementById('precoInicial').value
    produto.precoFinal = document.getElementById('precoFinal').value

    return produto;
}


function cadastrar(produto) {

    fetch('Php/arquivo.php?tipo=cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    }).then((res) => {
        atualizarTabela('ler');
    })
}


function funcaoAlterar(event) {

    document.getElementById('btnModalCadastrar').style.display = 'none'
    document.getElementById('alterar').style.display = 'inline'

    modal.classList.toggle("hide");
    fundoModal.classList.toggle("hide");

    let itemClicado = event.target.parentElement.parentElement.childNodes
    let id = itemClicado[0].innerText

    fetch('Php/arquivo.php?tipo=ler')
        .then(res => res.json())
        .then(resposta =>
            resposta.forEach(element => {
                if (id == element.id) {
                    document.getElementById('campoID').value = element.id
                    document.getElementById('campoProd').value = element.nome
                    document.getElementById('quantidade').value = element.quantidade
                    document.getElementById('unidade').value = element.unidade
                    document.getElementById('precoInicial').value = element.preco_de_compra
                    document.getElementById('precoFinal').value = element.preco_de_venda
                }
            }))
}


function funcaoDeletar(event) {

    let itemClicado = event.target

    let objeto = itemClicado.parentElement.parentElement.childNodes

    let id = objeto[0].innerText

    fetch('Php/arquivo.php?tipo=deletar&idRegistro=' + id, {
        method: 'DELETE'
    })
        .then((res) => {
            atualizarTabela('ler');
        })

}

function ordenar_home() {
    this.fetch('Php/arquivo.php?tipo=ordenar_home', {
        method: 'GET',
    })
        .then((res) => {
            window.atualizarTabela('ordenar_home');
        })
}

function atualizar_seta_ordenar(categoria, direcao_seta) {

    let id_img = categoria.children[0].id;
    let seta_atual = '';


    if (direcao_seta == "iconesImagensGifs/ambasAsSetas.png") {
       document.getElementById(id_img).src = "iconesImagensGifs/ordenarCima.png";
        seta_atual = "ASC"
    } else if (direcao_seta == "iconesImagensGifs/ordenarCima.png") {
        document.getElementById(id_img).src = "iconesImagensGifs/ordenarBaixo.png";
        seta_atual = "DESC"
    } else {
        document.getElementById(id_img).src= "iconesImagensGifs/ambasAsSetas.png";
       return ordenar_home()
    }

    let categoria_selecionada = categoria.innerText;


    this.fetch('Php/arquivo.php?tipo=ordenar_categoria&seta=' + seta_atual + '&categoria=' + categoria_selecionada, {
        method: 'GET',
    })
        .then((res) => {
            window.atualizarTabela('ordenar_categoria&seta=' + seta_atual + '&categoria=' + categoria_selecionada);
        })

}




function limparCampoCadastro() {
    document.getElementById('campoProd').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('unidade').value = ''
    document.getElementById('precoInicial').value = ''
    document.getElementById('precoFinal').value = ''
}

function atualizarTabela(acao) {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = '';

    fetch('Php/arquivo.php?tipo=' + acao, {
        method: "GET"
    })
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
                this.precoFinal.innerHTML = obj.preco_de_venda;


                this.id.classList.add('center')
                this.produto.classList.add('tdInfo')
                this.quantidade.classList.add('center')
                this.unidade.classList.add('center')
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

window.atualizarTabela = atualizarTabela;
window.limparCampoCadastro = limparCampoCadastro;
window.coletar_dados = coletar_dados;
window.cadastrar = cadastrar;
window.atualizar_seta_ordenar = atualizar_seta_ordenar;
window.ordenar_home = ordenar_home;


