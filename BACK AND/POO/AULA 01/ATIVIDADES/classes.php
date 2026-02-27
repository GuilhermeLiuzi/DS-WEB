<?php
class Aviao {
    public $cor;
    public $potencia;
    public $motor;
    public $autonomia ;
    public $assentos;

    public function voar() {
        return "O avião voa na potencia: " . $this->potencia;
    }
      public function planar() {
        return "O avião plana plana no céu: " . $this->autonomia;
    }
      public function ataca () {
        return "O avião ataca com armas: " . $this->motor;
    }
}

class Tanque  {
    public $blindagem;
    public $calibre;
    public $camuflagem;
    public $autonomia ;
    public $assentos;

    public function andar() {
        return "O tanque anda na potencia: " . $this->potencia;
    }
      public function camuflar() {
        return "O tanque se camufla no terreno:" . $this->camuflagem;
    }
      public function atacar () {
        return "O tanque ataca com armas de calibre: " . $this->calibre;
    }
}

class Navio  {
    public $classe;
    public $Função;
    public $modelo;
    public $tamanho;
    public $nacionalidade;

    public function classe() {
        return "O navio é da classe: " . $this->classe;
    }
      public function tamanho() {
        return "O navio tem o tamanho de: " . $this->tamanho;
    }
      public function nacionalidade() {
        return "O navio é da nacionalidade: " . $this->nacionalidade;
    }
}

class Moto  {
    public $modelo;
    public $potencia;
    public $ano;
    public $tamanho;
    public $valor;

    public function andar() {
        return "A moto anda na potencia: " . $this->potencia;
    }
      public function tamanho() {
        return "A moto é do tamanho:" . $this->tamanho;
    }
      public function valor () {
        return "A moto custa: " . $this->valor;
    }
}

$moto = new Computador();
$computadorBom->modelo = "Acer Nitro 5";
echo "<br>";
echo $computadorBom->modelo();

$computadortamanho = new Computador();
$computadortamanho->tamanho = "15 polegadas";
echo "<br>";
echo $computadortamanho->tamanho();

$computadorFunção = new Computador();
$computadorFunção->função = "jogar e trabalhar";   
echo "<br>";
echo $computadorFunção->função();





class Computador {
    public $modelo ;
    public $tamanho;
    public $processamento;
    public $espaço ;
    public $função;

    public function modelo() {
        return "O computador é do modelo: " . $this->modelo;
    }
      public function tamanho() {
        return "O computador o tamanho: " . $this->tamanho;
    }
      public function função () {
        return "O computador notebook tem a função de : " . $this->função;
    }
}

$computadorBom = new Computador();
$computadorBom->modelo = "Acer Nitro 5";
echo "<br>";
echo $computadorBom->modelo();

$computadortamanho = new Computador();
$computadortamanho->tamanho = "15 polegadas";
echo "<br>";
echo $computadortamanho->tamanho();

$computadorFunção = new Computador();
$computadorFunção->função = "jogar e trabalhar";   
echo "<br>";
echo $computadorFunção->função();

?>