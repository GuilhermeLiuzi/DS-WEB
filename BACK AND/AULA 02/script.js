
//Funçao em javascript

function somarNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5, 10)
console.log(resultado)

resultado = somarNumeros(50,100)
console.log(resultado)

// trabalando com DATA e HORA   

let dataAtual = new Date();
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();
console.log(`Data atual: ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`);

///////////////////////////////////////////////////////////////////////////////////
// Outros exemplos de data

let hoje = new Date();
let diasParaAdicionar = 7;

// Criar uma nova data a partir da data atual
let novaData = new Date (hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);
// toLocaleDateString Exibe a data no formato local, ou seja, Dia/Mês/Ano
console.log(novaData.toLocaleDateString());

///////////////////////////////////////////
 let data1 = new Date("2025-03-19");
 let data2 = new Date("2025-03-25");

 // Diferença em milissegundos
 let diferencaMs = data2 - data1;

 // Converter para dias
 let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);
 console.log(`A diferença entre as datas é de ${diferencaDias} dias.`);
 // Saída: Diferença: 6 dias.

///////////////////////////////////////////

// Maniouação de DOM

// Usando o InnerHTML
document.getElementById("conteudo").innerHTML = "<p>Olá, Mundo!</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

//Usando o setAributte e o getAtributte
document.getElementById("foto").setAttribute("src","imagem.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

// Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "2000px";

//Criando uma funçao para um botão 
function mudaTamanho() {
    document.getElementById("foto").style.width = "3000px";
}


function mudaTamanhoMenor() {
    document.getElementById("foto").style.width = "2000px";
}
