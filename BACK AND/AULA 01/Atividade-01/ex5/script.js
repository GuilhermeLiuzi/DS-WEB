let capital = Number(prompt("Digite o capital inicial:"));
let taxa = Number(prompt("Digite a taxa de juros mensal (%):"));
let tempo = Number(prompt("Digite o tempo do investimento (em meses):"));

let i = taxa / 100; 
let montante = capital * ((1 + i)** tempo);

alert("Montante")