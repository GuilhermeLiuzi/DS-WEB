

document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();

let resultado = document.getElementById("resultado");
resultado.innerHTML = "";

/* CAPTURAR */

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let confirmaSenha = document.getElementById("confirma-senha").value;
let cpf = document.getElementById("cpf").value;
let telefone = document.getElementById("telefone").value;
let cep = document.getElementById("cep").value;
let data = document.getElementById("data-nascimento").value;
let valor = document.getElementById("valor").value;
let url = document.getElementById("url").value;
let cartao = document.getElementById("cartao").value;

/* LIMPAR ERROS */

document.getElementById("erro-nome").textContent="";
document.getElementById("erro-email").textContent="";
document.getElementById("erro-senha").textContent="";
document.getElementById("erro-cpf").textContent="";
document.getElementById("erro-telefone").textContent="";
document.getElementById("erro-cep").textContent="";
document.getElementById("erro-data-nascimento").textContent="";
document.getElementById("erro-valor").textContent="";
document.getElementById("erro-url").textContent="";
document.getElementById("erro-cartao").textContent="";

/* VALIDAR NOME */

let nomeRegex = /^[A-Za-zÀ-ú\s]{3,50}$/;
/* verifica se o nome segue a regra */
if(!nomeRegex.test(nome)){
    /* se não seguir, exibe mensagem de erro */
document.getElementById("erro-nome").textContent="Nome inválido.";
}else{
    /* Se estiver certo*/
resultado.innerHTML += "Nome válido: "+nome+"<br>";
}

/* EMAIL */

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/* verifica se o email segue a regra */
if(!emailRegex.test(email)){
    /* se não seguir, exibe mensagem de erro */
document.getElementById("erro-email").textContent="Email inválido.";
}else{
    /* Se estiver certo*/
resultado.innerHTML += "Email válido: "+email+"<br>";
}

/* SENHA */

let senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
 /* verifica se a senha segue a regra */
if(!senhaRegex.test(senha)){
document.getElementById("erro-senha").textContent="Senha fraca.";
}
/* verifica se as senhas coincidem, Isso garante que as duas senhas são iguais. */
else if(senha != confirmaSenha){
/* verifica se a confirmação da senha é igual à senha */
document.getElementById("erro-senha").textContent="Senhas não coincidem.";
}
else{
    /* Se estiver certo*/
resultado.innerHTML += "Senha válida<br>";
}

/* CPF (apenas formato) */

let cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
/*testa se segue a regra*/
if(!cpfRegex.test(cpf)){
/* verifica se o CPF segue a regra, ou seja, se tem o formato correto. O CPF deve ser no formato "123.456.789-00". */
document.getElementById("erro-cpf").textContent="CPF inválido.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "CPF válido<br>";
}

/* TELEFONE */

let telRegex = /^\(\d{2}\)\s\d{4,5}\-\d{4}$/;
/*testa se segue a regra*/
if(!telRegex.test(telefone)){
/* verifica se o telefone segue a regra*/
document.getElementById("erro-telefone").textContent="Telefone inválido.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "Telefone válido<br>";
}

/* CEP */

let cepRegex = /^\d{5}\-\d{3}$/;
/*testa se segue a regra*/
if(!cepRegex.test(cep)){
    /* verifica se o CEP segue a regra*/
document.getElementById("erro-cep").textContent="CEP inválido.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "CEP válido<br>";
}

/* DATA */

let dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
/*testa se segue a regra*/
if(!dataRegex.test(data)){
    /* verifica se a data segue a regra*/
document.getElementById("erro-data-nascimento").textContent="Data inválida.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "Data válida<br>";
}

/* VALOR */

let valorRegex = /^\d{1,3}(\.\d{3})*,\d{2}$/;
/*testa se segue a regra*/
if(!valorRegex.test(valor)){
    /* verifica se o valor segue a regra*/
document.getElementById("erro-valor").textContent="Valor inválido.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "Valor válido<br>";
}

/* URL */

let urlRegex = /^(http:\/\/|https:\/\/)/;
/*testa se segue a regra*/
if(!urlRegex.test(url)){
/* verificase a URL segue a regra*/
document.getElementById("erro-url").textContent="URL inválida.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "URL válida<br>";
}

/* CARTÃO */

let cartaoRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
/*testa se segue a regra*/
if(!cartaoRegex.test(cartao)){
    /* verifica se o cartão segue a regra*/
document.getElementById("erro-cartao").textContent="Cartão inválido.";
}else{
/* Se estiver certo*/
resultado.innerHTML += "Cartão válido<br>";
}

});