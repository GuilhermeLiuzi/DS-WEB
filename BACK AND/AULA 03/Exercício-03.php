<?php

class Fabricante {
    public string $nome;
    public string $paisOrigem;

    public function __construct(string $nome, string $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}

class Motor {
    public string $potencia;
    public string $combustivel;

    public function __construct(string $potencia, string $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class Carro {
    public string $modelo;
    public string $ano;
    public Fabricante $fabricante;
    public Motor $motor;

    public function __construct(
        string $modelo,
        string $ano,
        Fabricante $fabricante,
        Motor $motor
    ) {
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirFicha() {
        return "O modelo do carro é: " . $this->modelo . "<br>" . "O ano do carro é: " . $this->ano . "<br>" . "O fabricante do carro é: " . $this->fabricante->nome .  " - " . $this->fabricante->paisOrigem . "<br>" . "O motor do carro é: " . $this->motor->potencia .  " - " . $this->motor->combustivel;
    }
}

$fabricante = new Fabricante("Honda", "Japão");
$motor = new Motor("150cv", "Flex");
$carro = new Carro("Civic", "2024", $fabricante, $motor);

echo $carro->exibirFicha();

?>