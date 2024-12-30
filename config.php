<?php
// config.php: Database connection
$host = 'localhost';
$dbname = 'ecommerce';
$user = 'root'; // Change this if needed
$password = ''; // Add your database password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error connecting to the database: " . $e->getMessage());
}
?>
