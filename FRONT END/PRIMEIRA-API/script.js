var divResposta = document.getElementById("resposta");

var botaoHello = document.getElementById("getHello");
botaoHello.addEventListener("click", requisicaoHello);

async function requisicaoHello(){
    var requisicao = await fetch("http://localhost/PRIMEIRA-API/hello");
    var resposta = await requisicao.json();
    console.log(resposta);

divResposta.innerHTML = "Status: " + resposta.status + "<br>" + "Mensagem: " + resposta.mensagem;   
}


var botaoEcho = document.getElementById("getEcho");
botaoEcho.addEventListener("click", requisicaoEcho);

async function requisicaoEcho(){
    var echo = document.getElementById("inputEcho").value;

    var requisicao = await fetch("http://localhost/PRIMEIRA-API/echo" , {
        method: "POST",
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message : echo})
    });
    var resposta = await requisicao.json();
    console.log(resposta.echo.message);

    divResposta.innerHTML = "Status: " + resposta.status + "<br>" + "Mensagem: " + resposta.echo.message;
}