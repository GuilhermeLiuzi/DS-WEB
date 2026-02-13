function limparTitulo() {
    let titulo = document.querySelector("h1");
    if (titulo) {
        titulo.remove();
    }
}

function fundoRoxo() {
    document.body.style.backgroundColor = "purple";

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Roxo";
    document.body.appendChild(h1);
}

function fundoLaranja() {
    document.body.style.backgroundColor = "orange";

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Laranja";
    document.body.appendChild(h1);
}

function fundoVerde() {
    document.body.style.backgroundColor = "green";

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Verde";
    document.body.appendChild(h1);
}

