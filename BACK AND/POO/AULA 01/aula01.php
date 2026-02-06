<?php

class Pessoa {

    public $nome; // atributo público

    public function falar() { //metodo

        return "O meu nome é " . $this->nome;

    }
}

$Liuzi = new Pessoa();
$Liuzi->nome = "Liuzi"; 
echo $Liuzi->falar();
?>
