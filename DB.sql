CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, image) VALUES
('Product 1', 10.99, 'images/product1.jpg'),
('Product 2', 15.99, 'images/product2.jpg'),
('Product 3', 20.99, 'images/product3.jpg');
