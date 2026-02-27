//                                    EVENTOS DO MOUSE
var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function(){
mensagem.textContent = "Clique simples detectado!";
});

area.addEventListener("dblclick", function(){
// Verifica a cor atual para poder realizar a mudança de cor
 if (area.style.backgroundColor === "lightblue") {
    area.style.backgroundColor = "white";
 } else {
    area.style.backgroundColor = "lightblue";
 }
});

area.addEventListener("mouseenter", function(){
    mensagem.textContent = "O mouse entrou na área!";
});

area.addEventListener("mouseleave", function(){
mensagem.textContent = "O mouse saiu da área!";
});

var posicao = document.getElementById("posicao");

area.addEventListener("mousemove", function(event){
posicao.textContent = "X:" + event.clientX + " Y:"+ event.clientY;
});

area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});


//                                    EVENTOS DO TECLADO
document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});

// Exibe a tecla pressionada













//                                   EVENTOS DE FORMULÁRIO



//                                    EVENTOS DE JANELA