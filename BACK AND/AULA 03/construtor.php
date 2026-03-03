<?php
class Pessoa {
    public $nome;
    public $idade;

    public function __construct($novoNome, $novaIdade) {
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }

public function exibirDados() {
    return "O nome dapessoa é: " . $this->nome . " e a idade é: " . $this->idade;
}

public function alterarDados($novoNome, $novaIdade) {
    $this->nome = $novoNome;
    $this->idade = $novaIdade;
}
}

$pessoa = new Pessoa("Daniel", 17);

echo $pessoa->exibirDados();

$pessoa->alterarDados("Henry", 17);

echo "<br>";

echo $pessoa->exibirDados();
?>

