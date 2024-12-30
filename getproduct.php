<?php
// get_products.php: Fetch products from the database
include 'config.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query('SELECT id, name, price, image FROM products');
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
