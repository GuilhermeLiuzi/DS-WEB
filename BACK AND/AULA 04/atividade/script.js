
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
//                                    IMAGENS + MUSICAS
var imagens = [
    "barco1.jpg", 
    "barcos2.jpg", 
    "barcos3.jpg", 
    "coliseu.jpg", 
    "lugar.jpg", 
    "cavalo.jpg",
    "guerra.jpg",
    
];

var musicas = [
    "Nathan Evans - Wellerman (Sea Shanty) - NathanEvansVEVO (youtube).mp3",
    "Rápido Soy - CLAVE ESPECIAL (youtube).mp3",
    "Legio Aeterna Victrix - Roman march. Lyrics. - Ottra the Fox (youtube).mp3",
    "7 Dutch folksongs - Hans Kockelmans (youtube).mp3",
    "Música velho Oeste (Faroeste) - Fernando Rodrigues 50 (youtube).mp3",
    "Canti - Addio Padre E Madre Addio - Europaregion Tirol (youtube).mp3",
    "HINO DA HOLANDA - golaudio (youtube).mp3",
   
];

var indiceImagem = 0;
var audio = document.getElementById("audio");

area.addEventListener("mouseenter", function(){
    var img = document.getElementById("img-hover");

    if (!img) {
        img = document.createElement("img");
        img.id = "img-hover";
        img.style.width = "1000px";
        area.appendChild(img);
    }

    // Troca imagem
    img.src = imagens[indiceImagem];

    // Para música atual
    audio.pause();
    audio.currentTime = 0;

    // Troca música
    audio.src = musicas[indiceImagem];
    audio.play();

    // Próximo índice
    indiceImagem = (indiceImagem + 1) % imagens.length;
});
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






