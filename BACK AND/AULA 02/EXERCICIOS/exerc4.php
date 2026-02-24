<?php

// Abstrata
abstract class Produto {

    protected $nome;
    protected $preco;
    protected $estoque;

    public function __construct($nome, $preco, $estoque) {
        $this->nome = $nome;
        $this->preco = $preco;
        $this->estoque = $estoque;
    }

    // Encapsulamento
    public function getNome() {
        return $this->nome;
    }

    public function getPreco() {
        return $this->preco;
    }

    public function getEstoque() {
        return $this->estoque;
    }

    
    abstract public function calcularDesconto();
}

class Eletronico extends Produto {

    public function calcularDesconto() {

        $precoFinal = $this->preco * 0.90; // 10% desconto

       
        if ($this->estoque < 5) {
            $precoFinal *= 0.90; // mais 10%
        }

        return $precoFinal;
    }
}

class Roupa extends Produto {

    public function calcularDesconto() {

        $precoFinal = $this->preco * 0.80; // 20% desconto

        
        if ($this->estoque < 5) {
            $precoFinal *= 0.90; // mais 10% de descontooooooooooo
        }

        return $precoFinal;
    }
}


$tv = new Eletronico("Smart TV", 3000, 3);
$celular = new Eletronico("Celular", 2000, 10);

$camiseta = new Roupa("Camiseta", 100, 2);
$calca = new Roupa("Calça", 200, 8);




echo "Produto: " . $tv->getNome() . "  Preço final: R$ " . $tv->calcularDesconto() . "<br>";
echo "Produto: " . $celular->getNome() . "  Preço final: R$ " . $celular->calcularDesconto() . "<br>";
echo "Produto: " . $camiseta->getNome() . "  Preço final: R$ " . $camiseta->calcularDesconto() . "<br>";
echo "Produto: " . $calca->getNome() . "  Preço final: R$ " . $calca->calcularDesconto() . "<br>";

?>