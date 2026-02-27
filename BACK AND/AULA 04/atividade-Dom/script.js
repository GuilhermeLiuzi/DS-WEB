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

var imagens = [
    "barco1.jpg", 
    "barcos2.jpg", 
    "barcos3.jpg", 
    "coliseu.jpg", 
    "lugar.jpg", 
    "cavalo.jpg",
    "guerra.jpg",];
var indiceImagem = 0;

area.addEventListener("mouseenter", function(){
    var img = document.getElementById("img-hover");
    if (!img) {
        img = document.createElement("img");
        img.id = "img-hover";
        img.style.width = "1000px";
        area.appendChild(img);
    }
    img.src = imagens[indiceImagem];
    indiceImagem = (indiceImagem + 1) % imagens.length;
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






