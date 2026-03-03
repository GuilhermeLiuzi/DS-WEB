<?php
class Dono {
    public string $nome;
    public string $telefone;

    public function __construct(string $nome, string $telefone) {
    $this->nome = $nome;
    $this->telefone = $telefone;
    }
}

class Animal {
    public string $nome;
    public string $especie;
    public Dono $dono;

    public function __construct(string $nome, string $especie, Dono $dono) {
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }

    public function exibirDados() {
        return "O nome do animal é: " . $this->nome . "<br>" . " A espécie é: " . $this->especie . "<br>" . " E o dono é: " . $this->dono->nome . "<br>" . " Com telefone: " . $this->dono->telefone;
    }
}

$dono = new Dono("João", "(11) 99999-9999");
$animal = new Animal("Rex", "Cachorro", $dono);

echo $animal->exibirDados();
?>