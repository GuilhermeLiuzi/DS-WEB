
<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

$id = $segments[2] ?? null;

switch ($method) {
   case 'GET':
    if ($id) {
        $resultado = $database->executeQuery("SELECT * FROM produtos WHERE id = :id", [':id' => $id]);
        $dados = $resultado->fetch();

        if (!$dados) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Produto não encontrado.']);
            break;
        }
    } else {
        $resultado = $database->executeQuery("SELECT * FROM produtos");
        $dados = $resultado->fetchAll();
    }

    echo json_encode(['status' => 'success', 'data' => $dados]);
    break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome'] ?? '');

        if (!$nome) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }
        $database->executeQuery(
            "INSERT INTO produtos (nome) VALUES (:nome)",
            [':nome' => $nome]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Produto cadastrado com sucesso',
            'idProduto' => $database->lastInsertId()
        ]);

        break;

    case 'PUT':
        // Lógica para atualizar um produto existente
        break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'ID do produto não informado'
            ]);
            break;
        }
        $produto = $database->executeQuery(
            "DELETE FROM produtos WHERE id = :id",
            [':id' => $id]
        );
        
        if ($produto->rowCount() === 0) {
            http_response_code(404);
            echo json_encode([
                'status' => 'error',
                'message' => 'Produto não encontrado'
            ]);
            break;
        }

        echo json_encode([
            'status' => 'success',
            'message' => 'Produto deletado com sucesso'
        ]);

    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}





