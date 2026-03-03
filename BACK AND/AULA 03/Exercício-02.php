<?php
class Artista {
    public string $nome;
    public string $genero;

    public function __construct(string $nome, string $genero) {
    $this->nome = $nome;
    $this->genero = $genero;
    }
}
class Musica {
    public string $titulo;
    public string $duracao;
    public Artista $artista;

    public function __construct(string $titulo, string $duracao, Artista $artista) {
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;

    
    }
public function exibirInfo() {
        return "O título da música é: " . $this->titulo . "<br>" . " A duração é: " . $this->duracao . "<br>" . " E o artista é: " . $this->artista->nome . "<br>" . " Gênero: " . $this->artista->genero;
    }
}


$artista = new Artista("Queen", "Rock");
$musica = new Musica("Bohemian Rhapsody", "5:55", $artista);

echo $musica->exibirInfo();
?>