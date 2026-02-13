//Criando ocontador de itens
let contadorItem = 0;



function adicionar(){
   //Incrementando o contador

    contadorItem ++;
    //Crio o Item

    let novoItem = document.createElement("li");
    //Adiciono o texto ao item
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da tarefa:");

    //Atribuo um id ao item
    novoItem.setAttribute("id", contadorItem);

    //Crio o botao remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")");//Adiciona uma funçao ao botao

    novoItem.appendChild(botaoRemover); //Adicionao botao ao novo item
    document.getElementById("lista").appendChild(novoItem);
}



function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}