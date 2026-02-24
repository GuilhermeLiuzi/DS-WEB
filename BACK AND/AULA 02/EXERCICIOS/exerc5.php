<?php
class Documento {

    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

// Utilizei IA para fazer a parte de validaçao, por conta de nao conhecer o metodo de validaçao de CPF, usei a IA para me ajudar a fazer a parte de validaçao, e depois eu fiz a parte de classe e herança
class CPF extends Documento {

    public function validar() {

        $cpf = preg_replace('/[^0-9]/', '', $this->getNumero());

        // CPF precisa ter 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Bloqueia CPF com números iguais 
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Validação 
        for ($t = 9; $t < 11; $t++) {

            $soma = 0;

            for ($i = 0; $i < $t; $i++) {
                $soma += $cpf[$i] * (($t + 1) - $i);
            }

            $digito = ((10 * $soma) % 11) % 10;

            if ($cpf[$t] != $digito) {
                return false;
            }
        }

        return true;
    }
}


$cpf = new CPF();
$cpf->setNumero("518.277.247-25"); 

if ($cpf->validar()) {
    echo "CPF válido!";
} else {
    echo "CPF inválido!";
}

?>