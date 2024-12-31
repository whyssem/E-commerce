<?php
// cart.php: Manage cart operations
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

switch ($_GET['action']) {
    case 'add':
        $productId = intval($_POST['productId']);
        $quantity = intval($_POST['quantity'] ?? 1);

        if (isset($_SESSION['cart'][$productId])) {
            $_SESSION['cart'][$productId] += $quantity;
        } else {
            $_SESSION['cart'][$productId] = $quantity;
        }

        echo json_encode(['message' => 'Product added to cart']);
        break;

    case 'view':
        include 'config.php';
        $cart = [];

        foreach ($_SESSION['cart'] as $productId => $quantity) {
            $stmt = $pdo->prepare('SELECT id, name, price FROM products WHERE id = ?');
            $stmt->execute([$productId]);
            $product = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($product) {
                $product['quantity'] = $quantity;
                $product['total'] = $quantity * $product['price'];
                $cart[] = $product;
            }
        }

        echo json_encode($cart);
        break;

    case 'remove':
        $productId = intval($_POST['productId']);

        if (isset($_SESSION['cart'][$productId])) {
            unset($_SESSION['cart'][$productId]);
            echo json_encode(['message' => 'Product removed from cart']);
        } else {
            echo json_encode(['error' => 'Product not found in cart']);
        }
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
}
?>
