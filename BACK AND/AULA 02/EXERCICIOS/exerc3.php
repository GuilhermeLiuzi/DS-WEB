<?php

class Veiculo {
    public $marca;
    public $modelo;
    private $velocidade;

    
    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidade = 0;
    }

    //vai acesar a velocidade no "->"
    public function getVelocidade() {
        return $this->velocidade;
    }

    public function setVelocidade($velocidade) {
        if ($velocidade >= 0) {
            $this->velocidade = $velocidade;
        }
    }

    public function exibirVelocidade() {
        echo "Velocidade atual: " . $this->velocidade . " km/h<br>";
    }
}

class Carro extends Veiculo {
    public function acelerar() {
        $novaVelocidade = $this->getVelocidade() + 20;
        $this->setVelocidade($novaVelocidade);
        echo "Carro acelerou para ";
        $this->exibirVelocidade();
    }
}

class Moto extends Veiculo {
    public function acelerar() {
        $novaVelocidade = $this->getVelocidade() + 40;
        $this->setVelocidade($novaVelocidade);
        echo "Moto acelerou para ";
        $this->exibirVelocidade();
    }
}


$carro = new Carro("Toyota", "Corolla");
$moto = new Moto("Honda", "CB500");

$carro->acelerar();
$carro->acelerar();
$moto->acelerar();
$moto->acelerar();
