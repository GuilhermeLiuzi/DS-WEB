//Criando ocontador de itens
let contadorItem = 0;



function adicionar(){
    contadorItem ++;
    let novoItem = document.createElement("li");
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rn = document.getElementById("rn").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turma").value;
    novoItem.innerHTML = contadorItem + " - " + nome + "<br>" + email + "<br>" + rn + "<br>" + telefone + "<br>" + turma;
    novoItem.setAttribute("id", contadorItem);
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")");
    novoItem.appendChild(botaoRemover); //Adicionao botao ao novo item
    document.getElementById("lista").appendChild(novoItem);


}



function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}