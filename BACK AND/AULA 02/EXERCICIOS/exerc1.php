<?php
class Pessoa {
public $nome = "Scud";
protected $idade = 48;
public function verDados(){
echo $this->nome . "<br/>";
echo $this->idade . "<br/>";

}
}
class Funcionario extends Pessoa {
public function verDados(){

//Exibe a Classe atual
echo get_class($this) . "<br/>";
echo $this->nome . "<br/>";
echo $this->idade . "<br/>";

}
protected $salario;
public function __construct($nome, $idade, $salario) {
$this->nome = $nome;
$this->idade = $idade;
$this->salario = $salario;
}

public function calcularBonus() {
	return 0;
}
}

class Gerente extends Funcionario {
public function calcularBonus() {
	return $this->salario * 0.2;
}
}

class Desenvolvedor extends Funcionario {
public function calcularBonus() {
	return $this->salario * 0.1;
}
}

$funcionario = new Funcionario("Ferreira", 40, 5000);
$funcionario->verDados();  

echo "<br/>";

$bruno = new Pessoa();
$bruno->verDados();

$gerente = new Gerente("Ferreira", 40, 5000);
$denvolvedor = new Desenvolvedor("Scud", 30, 4000);

echo "<br/>Gerente: ".$gerente->nome." bonus: R$ ".$gerente->calcularBonus();
echo "<br/>Desenvolvedor: ".$denvolvedor->nome."  bonus: R$ ".$denvolvedor->calcularBonus();
?>
