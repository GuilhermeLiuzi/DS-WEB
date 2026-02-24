<?php

abstract class Animal {

    abstract public function fazerSom();

    public function mover(){
        return "Anda";
    }
}

class Sapo extends Animal {

    public function fazerSom(){
        return "Coaxa";
    }
}

class Cavalo extends Animal {

    public function fazerSom(){
        return "Relincha";
    }

    public function mover(){
        return "Galopa e " . parent::mover();
    }
}

class Tartaruga extends Animal {

    public function fazerSom(){
        return "Som baixo";
    }

    public function mover(){
        return "Anda lentamente";
    }
}

$sapo = new Sapo();
echo $sapo->fazerSom() . "<br/>";
echo $sapo->mover() . "<br/>";
echo "-------------------------<br/>";

$cavalo = new Cavalo();
echo $cavalo->fazerSom() . "<br/>";
echo $cavalo->mover() . "<br/>";
echo "-------------------------<br/>";

$tartaruga = new Tartaruga();
echo $tartaruga->fazerSom() . "<br/>";
echo $tartaruga->mover() . "<br/>";

?>