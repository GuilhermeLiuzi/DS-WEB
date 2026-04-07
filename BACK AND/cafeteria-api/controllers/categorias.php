<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) {
    
}

$id = null;
$endpointIndex = array_search('categorias', $segments, true);
if ($endpointIndex !== false && isset($segments[$endpointIndex + 1])) {
    $id = $segments[$endpointIndex + 1];
}

switch($method){
    // -------------------------------------------------------
    // GET /categorias
    // GET /categorias/1
    // -------------------------------------------------------
    case 'GET':
        $resultado = database->executeQuery('SELECT * FROM categorias' );
        $categorias = $resultado->fetchAll();
        echo json_encode([
            'status' => 'success',
            'data' => $categorias
        ]);
    break;


        /*
        if ($id) {
            $resultado = $database->executeQuery(
                "SELECT id, nome FROM categorias WHERE id = :id;",
                [':id' => $id]
            );
            $dados = $resultado->fetch();

            if (!$dados) {
                http_response_code(404);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Categoria não encontrada.'
                ]);
                break;
            }
        } else {
            $resultado = $database->executeQuery(
                "SELECT id, nome FROM categorias;"
            );
            $dados = $resultado->fetchAll();
        }

        echo json_encode($dados);

        break; */ 
    // -------------------------------------------------------
    // POST /categorias
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = isset($body['nome']) ? trim($body['nome']) : '';

        if (!$nome) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO categorias (nome) VALUES (:nome)",
            [':nome' => $nome]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Categoria cadastrada com sucesso',
            'idCategoria' => $database->lastInsertId()
        ]);

        break;
    // -------------------------------------------------------
    // PUT /categorias/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
       
        break;
    // -------------------------------------------------------
    // DELETE /categorias/1
    // -------------------------------------------------------
    case 'DELETE':
       
        break;
    // -------------------------------------------------------
    // Método não permitido
    // -------------------------------------------------------
    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}


?>