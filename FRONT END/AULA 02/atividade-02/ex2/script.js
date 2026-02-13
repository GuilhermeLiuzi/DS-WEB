function trocarImagem1() {
    let img = document.getElementById("foto1");
    img.setAttribute("src", "ferrari.jpg");
}

function trocarImagem2() {
    let img = document.getElementById("foto1");
    img.setAttribute("src", "audi.jpg");
}

function mostrarSrc() {
    let img = document.getElementById("foto1");
    console.log(img.getAttribute("src"));
}
