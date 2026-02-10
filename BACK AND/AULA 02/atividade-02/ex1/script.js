function alterarConteudo() {
    let div = document.getElementById("conteudo");
    div.innerHTML = "Exercício 1 - Conteúdo Alterado";
    

    div.style.backgroundColor = "#3498db";
    div.style.padding = "20px";
    div.style.borderRadius = "5px";
    div.style.color = "white";
    div.style.fontSize = "18px";
    
  
    console.log("Conteúdo da div: " + document.getElementById("conteudo").innerHTML);
}
