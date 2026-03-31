
var divResposta = document.getElementById("resposta")
var inputNome = document.getElementById("nome")
// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos")
    if (!requisicao.ok) {
        var erroTexto = await requisicao.text()
        console.error('Erro ao obter produtos:', requisicao.status, erroTexto)
        divResposta.innerHTML = `<p class="erro">Erro ${requisicao.status}: ${erroTexto}</p>`
        return
    }

    var resposta = await requisicao.json()
    console.log('Resposta getProdutos', resposta)

    const dados = Array.isArray(resposta.data) ? resposta.data : Array.isArray(resposta) ? resposta : []
    if (!dados.length) {
        divResposta.innerHTML = '<p>Nenhum produto encontrado.</p>'
        return
    }

const linhas = dados.map(item => `
    <tr>
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
    </tr>
`).join("");

    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="3" ><center>Produtos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `

}

async function postProduto() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ nome: inputNome.value })
    })

    if (!requisicao.ok) {
        var erroTexto = await requisicao.text()
        console.error('Erro ao cadastrar produto:', requisicao.status, erroTexto)
        alert('Erro ao cadastrar produto: ' + requisicao.status + '\n' + erroTexto)
        return
    }

    var resposta = await requisicao.json()
    console.log(resposta)

    inputNome.value = ""
    getProdutos()
}


async function deleteProduto(id) {
    var requisicao = await fetch(`http://localhost/cafeteria-api/produtos/${id}`, {
        method: "DELETE"
    })

    if (!requisicao.ok) {
        var erroTexto = await requisicao.text()
        console.error('Erro ao deletar produto:', requisicao.status, erroTexto)
        alert('Erro ao deletar produto: ' + requisicao.status + '\n' + erroTexto)
        return
    }

    var resposta = await requisicao.json()
    console.log(resposta)
    getProdutos()
}
