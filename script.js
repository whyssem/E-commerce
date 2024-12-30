// script.js

// Example product data (to be replaced with database data in PHP backend)
const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 15.99, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 20.99, image: "images/product3.jpg" },
];

// Load featured products
function loadFeaturedProducts() {
    const productsContainer = document.getElementById("products-container");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%;height:auto;">
            <h4>${product.name}</h4>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // This would involve backend interaction to store cart data
}

// Initialize the page
document.addEventListener("DOMContentLoaded", loadFeaturedProducts);
