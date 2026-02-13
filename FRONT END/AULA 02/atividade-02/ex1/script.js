function alterarConteudo() {
    let div = document.getElementById("conteudo");
    div.innerHTML = "Exercício 1 - Conteúdo Alterado";
    

    div.style.backgroundColor = "#3498db";
    div.style.padding = "20px";
    div.style.borderRadius = "20px";
    div.style.color = "white";
    div.style.fontSize = "20px";
    
  
    console.log("Conteúdo da div: " + document.getElementById("conteudo").innerHTML);
}
